import { useState, useEffect } from 'react'

function UserProfile() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 1. Création du contrôleur pour annuler la requête
    const controller = new AbortController()
    const signal = controller.signal

    fetch('https://jsonplaceholder.typicode.com/users/1', { signal })
      .then(response => response.json())
      .then(data => {
        setUser(data)
        setIsLoading(false)
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Requête annulée : le composant a été démonté')
        } else {
          console.error('Erreur lors de la récupération :', err)
        }
      })

    // 2. LA FONCTION DE NETTOYAGE (Question 21)
    return () => {
      controller.abort() // Annule l'appel API si le composant est démonté
    }
  }, []) // Tableau vide = s'exécute une seule fois au montage

  if (isLoading) return <p>Chargement...</p>
  if (!user) return <p>Aucun utilisateur trouvé.</p>

  return (
    <section>
      <h2>Profil utilisateur</h2>
      <p>Nom : {user.name}</p>
      <p>Email : {user.email}</p>
      <p>Entreprise : {user.company.name}</p>
    </section>
  )
}

export default UserProfile