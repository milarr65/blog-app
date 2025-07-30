import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
  return (
    <>
      <footer className="footer footer-horizontal bg-base-200 text-base-content footer-center p-10">
        <nav id="socials">
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-3">
            <a className="btn btn-ghost btn-circle">
              <FontAwesomeIcon
                icon={faTwitter}
                className="fill-current !text-[24px] text-current"
              />
            </a>
            <a
              href="https://github.com/milarr65"
              className="btn btn-circle btn-ghost hover:btn-primary tooltip hover:cursor-pointer"
              data-tip="Github"
            >
              <FontAwesomeIcon icon={faGithub} className="fill-current !text-[24px] text-current" />
            </a>

            <a className="btn btn-ghost btn-circle">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="fill-current !text-[24px] text-current"
              />
            </a>

            <a className="btn btn-ghost btn-circle">
              <FontAwesomeIcon
                icon={faFacebook}
                className="fill-current !text-[24px] text-current"
              />
            </a>
            <a className="btn btn-ghost btn-circle">
              <FontAwesomeIcon
                icon={faInstagram}
                className="fill-current !text-[24px] text-current"
              />
            </a>
          </div>
        </nav>
        <aside className="place-items-center">
          <p>
            Made with ❤️ by Mila Arroyo
            <br />
            <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()} All rights reserved
            <br />
            Styled with{' '}
            <a href="https://daisyui.com/" className="hover:text-info underline">
              DaisyUi
            </a>
          </p>
        </aside>
      </footer>
    </>
  )
}
