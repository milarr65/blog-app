import defaultAvatar from '../assets/Profile_avatar_placeholder_large.png'
import TipTapEditor from './tiptap-editor/TipTapEditor.jsx'
import { formatDate, savePostToStorage } from '../utils.js'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useRef } from 'react'
import DOMPurify from 'dompurify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import TagInput from './TagInput.jsx'
import { extensions } from './tiptap-editor/TipTapEditor.jsx'
import { generateHTML } from '@tiptap/html'
import highlightCodeBlocks from '../helpers/highlightCodeBlock.js'
import TableModal from './TableModal.jsx'

export default function NewPostForm({ onNewPost, onEdit, posts, onAlert }) {
  const navigate = useNavigate()
  const { postId } = useParams()
  const isEdit = Boolean(postId)

  const editorRef = useRef(null)

  const postToEdit = isEdit ? posts.find((p) => String(p.id) === String(postId)) : null

  const [formData, setFormData] = useState(() => {
    if (isEdit && postToEdit) {
      return { ...postToEdit }
    } else {
      return {
        id: '',
        author: { username: '', avatar: '' },
        body: '',
        tags: [],
        date_edited: '',
        date_created: '',
        notes: 0,
      }
    }
  })

  // When editing, pass the post's body to the form
  useEffect(() => {
    if (isEdit && editorRef.current && formData.body) {
      editorRef.current.commands.setContent(formData.body)
    }
  }, [isEdit, formData.body, editorRef])

  function handleChange(e) {
    const { name, value } = e.target
    if (name === 'tags') {
      setFormData((prev) => ({
        ...prev,
        tags: value
          .split(',')
          .map((tag) => tag.trimStart())
          .filter((tag) => tag.length > 0),
      }))
    } else if (name === 'username') {
      setFormData((prev) => ({
        ...prev,
        author: {
          ...(prev.author || {}),
          username: value,
        },
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  function updateAvatar() {
    const url = prompt('Avatar URL')
    if (url)
      setFormData((prev) => ({
        ...prev,
        author: {
          ...prev.author,
          avatar: url,
        },
      }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const rawHtml = editorRef.current.getHTML()

    const highlightedHtml = highlightCodeBlocks(rawHtml)

    const now = new Date().toISOString()

    const finalPost = {
      ...formData,
      body: DOMPurify().sanitize(highlightedHtml, {
        ADD_TAGS: ['iframe'],
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'],
      }),
      date_created: isEdit ? formData.date_created : now,
      date_edited: isEdit ? now : null,
      id: isEdit ? formData.id : crypto.randomUUID(),
    }

    if (isEdit) {
      onEdit(finalPost)
    } else {
      onNewPost(finalPost)
      savePostToStorage(finalPost)
    }

    console.log('final post: ', finalPost)
    navigate('/')
  }

  if (isEdit && !formData.body) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  return (
    <>
      <h1 className="mb-2.5 text-3xl font-bold">{isEdit ? 'Edit' : 'New'} Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="bg-base-100 grid min-h-fit w-[95vw] grid-cols-1 gap-3 rounded-2xl p-4 sm:w-[374px] md:w-[480px]">
          <div
            id="post-top"
            className="flex w-full flex-row items-center justify-between gap-3 p-1.5 py-3"
          >
            <div className="flex flex-row items-center justify-start gap-4">
              <div className="avatar tooltip" data-tip="Add a picture">
                <div className="h-12 w-12 items-center rounded-full">
                  <img
                    src={formData.author.avatar || defaultAvatar}
                    alt="Profile pic"
                    onClick={updateAvatar}
                    className="tooltip cursor-pointer"
                    data-tip="Add your profile picture"
                  />
                </div>
              </div>
              <div className="grid max-h-fit max-w-fit grid-cols-1 gap-2">
                <input
                  name="username"
                  type="text"
                  className="input validator input-sm text-sm"
                  required
                  placeholder="Username"
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minLength="3"
                  maxLength="30"
                  title="Only letters, numbers or dash"
                  value={formData.author.username}
                  onChange={handleChange}
                />
                <p className="validator-hint">
                  Must be 3 to 30 characters
                  <br />
                  containing only letters, numbers or dash
                </p>
                <p name="date" className="max-h-fit pl-2 text-sm opacity-65">
                  {formatDate(new Date())}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-soft btn-circle tooltip"
              data-tip="Keyboard shortcuts"
              onClick={() => document.getElementById(`table-modal`).showModal()}
            >
              <FontAwesomeIcon icon={faQuestion} className="text-[16px]" />
            </button>
          </div>

          <div id="post-content" className="grid w-full grid-cols-1 p-1.5">
            <div id="editor-place" className="min-h-[100px] w-full min-w-[200px] rounded-xl">
              <TipTapEditor editorRef={editorRef} onAlert={onAlert} />
            </div>
            <TagInput tags={formData.tags} setTags={setFormData} />
          </div>

          <div className="col-span-1 grid grid-cols-4 gap-4">
            <button
              type="button"
              className="btn btn-primary btn-outline col-start-2 ml-1.5 md:max-w-[70px]"
              onClick={() => navigate('/')}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary col-start-3 ml-1.5 md:max-w-[70px]">
              {isEdit ? 'Update' : 'Post'}
            </button>
          </div>
        </div>
      </form>
      <TableModal />
    </>
  )
}
