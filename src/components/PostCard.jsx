import { useState } from 'react'
// Importation de Link pour la navigation sans rechargement
import { Link } from 'react-router-dom'

function PostCard({ author, content, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes)

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '8px' }}>
      {/* Question 4 : L'auteur est maintenant un lien vers /user/[nom] */}
      <p>
        <strong>
          <Link to={`/user/${author}`} style={{ textDecoration: 'none', color: '#3498db' }}>
            {author}
          </Link>
        </strong>
      </p>
      
      <p>{content}</p>
      <p>❤️ {likes}</p>

      <button onClick={() => setLikes(prev => prev + 1)}>
        J’aime ❤️
      </button>

      <button onClick={() => setLikes(initialLikes)} style={{ marginLeft: '10px' }}>
        Réinitialiser
      </button>
    </div>
  )
}

export default PostCard