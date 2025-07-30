import Home from './components/Home'
import AppLayout from './components/layout/AppLAyout'
import { Routes, Route } from 'react-router'
import data from './data/posts.json'
import NewPostForm from './components/NewPostForm'
import { getSavedPosts } from './utils'
import { useEffect, useState } from 'react'

function App() {
  const [posts, setPosts] = useState(data)
  const [sortBy, setSortBy] = useState(() => {
    return localStorage.getItem('sortBy') || 'recents'
  })

  useEffect(() => {
    const validPosts = getSavedPosts()
    const merged = [...validPosts, ...data]
    setPosts(merged)
  }, [])

  useEffect(() => {
    localStorage.setItem('sortBy', sortBy)
  }, [sortBy])

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === 'notes') {
      return b.notes - a.notes
    } else {
      const aDate = new Date(a.date_edited || a.date_created)
      const bDate = new Date(b.date_edited || b.date_created)
      return bDate - aDate
    }
  })

  function handleNewPost(newPost) {
    setPosts((prev) => [newPost, ...prev])
  }

  const handleUpdate = (updatedPost) => {
    setPosts((prev) => prev.map((p) => (p.id === updatedPost.id ? updatedPost : p)))
  }

  const handleDelete = (postId) => {
    setPosts((prev) => prev.filter((p) => p.id !== postId))
  }

  return (
    <AppLayout>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              posts={sortedPosts}
              onDelete={handleDelete}
              sortFilter={sortBy}
              setFilter={setSortBy}
            />
          }
        />
        <Route path="/new" element={<NewPostForm onNewPost={handleNewPost} />} />
        <Route path="/edit/:postId" element={<NewPostForm posts={posts} onEdit={handleUpdate} />} />
      </Routes>
    </AppLayout>
  )
}

export default App
