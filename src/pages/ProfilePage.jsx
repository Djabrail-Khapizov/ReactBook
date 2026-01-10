import { useParams } from 'react-router-dom';

function ProfilePage() {
  // Le nom "username" doit être le même que celui défini dans ta Route (:username)
  const { username } = useParams(); 

  return (
    <main>
      <h2>Profil de l'utilisateur</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Bienvenue sur la page de : {username}
      </p>
    </main>
  );
}

export default ProfilePage;