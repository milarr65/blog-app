export function formatDate(date) {
  const dateIsCurrentYear = new Date(date).getFullYear() === new Date().getFullYear()

  return new Intl.DateTimeFormat(undefined, {
    month: 'short',
    day: 'numeric',
    year: dateIsCurrentYear ? undefined : 'numeric',
  }).format(new Date(date))
}

export function toFullDate(date) {
  const formated = new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
    // hour: 'numeric',
    // minute: '2-digit',
    // hour12: true
  }).format(new Date(date))
  return formated
}

export function scrollToTop() {
  var rootElement = document.documentElement

  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export function capitalize(word) {
  if (typeof word !== 'string' || !word.length) {
    return word
  }
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1)
  return capitalized
}

export function savePostToStorage(newPost) {
  try {
    const tempPosts = JSON.parse(localStorage.getItem('tempPosts') || '[]')
    tempPosts.push(newPost)
    localStorage.setItem('tempPosts', JSON.stringify(tempPosts))
    return true
  } catch (error) {
    console.error('Failed to save post: ', error.message)
    return false
  }
}

export function getSavedPosts() {
  const now = new Date()
  const stored = JSON.parse(localStorage.getItem('tempPosts') || '[]')

  const validPosts = stored.filter((post) => {
    const created = new Date(post.date_created)
    const diffHours = (now - created) / (1000 * 60 * 60)
    return diffHours < 3 // or 3 if you want 3 hours
  })

  //Clear old posts
  const filtered = stored.filter((post) => {
    const created = new Date(post.date_created)
    return (now - created) / (1000 * 60 * 60) < 3
  })

  localStorage.setItem('tempPosts', JSON.stringify(filtered))

  return validPosts
}

export function saveLayout(layout) {
  localStorage.setItem('layout', layout)
}
