import Pagination from './Pagination'
import PostCard from './PostCard'
import { QueueListIcon, RectangleGroupIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { saveLayout } from '../utils'
import Alert from './Alert'
import AboutModal from './AboutModal'

export default function Home({ posts, onDelete, sortFilter, setFilter }) {
  const [layout, setLayout] = useState(localStorage.getItem('layout') || 'single')

  const [alert, setAlert] = useState({
    message: 'Post deleted successfully!',
    type: 'success',
    show: false,
  })

  function triggerAlert(message, type) {
    setAlert({ message, type, show: true })
    console.log('alert', alert)
  }

  useEffect(() => {
    saveLayout(layout)
  }, [layout])

  return (
    <>
      {alert.show && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert((prev) => ({ ...prev, show: false }))}
        />
      )}
      <h1 className="text-base-content mb-3.5 text-2xl font-bold">Feed</h1>

      <div className="w-max">
        <div className="flex w-full items-center justify-center md:justify-between">
          <div className="join join-horizontal hidden md:block">
            <button
              className={`btn btn-sm join-item btn-neutral btn-soft tooltip ${layout === 'single' ? 'btn-active' : ''}`}
              onClick={() => setLayout('single')}
              data-tip="One column view"
            >
              <QueueListIcon className="h-5 w-5 stroke-2 text-current" />
            </button>

            <button
              className={`btn btn-sm join-item btn-soft btn-neutral tooltip ${layout === 'double' ? 'btn-active' : ''}`}
              onClick={() => setLayout('double')}
              data-tip="Two column view"
            >
              <RectangleGroupIcon className="h-5 w-5 stroke-2 text-current" />
            </button>
          </div>
          <div className="join join-horizontal">
            <button className="join-item btn btn-sm btn-active btn-neutral">Sort By</button>
            <select
              className="select select-sm join-item select-neutral max-w-fit"
              value={sortFilter}
              onChange={(e) => {
                setFilter(e.target.value)
              }}
            >
              <option value={'recents'}>Most Recents</option>
              <option value={'notes'}>Most notes</option>
            </select>
          </div>
        </div>

        <div
          className={`mt-4 columns-1 gap-4 space-y-4 ${layout === 'double' ? 'md:columns-2' : ''}`}
        >
          {posts.map((item) => (
            <PostCard key={item.id} post={item} onDelete={onDelete} onAlert={triggerAlert} />
          ))}
        </div>

        <Pagination />
      </div>
      <AboutModal />
    </>
  )
}
