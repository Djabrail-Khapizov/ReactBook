import { useState } from 'react'
import Header from './components/Header'
import Feed from './components/Feed'
import UserProfile from './components/UserProfile'

function App() {
  // On initialise la liste ici pour qu'elle soit accessible partout
  const [posts, setPosts] = useState([
    { id: 1, author: 'Djab1', content: 'Premier poste', initialLikes: 5 },
    { id: 2, author: 'Djab2', content: 'Bien joué', initialLikes: 2 }
  ])

  // Fonction pour ajouter un nouveau post
  const handleAddPost = () => {
    const newPost = {
      id: Date.now(), // ID unique basé sur le temps
      author: 'Nouvel Auteur',
      content: 'Ceci est un post ajouté dynamiquement !',
      initialLikes: 0
    }
    setPosts([newPost, ...posts]) // On ajoute le nouveau post au début du tableau
  }

  return (
    <>
      <Header onAddPost={handleAddPost} />
      <UserProfile />
      {/* On passe la liste des posts au Feed via les props */}
      <Feed posts={posts} />
    </>
  )
}

export default App