import { useState } from 'react'
import Header from './components/Header'
import Feed from './components/Feed'
import UserProfile from './components/UserProfile'
import InputLogger from './components/InputLogger'
import LoginForm from './components/LoginForm'
import MessageBoard from './components/MessageBoard'

// Imports des Contextes
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'

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
    <AuthProvider>
      <ThemeProvider>
        {/* On enveloppe tout le contenu pour que le Context soit accessible partout */}
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

          <UserProfile />
          
          {/* Note : Dans la suite du TP, le Feed utilisera peut-être 
              son propre useReducer interne comme on a vu précédemment */}
          <Feed posts={posts} />
          
        </div>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App