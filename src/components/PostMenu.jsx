import { FlagIcon, NoSymbolIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { toFullDate } from '../utils'
import { useNavigate } from 'react-router'

export default function PostMenu({ date, post_id, onDelete, onAlert }) {
  const navigate = useNavigate()

  const handleDelete = (e) => {
    e.preventDefault()
    onDelete(post_id)
    onAlert('The post has been deleted!', 'success')
  }
  return (
    <>
      <ul tabIndex={0} className="menu dropdown-content rounded-box bg-base-200 w-max shadow">
        <li>
          <a>{toFullDate(date)}</a>
        </li>
        <li onClick={() => navigate(`/edit/${post_id}`)}>
          <a>
            <PencilSquareIcon className="h-4 w-4 stroke-2" />
            Edit
          </a>
        </li>
        <li onClick={() => document.getElementById(`deleteModal-${post_id}`).showModal()}>
          <a>
            <TrashIcon className="h-4 w-4 stroke-2" />
            Delete
          </a>
        </li>

        <li>
          <a>
            <NoSymbolIcon className="h-4 w-4 stroke-2" />
            Block
          </a>
        </li>
        <li>
          <a>
            <FlagIcon className="h-4 w-4 stroke-2" />
            Report
          </a>
        </li>
      </ul>

      <dialog id={`deleteModal-${post_id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Delete</h3>
          <p className="py-4">Are you sure you want to delete this post?</p>
          <div className="modal-action">
            <form method="dialog" className="grid grid-cols-2 gap-3">
              <button className="btn">Cancel</button>
              <button className="btn btn-soft btn-error" onClick={handleDelete}>
                Delete Post
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}
