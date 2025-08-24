import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function TagInput({ tags, setTags }) {
  const [tagInput, setTagInput] = useState('')

  function handleKeydown(e) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()

      const newTag = tagInput.trim()

      if (newTag && !tags.includes(newTag)) {
        setTags((prev) => ({
          ...prev,
          tags: [...prev.tags, newTag],
        }))
      }

      setTagInput('')
    } else if (e.key === 'Backspace' && tagInput === '') {
      setTags((prev) => ({
        ...prev,
        tags: prev.tags.slice(0, -1),
      }))
    }
  }

  function deleteTag(idx) {
    setTags((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag, i) => i !== idx), //filter out the tag with a matching index
    }))
  }

  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className="badge badge-neutral badge-ghost flex h-fit w-fit px-[0.7rem] py-[0.3rem]"
        >
          # {tag}
          <button type="button" onClick={() => deleteTag(idx)}>
            <XMarkIcon className="hover:text-error h-4 w-4 cursor-pointer stroke-3" />
          </button>
        </span>
      ))}
      <input
        name="tag"
        type="text"
        placeholder="Add some tags!"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={handleKeydown}
        className="badge badge-neutral h-fit w-max px-[0.7rem] py-[0.3rem]"
      />
    </div>
  )
}
