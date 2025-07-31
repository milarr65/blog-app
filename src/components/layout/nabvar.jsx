import ThemeController from './theme-controller'
import NavbarMenu from './NavbarMenu'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-300/90 text-base-content sticky top-0 z-30 backdrop-blur">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl font-bold">
            BlogUi
          </Link>
          <div className="flex flex-row flex-nowrap gap-3 sm:hidden">
            <div className="dropdown dropdown-bottom dropdown-center">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-circle btn-ghost tooltip tooltip-bottom"
                data-tip="Theme"
              >
                <FontAwesomeIcon icon={faPalette} className="fill-current text-xl" />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content menu menu-sm menu-horizontal bg-base-200 rounded-box z-1 min-w-max p-2 shadow-2xl"
              >
                <ThemeController />
              </div>
            </div>
            <div>
              <button
                className="btn btn-ghost tooltip tooltip-bottom"
                data-tip="About"
                onClick={() => document.getElementById('about-modal').showModal()}
              >
                <FontAwesomeIcon icon={faInfoCircle} className="fill-current text-xl" />
              </button>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="dropdown dropdown-center dropdown-bottom">
              <div tabIndex={0} role="button" className="btn btn-ghost m-1">
                Theme
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu menu-sm md:menu-md menu-horizontal bg-base-200 rounded-box z-1 min-w-max p-2 shadow-2xl"
              >
                <ThemeController />
              </ul>
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
        </div>
      </div>
    </>
  )
}
