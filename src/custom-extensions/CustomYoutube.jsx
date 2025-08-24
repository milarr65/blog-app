import Youtube from '@tiptap/extension-youtube'

export const CustomYoutube = Youtube.extend({
  renderHTML({ HTMLAttributes }) {
    const originalUrl = HTMLAttributes.src
    const match = originalUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/)
    const videoId = match?.[1]

    if (!videoId) {
      return ['p', {}, 'Invalid YouTube URL']
    }

    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`

    return [
      'iframe',
      {
        src: embedUrl,
        allowfullscreen: 'true',
        allow: 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture',
        frameborder: '0',
        loading: 'lazy',
        width: '100%',
        style: 'width:100%; max-height:230px; border-radius:12px; aspect-ratio:16/9;',
        class: 'aspect-video rounded-xl',
      },
    ]
  },
})
