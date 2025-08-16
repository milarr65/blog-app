import { formatDate } from '../utils'
import defaultAvatar from '../assets/Profile_avatar_placeholder_large.png'
import {
  ArrowPathRoundedSquareIcon,
  ArrowUpTrayIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import PostMenu from './PostMenu'

export default function PostCard({ post, onDelete, onAlert }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isRepost, setIsRepost] = useState(false)
  const [isShared, setIsShared] = useState(false)

  return (
    <div
      id="post"
      className="bg-base-100 min-h-fit w-[95vw] break-inside-avoid rounded-2xl p-2 sm:w-[374px] lg:w-[480px]"
    >
      <div id="post-top" className="flex w-full flex-row justify-between gap-2 p-1.5 py-3">
        <div id="author-info" className="flex flex-row place-items-center gap-3">
          <div className="avatar">
            <div className="h-10 w-10 rounded-full">
              <img src={post.author.avatar || defaultAvatar} alt={post.author.username + ' icon'} />
            </div>
          </div>
          <div className="grid max-h-fit max-w-fit grid-cols-1">
            <p className="max-h-fit text-sm font-bold">{post.author.username}</p>
            <p className="max-h-fit text-sm opacity-65">
              {post.date_edited
                ? 'Edited • ' + formatDate(post.date_edited)
                : formatDate(post.date_created)}
            </p>
          </div>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end lg:dropdown-center">
          <div role="button" tabIndex={0} className="btn btn-circle btn-soft">
            <EllipsisHorizontalIcon className="h-9 w-9 fill-current stroke-2 opacity-85" />
          </div>
          <PostMenu
            date={post.date_created}
            post_id={post.id}
            onDelete={onDelete}
            onAlert={onAlert}
          />
        </div>
      </div>
      <div id="post-content" className="grid w-full grid-cols-1 p-1.5 wrap-anywhere">
        <div
          className="prose max-w-none items-start"
          dangerouslySetInnerHTML={{ __html: post.body }}
        ></div>
        <div id="tags" className="mt-5 flex w-full flex-row flex-wrap gap-3 text-[0.9rem]">
          {post.tags.map((tag, idx) => (
            <p
              key={idx}
              className="text-base-content/45 max-w-fit hover:cursor-pointer hover:underline"
            >
              {'#' + tag}
            </p>
          ))}
        </div>
      </div>
      <div id="post-bottom" className="mt-5 flex flex-row place-items-center justify-between p-1.5">
        <button className="btn btn-outline text-base-content py-2 hover:cursor-pointer">
          {`${isLiked ? post.notes + 1 : post.notes} notes`}
        </button>
        <div id="buttons" className="flex max-w-fit flex-row gap-1.5">
          <button
            className={`btn btn-circle tooltip btn-soft hover:btn-error ${isLiked ? 'btn-error' : ''}`}
            onClick={() => setIsLiked(!isLiked)}
            data-tip="Like"
          >
            <HeartIcon className={`h-6 w-6 stroke-2 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button
            className={`btn btn-circle tooltip btn-soft hover:btn-success ${isRepost ? 'btn-success' : ''}`}
            onClick={() => setIsRepost(!isRepost)}
            data-tip="Repost"
          >
            <ArrowPathRoundedSquareIcon className={`h-6 w-6 stroke-2`} />
          </button>
          <button
            className={`btn btn-circle tooltip btn-soft hover:btn-info ${isShared ? 'btn-info' : ''}`}
            onClick={() => setIsShared(!isShared)}
            data-tip="Share"
          >
            <ArrowUpTrayIcon className={`h-6 w-6 stroke-2`} />
          </button>
        </div>
      </div>
    </div>
  )
}
