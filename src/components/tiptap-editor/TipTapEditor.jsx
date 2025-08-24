import { EditorContent, useEditor } from '@tiptap/react'
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { CustomYoutube } from '../../custom-extensions/CustomYoutube.jsx'
import { CustomEmbed } from '../../custom-extensions/CustomEmbed.jsx'
import { common, createLowlight } from 'lowlight'
import FloatingMenuContent from './FloatingMenuContent.jsx'
import BubbleMenuContent from './BubbleMenuContent.jsx'
import { useEffect } from 'react'

export const lowlight = createLowlight(common)
lowlight.registerAlias({ javascript: 'js' })

export const extensions = [
  StarterKit.configure({
    codeBlock: false,
    heading: { levels: [1, 2, 3] },
  }),
  Image.configure({
    inline: false,
  }),
  CustomYoutube.configure({
    modestBranding: true,
    nocookie: true,
    inline: false,
  }),
  CustomEmbed,
  CodeBlockLowlight.configure({
    lowlight,
    HTMLAttributes: {
      class: 'hljs',
    },
  }),
  Placeholder.configure({
    placeholder: "What's on your mind?",
  }),
  Link.configure({
    openOnClick: false,
    autolink: false,
    enableClickSelection: true,
    defaultProtocol: 'https',
    protocols: ['http', 'https'],
    linkOnPaste: true,
    isAllowedUri: (url, ctx) => {
      try {
        // construct URL
        const parsedUrl = url.includes(':')
          ? new URL(url)
          : new URL(`${ctx.defaultProtocol}://${url}`)

        // use default validation
        if (!ctx.defaultValidate(parsedUrl.href)) {
          return false
        }

        // disallowed protocols
        const disallowedProtocols = ['ftp', 'file', 'mailto', 'javascript', 'data', 'tel']
        const protocol = parsedUrl.protocol.replace(':', '')

        if (disallowedProtocols.includes(protocol)) {
          return false
        }

        // only allow protocols specified in ctx.protocols
        const allowedProtocols = ctx.protocols.map((p) => (typeof p === 'string' ? p : p.scheme))

        if (!allowedProtocols.includes(protocol)) {
          return false
        }

        // disallowed domains
        const disallowedDomains = ['example-phishing.com', 'malicious-site.net']
        const domain = parsedUrl.hostname

        if (disallowedDomains.includes(domain)) {
          return false
        }

        // all checks have passed
        return true
      } catch {
        return false
      }
    },
    shouldAutoLink: (url) => {
      try {
        // construct URL
        const parsedUrl = url.includes(':') ? new URL(url) : new URL(`https://${url}`)

        // only auto-link if the domain is not in the disallowed list
        const disallowedDomains = ['example-no-autolink.com', 'another-no-autolink.com']
        const domain = parsedUrl.hostname

        return !disallowedDomains.includes(domain)
      } catch {
        return false
      }
    },
  }),
]

export default function TipTapEditor({ editorRef }) {
  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class:
          'prose prose-base border-1 border-base-100 focus:outline-none bg-base-100 w-full h-full min-h-[100px] focus:border-base-content min-w-[100px] rounded-xl mb-1.5 py-2.5 px-1.5',
      },
    },
    content: '',
  })

  useEffect(() => {
    if (editor && editorRef) {
      editorRef.current = editor
    }
  }, [editor, editorRef])

  return (
    <>
      <EditorContent editor={editor} />
      <FloatingMenuContent editor={editor} />
      <BubbleMenuContent editor={editor} />
    </>
  )
}
