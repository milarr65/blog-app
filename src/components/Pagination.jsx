// this one is honestly just decor 😩

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Pagination() {
  return (
    <div className="mt-3 flex w-full justify-between">
      <button className="btn btn-small md:btn-md gap-2 text-sm lg:gap-3">
        <ChevronLeftIcon className="h-4 w-4 stroke-4" />
        Previous page
      </button>
      <button className="btn btn-small btn-neutral md:btn-md gap-2 text-sm lg:gap-3">
        Next page
        <ChevronRightIcon className="h-4 w-4 stroke-4" />
      </button>
    </div>
  )
}
