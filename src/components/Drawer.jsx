import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCompass,
  faComment,
  faBolt,
  faUser,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import ThemeController from './layout/theme-controller'

export default function Drawer({ children }) {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side z-4">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu menu-lg bg-base-200 min-h-full w-70 p-4">
          {/* Sidebar content here */}
          <li className="menu-title text-base-content/70 text-2xl font-semibold">Menu</li>

          <li className="dropdown dropdown-bottom dropdown-center" tabIndex={0}>
            <a>
              <FontAwesomeIcon icon={faPalette} className="size-4 fill-current text-current" />
              Theme
            </a>
            <ThemeController className={'menu-horizontal menu-md bg-base-100 z-5'} />
          </li>

          <li onClick={() => document.getElementById('about-modal').showModal()}>
            <a>
              <FontAwesomeIcon icon={faInfoCircle} className="size-4 fill-current text-current" />
              About
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faCompass} className="size-4 fill-current text-current" />
              Explore
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faComment} className="size-4 fill-current text-current" />
              Chats
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faBolt} className="size-4 fill-current text-current" />
              Activity
            </a>
          </li>
          <li className="dropdown dropdown-bottom dropdown-start" tabIndex={0}>
            <a>
              <FontAwesomeIcon icon={faUser} className="size-4 fill-current text-current" />
              Account
            </a>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-5 p-2 shadow"
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
          </li>
        </ul>
      </div>
    </div>
  )
}
