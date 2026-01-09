import { useEffect } from 'react'
import PostCard from './PostCard'

// On récupère 'posts' depuis les props
function Feed({ posts }) {
  
  useEffect(() => {
    document.title = `ReactBook | ${posts.length} Posts`
  }, [posts.length]) // Se déclenche à chaque ajout de post

  return (
    <section>
      <h2>Fil d’actualité</h2>
      {posts.map(post => (
        <PostCard
          key={post.id} // Important pour les performances
          author={post.author}
          content={post.content}
          initialLikes={post.initialLikes}
        />
      ))}
    </section>
  )
}

export default Feed
