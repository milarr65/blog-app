import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faListOl,
  faListUl,
  faHeading,
  faImage,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons'
import { CodeBracketSquareIcon, H1Icon, H2Icon, H3Icon } from '@heroicons/react/24/outline'
import { FloatingMenu } from '@tiptap/react'
import { validateImgUrl } from '../../helpers/validateImgUrl'

export default function FloatingMenuContent({ editor }) {
  if (!editor) {
    return null
  }

  const handleImage = () => {
    const url = prompt(
      "Paste your Url.\nImages are only alowed via url. You can't upload your own files"
    )
    if (!validateImgUrl(url)) {
      alert('Invalid url. Please use a direct link to a JPG, PNG, or WebP image.')
    } else {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  return (
    <FloatingMenu editor={editor} tippyOptions={{ duration: 100, placement: 'auto' }}>
      <div data-testid="floating-menu" className="floating-menu join join-horizontal">
        <div className="dropdown dropdown-bottom dropdown-hover dropdown-start">
          <div
            tabIndex={0}
            type="button"
            className={`btn btn-sm btn-soft join-item tooltip tooltip-top ${editor.isActive('heading') ? 'btn-active btn-primary' : ''}`}
            data-tip="Headings"
          >
            <FontAwesomeIcon icon={faHeading} className="fill-current !text-[13px] text-current" />
          </div>

          <div tabIndex={0} className="dropdown-content">
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
          className={`btn btn-sm btn-soft join-item tooltip ${editor.isActive('blockQuote') ? 'btn-active btn-primary' : ''}`}
          data-tip="Block Quote"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <FontAwesomeIcon icon={faQuoteRight} className="fill-current !text-[13px] text-current" />
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
          className={`btn btn-sm btn-soft join-item tooltip ${editor.isActive('codeBlock') ? 'btn-active btn-primary' : ''}`}
          data-tip="Code Block"
          onClick={() => editor.chain().focus().setCodeBlock({ language: 'js' }).run()}
        >
          <CodeBracketSquareIcon className="h-5 w-5 stroke-2" />
        </button>

        <button
          type="button"
          className={`btn btn-sm btn-soft join-item tooltip ${editor.isActive('image') ? 'btn-active btn-primary' : ''}`}
          data-tip="Image"
          onClick={handleImage}
        >
          <FontAwesomeIcon icon={faImage} className="fill-current !text-[13px] text-current" />
        </button>
      </div>
    </FloatingMenu>
  )
}
