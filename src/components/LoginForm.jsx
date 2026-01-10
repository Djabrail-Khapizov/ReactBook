import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    // Question 8 & 11 : preventDefault() pour éviter le rechargement de la page
    event.preventDefault();
    console.log("Données soumises :", { email, password });

    // Question 9 : Message temporaire
    setMessage('Connexion réussie !');
    setTimeout(() => setMessage(''), 3000);
  };

  console.log("render <LoginForm>");

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
      <h3>Connexion</h3>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default LoginForm;