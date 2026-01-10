import { useState } from 'react'
import Header from './components/Header'
import Feed from './components/Feed'
import UserProfile from './components/UserProfile'
// Import des nouveaux composants de la Partie 3
import InputLogger from './components/InputLogger'
import LoginForm from './components/LoginForm'
import MessageBoard from './components/MessageBoard'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, author: 'Djab1', content: 'Premier poste', initialLikes: 5 },
    { id: 2, author: 'Djab2', content: 'Bien joué', initialLikes: 2 }
  ])

  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      author: 'Utilisateur',
      content: 'Nouveau message !',
      initialLikes: 0
    }
    setPosts([newPost, ...posts])
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Header onAddPost={handleAddPost} />
      
      {/* --- Partie 3 : Exercices --- */}
      <section style={{ border: '2px dashed orange', margin: '20px 0', padding: '10px' }}>
        <h2>Partie 3 : Événements et Formulaires</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <InputLogger />
            <LoginForm />
        </div>
        <MessageBoard />
      </section>
      {/* --------------------------- */}

      <UserProfile />
      <Feed posts={posts} />
    </div>
  )
}

export default App