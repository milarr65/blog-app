import { BubbleMenu } from '@tiptap/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBold,
  faItalic,
  faListOl,
  faListUl,
  faStrikethrough,
  faQuoteRight,
  faCode,
  faHeading,
} from '@fortawesome/free-solid-svg-icons'
import { H1Icon, H2Icon, H3Icon } from '@heroicons/react/24/outline'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export default function BubbleMenuContent({ editor }) {
  if (!editor) {
    return null
  }

  const handleLink = () => {
    const hasLink = editor.isActive('link')

    if (hasLink) {
      editor.chain().focus().unsetLink().run()
    } else {
      const prevUrl = editor.getAttributes('link').href
      const url = window.prompt(
        'Paste a url.\nLeave the input field empty to delete the link.',
        prevUrl
      )

      // cancelled
      if (url === null) {
        return
      }

      // empty
      if (url === '') {
        editor.chain().focus().extendMarkRange('link').unsetLink().run()

        return
      }

      try {
        if (url) editor.chain().focus().setLink({ href: url.trim() }).run()
      } catch (e) {
        alert(e.message)
      }
    }
  }

  return (
    <BubbleMenu
      className="bubble-menu join join-horizontal"
      tippyOptions={{ duration: 100, placement: 'auto' }}
      editor={editor}
    >
      <div className="dropdown dropdown-bottom dropdown-hover dropdown-center">
        <div
          tabIndex={0}
          role="button"
          type="button"
          className={`btn btn-sm btn-soft join-item tooltip tooltip-top ${editor.isActive('heading') ? 'btn-active btn-primary' : ''}`}
          data-tip="Headings"
        >
          <FontAwesomeIcon icon={faHeading} className="fill-current !text-[13px] text-current" />
        </div>

        <div className="dropdown-content">
          <button
            type="button"
            className={`btn btn-sm btn-soft ${editor.isActive('heading', { level: 1 }) ? 'btn-active btn-primary' : ''}`}
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          >
            <H1Icon className="h-5 w-5 stroke-2" />
          </button>

          <button
            type="button"
            className={`btn btn-sm btn-soft ${editor.isActive('heading', { level: 2 }) ? 'btn-active btn-primary' : ''}`}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          >
            <H2Icon className="h-5 w-5 stroke-2" />
          </button>

          <button
            type="button"
            className={`btn btn-sm btn-soft ${editor.isActive('heading', { level: 3 }) ? 'btn-active btn-primary' : ''}`}
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          >
            <H3Icon className="h-5 w-5 stroke-2" />
          </button>
        </div>
      </div>

      <button
        type="button"
        className={`btn btn-sm btn-soft join-item tooltip tooltip-top ${editor.isActive('bold') ? 'btn-active btn-primary' : ''}`}
        onClick={() => editor.chain().focus().toggleBold().run()}
        data-tip="Bold"
      >
        <FontAwesomeIcon icon={faBold} className="fill-current !text-[13px] text-current" />
      </button>

      <button
        type="button"
        className={`btn btn-sm btn-soft join-item tooltip ${editor.isActive('italic') ? 'btn-active btn-primary' : ''}`}
        data-tip="Italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <FontAwesomeIcon icon={faItalic} className="fill-current !text-[13px] text-current" />
      </button>

      <button
        type="button"
        className={`btn btn-sm btn-soft join-item tooltip ${editor.isActive('strike') ? 'btn-active btn-primary' : ''}`}
        data-tip="Strike Through"
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <FontAwesomeIcon
          icon={faStrikethrough}
          className="fill-current !text-[13px] text-current"
        />
      </button>

      <button
        type="button"
        className={`btn btn-sm btn-soft join-item tooltip ${editor.isActive('bulletList') ? 'btn-active btn-primary' : ''}`}
        data-tip="Bullet List"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <FontAwesomeIcon icon={faListUl} className="fill-current !text-[13px] text-current" />
      </button>

      <button
        type="button"
        className={`btn btn-sm btn-soft join-item tooltip ${editor.isActive('orderedList') ? 'btn-active btn-primary' : ''}`}
        data-tip="Numbered List"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <FontAwesomeIcon icon={faListOl} className="fill-current !text-[13px] text-current" />
      </button>

      <button
        type="button"
        className={`btn btn-sm btn-soft join-item tooltip ${editor.isActive('blockQuote') ? 'btn-active btn-primary' : ''}`}
        data-tip="Block Quote"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <FontAwesomeIcon icon={faQuoteRight} className="fill-current !text-[13px] text-current" />
      </button>

      <button
        type="button"
        className={`btn btn-sm btn-soft join-item tooltip tooltip-top ${editor.isActive('code') ? 'btn-active btn-primary' : ''}`}
        onClick={() => editor.chain().focus().toggleCode().run()}
        data-tip="Code Span"
      >
        <FontAwesomeIcon icon={faCode} className="fill-current !text-[13px] text-current" />
      </button>

      <button
        type="button"
        className={`btn btn-sm btn-soft join-item tooltip tooltip-top ${editor.isActive('link') ? 'btn-active btn-primary' : ''}`}
        onClick={handleLink}
        data-tip={editor.isActive('link') ? 'Unlink' : 'Add link'}
      >
        <FontAwesomeIcon icon={faLink} className="fill-current !text-[13px] text-current" />
      </button>
    </BubbleMenu>
  )
}
