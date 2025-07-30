import { FlagIcon, NoSymbolIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { toFullDate } from '../utils'
import { useNavigate } from 'react-router'

export default function PostMenu({ date, post_id, onDelete, onAlert }) {
  const navigate = useNavigate()

  const handleDelete = (e) => {
    e.preventDefault()
    onDelete(post_id)
    onAlert?.('Post deleted successfully!', 'success')
  }
  return (
    <>
      <div className="menu dropdown-content join join-vertical w-max">
        <button className="btn btn-soft hove join-item">{toFullDate(date)}</button>
        <button
          className="btn btn-soft join-item inline-flex justify-start"
          onClick={() => navigate(`/edit/${post_id}`)}
        >
          <PencilSquareIcon className="h-4 w-4 stroke-2" />
          Edit
        </button>
        <button
          className="btn btn-soft join-item inline-flex justify-start"
          onClick={() => document.getElementById(`deleteModal-${post_id}`).showModal()}
        >
          <TrashIcon className="h-4 w-4 stroke-2" />
          Delete
        </button>

        <button className="btn btn-soft join-item inline-flex justify-start">
          <NoSymbolIcon className="h-4 w-4 stroke-2" />
          Block
        </button>
        <button className="btn btn-soft join-item inline-flex justify-start">
          <FlagIcon className="h-4 w-4 stroke-2" />
          Report
        </button>
      </div>
      <dialog id={`deleteModal-${post_id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Delete</h3>
          <p className="py-4">Are you sure you wan to delete this post?</p>
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
