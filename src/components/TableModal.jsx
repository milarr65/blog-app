import CommandsTable from './CommandsTable'

export default function TableModal() {
  return (
    <dialog id={`table-modal`} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-6xl lg:w-5/6">
        <h3 className="text-lg font-bold">Keyboard Shortcuts</h3>
        <CommandsTable />
        <div className="modal-action">
          <form method="dialog" className="">
            <button className="btn btn-secondary">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}
