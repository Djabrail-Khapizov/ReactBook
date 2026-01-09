import { useState } from 'react'

function PostCard({ author, content, initialLikes }) {
  // On crée un état local "likes" initialisé par la prop
  const [likes, setLikes] = useState(initialLikes)

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <p><strong>{author}</strong></p>
      <p>{content}</p>
      <p>❤️ {likes}</p>

      {/* Utilisation de la forme fonctionnelle pour les clics rapides */}
      <button onClick={() => setLikes(prev => prev + 1)}>
        J’aime ❤️
      </button>

      {/* Réinitialisation à la valeur initiale reçue en prop */}
      <button onClick={() => setLikes(initialLikes)}>
        Réinitialiser
      </button>
    </div>
  )
}

export default PostCard