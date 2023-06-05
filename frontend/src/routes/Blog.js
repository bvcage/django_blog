import React from 'react'

function Blog () {
  React.useEffect(() => {
    fetch('/api/blogpost').then(console.log)
  }, [])
  
  return (
    <div>Blog</div>
  )
}

export default Blog