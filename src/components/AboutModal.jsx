import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AboutModal() {
  return (
    <dialog id="about-modal" className="modal">
      <div className="modal-box prose">
        <h1 className="text-center">About This Project</h1>
        <p>
          This project is an assignment from the online course{' '}
          <em>"The Complete Full-Stack Web Development Bootcamp"</em> led by Angela Yu. We were
          given full creative control and no starting code.
        </p>

        <p>
          I decided to make this with React and Tailwind CSS since I hadn't really built a proper
          project with these tools before. I had a lot of fun. 😅 I used a Tailwind plugin called{' '}
          <a
            href="https://daisyui.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-info"
          >
            DaisyUi
          </a>{' '}
          to style everything. I definitely recommend it; it's pretty good and has many options
          available.
        </p>

        <p>
          I also used{' '}
          <a
            href="https://tiptap.dev/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-info"
          >
            TipTap
          </a>{' '}
          as my rich text editor. This one was a challenge not gonna lie haha~ I had a hard time
          setting it up and getting it to work the way I wanted. But at the end I got it to work
          (mostly 😅) and I'm so happy I powered through all of it.
        </p>

        <h2>Features</h2>

        <p>
          ✏️ <strong>Post Creation</strong>
        </p>
        <p>
          Anyone can create new posts on the blog. New posts will only last three hours, after that
          they'll be deleted permanently.
        </p>

        <p>
          🗑️ <strong>Edit and Delete</strong>
        </p>
        <p>
          Users can edit and delete any existing post, not just the ones they've created. All
          changes will be discarded after a page refresh.
        </p>

        <p>
          💡 <strong>Post Contents</strong>
        </p>
        <p>
          The post editor supports rich text editing (bold, italics, code blocks, quotes, etc.) It
          also supports embedded media. Currently only YouTube, Spotify, SoundCloud, images and GIFs
          embeds are allowed.
        </p>

        <div className="border-warning text-base-content bg-warning/15 my-4 rounded border-l-4 p-4">
          <div className="flex w-fit flex-row items-center justify-between gap-3">
            <FontAwesomeIcon icon={faTriangleExclamation} className="text-xl text-current" />
            <strong className="text-xl font-bold">NOTE</strong>
          </div>
          <br />
          <strong>You cannot upload your own files from your device. This is not allowed.</strong>
          <br />
          Since I'm not using any sort of database, I have nowhere to store user's local files.{' '}
          <em>You can only upload media via URL.</em>
        </div>

        <p>
          You can check out the this site's github repo{' '}
          <a href="https://github.com/milarr65/blog-app" className="hover:text-info">
            here.
          </a>
        </p>

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
