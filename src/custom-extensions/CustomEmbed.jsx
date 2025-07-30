// CustomEmbed.js
import { Node, mergeAttributes, PasteRule } from '@tiptap/core'
import { Plugin, PluginKey } from '@tiptap/pm/state'

export const CustomEmbed = Node.create({
  name: 'customEmbed',

  group: 'block',

  atom: true,

  draggable: true,

  addAttributes() {
    return {
      type: { default: null }, // e.g., 'spotify', 'soundcloud', 'gif'
      src: { default: null },
      style: {
        default: null,
        parseHTML: (element) => element.getAttribute('style'),
        renderHTML: (attributes) => {
          if (!attributes.style) return {}
          return {
            style: attributes.style,
          }
        },
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-embed-type]',
        getAttrs: (el) => ({
          type: el.getAttribute('data-embed-type'),
          src: el.querySelector('iframe, img')?.getAttribute('src'),
        }),
      },
    ]
  },

  renderHTML({ node }) {
    const { type, src } = node.attrs
    const baseAttrs = {
      'data-embed-type': type,
      class: 'custom-embed-wrapper mt-4 w-full min-h-fit',
    }

    if (type === 'spotify') {
      return [
        'div',
        mergeAttributes(baseAttrs),
        [
          'iframe',
          {
            src,
            width: '100%',
            height: src.includes('playlist') || src.includes('album') ? '352' : '152',
            style: 'border-radius: 12px; overflow:hidden;',
            frameborder: '0',
            allow: 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture',
            allowfullscreen: 'true',
            loading: 'lazy',
            class: 'rounded-2xl overflow-hidden min-h-[152px]',
          },
        ],
      ]
    }

    if (type === 'soundcloud') {
      // SoundCloud “visual=true” embed
      // + extra parameters for dark theme, hide related, etc.
      const url = new URL(src)
      // ensure visual=true in case your handler didn't add it yet
      url.searchParams.set('visual', 'true')
      url.searchParams.set('color', '#ff5500')
      url.searchParams.set('inverse', 'false')
      url.searchParams.set('auto_play', 'false')
      url.searchParams.set('hide_related', 'false')
      url.searchParams.set('show_comments', 'false')
      url.searchParams.set('show_user', 'true')
      url.searchParams.set('show_reposts', 'false')

      return [
        'div',
        mergeAttributes(baseAttrs, {
          style: 'position: relative; padding-top: 56.25%; overflow: hidden;',
          class: 'aspect-video max-h-[300px]',
        }),
        [
          'iframe',
          {
            src: url.toString(),
            scrolling: 'no',
            frameborder: 'no',
            allow: 'autoplay',
            // full bleed inside the wrapper
            style: 'position: absolute; top:0; left:0; width:100%; height:100%; border:none;',
            class: 'w-full h-full',
          },
        ],
      ]
    }

    // if (type === 'spotify' || type === 'soundcloud') {
    //   return [
    //     'div',
    //     mergeAttributes(baseAttrs),
    //     [
    //       'iframe',
    //       {
    //         src,
    //         frameborder: 0,
    //         allow: 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture',
    //         allowfullscreen: 'true',
    //         width: '100%',
    //         height: '152',
    //         datatestid: 'embed-iframe',
    //         style: 'display:block; max-width:100%; border:none; border-radius: 13px;',
    //       },
    //     ],
    //   ]
    // }

    if (type === 'gif') {
      return ['div', mergeAttributes(baseAttrs), ['img', { src, class: 'rounded' }]]
    }

    return ['div', mergeAttributes(baseAttrs), `Unsupported embed type: ${type}`] // fallback
  },

  addProseMirrorPlugins() {
    const nodeType = this.type

    return [
      new Plugin({
        key: new PluginKey('custom-embed-paste-handler'),
        props: {
          handlePaste(view, event) {
            const text = event.clipboardData?.getData('text/plain')

            if (!text) return false

            // Spotify
            if (text.includes('open.spotify.com')) {
              event.preventDefault()

              const pathname = new URL(text).pathname.replace(/^\/intl-[^/]+/, '')
              const src = `https://open.spotify.com/embed${pathname}`

              const node = nodeType.create({ type: 'spotify', src })

              const transaction = view.state.tr.replaceSelectionWith(node)

              view.dispatch(transaction)
              return true
            }

            // SoundCloud
            if (text.includes('soundcloud.com')) {
              event.preventDefault()

              const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(text)}`

              const node = nodeType.create({
                type: 'soundcloud',
                src,
              })

              const transaction = view.state.tr.replaceSelectionWith(node)

              view.dispatch(transaction)
              return true
            }

            // GIFs
            if (text.match(/\.(gif)(\?.*)?$/i)) {
              event.preventDefault()

              const node = nodeType.create({ type: 'gif', src: text })
              const transaction = view.state.tr.replaceSelectionWith(node)
              view.dispatch(transaction)

              return true
            }

            return false // let other handlers run if it's not an embed link
          },
        },
      }),
    ]
  },

  //   addPasteRules() {
  //     return [
  //       new PasteRule({
  //         find: /(https?:\/\/[^\s]+)/g,
  //         handler: ({ match, chain }) => {
  //           const url = match[0]

  //           if (url.includes('open.spotify.com')) {
  //             const pathname = new URL(url).pathname.replace(/^\/intl-[^/]+/, '')

  //             return chain()
  //               .insertContent({
  //                 type: 'customEmbed',
  //                 attrs: {
  //                   type: 'spotify',
  //                   src: `https://open.spotify.com/embed${pathname}`,
  //                 },
  //               })
  //               .run()
  //           }

  //           if (url.includes('soundcloud.com')) {
  //             return chain()
  //               .insertContent({
  //                 type: 'customEmbed',
  //                 attrs: {
  //                   type: 'soundcloud',
  //                   src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}`,
  //                 },
  //               })
  //               .run()
  //           }

  //           if (url.match(/\.(gif)(\?.*)?$/i)) {
  //             return chain()
  //               .insertContent({
  //                 type: 'customEmbed',
  //                 attrs: {
  //                   type: 'gif',
  //                   src: url,
  //                 },
  //               })
  //               .run()
  //           }
  //         },
  //       }),
  //     ]
  //   },
})
