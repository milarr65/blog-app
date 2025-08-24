import ThemeController from './theme-controller'
import NavbarMenu from './NavbarMenu'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className="navbar bg-base-300/90 text-base-content sticky top-0 z-3 backdrop-blur">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          BlogUi
        </Link>
        <div className="hidden sm:flex">
          <div className="dropdown dropdown-center dropdown-bottom">
            <button tabIndex={0} className="btn btn-ghost">
              Theme
            </button>
            <ThemeController className={'menu-horizontal bg-base-200 z-1'} />
          </div>
          <button
            className="btn btn-ghost"
            onClick={() => document.getElementById(`about-modal`).showModal()}
          >
            About
          </button>
        </div>
      </div>
      <div className="navbar-end">
        <NavbarMenu />
        <div className="flex-none sm:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <FontAwesomeIcon icon={faBars} className="!h-5 w-5 text-current" />
          </label>
        </div>
      </div>
    </div>
  )
}
