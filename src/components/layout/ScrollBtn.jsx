import useFooterInView from '../../hooks/useFooterInView'
import { scrollToTop } from '../../utils'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

export default function ScrollBtn() {
  const isFooterVisible = useFooterInView()
  return (
    <button
      className={`btn btn-secondary hover:btn-primary btn-circle tooltip tooltip-top fixed bottom-5 left-6 z-[3000] p-1.5 transition-opacity duration-300 ${isFooterVisible ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      data-tip="Back to top"
      onClick={scrollToTop}
    >
      <ArrowUpIcon className="stroke-3" />
    </button>
  )
}
