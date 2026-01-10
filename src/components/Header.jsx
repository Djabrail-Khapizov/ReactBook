import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

function Header({ onAddPost }) {
  // On consomme les deux contextes
  const { user, login, logout } = useContext(AuthContext);
  const { theme, dispatch } = useContext(ThemeContext);

  // Style dynamique en fonction du thème
  const headerStyle = {
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#2c3e50',
    color: theme === 'light' ? '#333' : '#ecf0f1',
    transition: 'all 0.3s ease'
  };

  return (
    <header style={headerStyle}>
      <div>
        <h1>ReactBook</h1>
        {/* Question 4 : Affichage dynamique de l'utilisateur */}
        <p>
          👤 {user ? `Connecté en tant que ${user.name}` : "Invité"}
        </p>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        {/* Bouton pour changer le thème (Question 7 & 8) */}
        <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
          {theme === 'light' ? '🌙 Mode Sombre' : '☀️ Mode Clair'}
        </button>

        {/* Boutons de connexion / déconnexion (Question 2) */}
        {!user ? (
          <button onClick={() => login({ name: 'Djab' })}>Se connecter</button>
        ) : (
          <button onClick={logout} style={{ backgroundColor: '#e74c3c', color: 'white' }}>
            Déconnexion
          </button>
        )}

        <button onClick={onAddPost} style={{ backgroundColor: '#27ae60', color: 'white' }}>
          + Nouveau Post
        </button>
      </div>
    </header>
  );
}

export default Header;