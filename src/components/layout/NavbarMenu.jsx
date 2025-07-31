import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faBolt, faCompass, faUser } from '@fortawesome/free-solid-svg-icons'

export default function NavbarMenu() {
  return (
    <div className="flex flex-row flex-nowrap gap-3">
      <button className="btn btn-ghost btn-circle tooltip tooltip-bottom" data-tip={'Explore'}>
        <FontAwesomeIcon icon={faCompass} className="text-xl text-current" />
      </button>
      <button className="btn btn-ghost btn-circle tooltip tooltip-bottom" data-tip={'Chats'}>
        <FontAwesomeIcon icon={faComment} className="text-xl text-current" />
      </button>
      <button className="btn btn-ghost btn-circle tooltip tooltip-bottom" data-tip={'Activity'}>
        <FontAwesomeIcon icon={faBolt} className="text-xl text-current" />
      </button>
      <div className="dropdown dropdown-end dropdown-bottom">
        <button
          tabIndex={0}
          className="btn btn-ghost btn-circle tooltip tooltip-bottom"
          data-tip={'Account'}
        >
          <FontAwesomeIcon icon={faUser} className="text-xl text-current" />
        </button>
        <ul
          tabIndex={0}
          className="menu menu-sm md:menu-md dropdown-content bg-base-200 rounded-box z-1 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
