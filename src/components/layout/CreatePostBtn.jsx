import { PlusIcon } from '@heroicons/react/24/outline'
import useFooterInView from '../../hooks/useFooterInView'
import { Link } from 'react-router'

export default function CreatePostBtn() {
  const isFooterVisible = useFooterInView()

  return (
    <Link
      to={'/new'}
      id="create-post-btn"
      className={`btn btn-secondary hover:btn-primary btn-circle tooltip tooltip-top fixed right-6 bottom-5 z-[3000] p-1.5 transition-opacity duration-300 ${isFooterVisible ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      data-tip="Create post"
      role="button"
    >
      <PlusIcon className="stroke-3" />
    </Link>
  )
}
