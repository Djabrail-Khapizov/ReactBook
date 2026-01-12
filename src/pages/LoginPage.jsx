import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Valeurs fixes
  const VALID_EMAIL = "d@d.d";
  const VALID_PASSWORD = "1234";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      login({ username: "testuser", email });
      navigate("/feed"); // ← route du feed
    } else {
      setError("E-mail ou mot de passe incorrect.");
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f5f8fa"
    }}>
      <form style={{
        backgroundColor: "#ffffff",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        width: "320px"
      }} onSubmit={handleSubmit}>

        <h2 style={{ textAlign: "center", color: "#1da1f2", marginBottom: "20px" }}>
          ReactBook
        </h2>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "25px",
            border: "1px solid #e1e8ed",
            marginBottom: "15px",
            width: "100%"
          }}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "25px",
            border: "1px solid #e1e8ed",
            marginBottom: "15px",
            width: "100%"
          }}
        />

        {error && (
          <span style={{ color: "red", marginBottom: "10px", textAlign: "center" }}>
            {error}
          </span>
        )}

        <button type="submit" style={{
          padding: "10px",
          borderRadius: "25px",
          border: "none",
          backgroundColor: "#1da1f2",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
          marginTop: "10px"
        }}>
          Se connecter
        </button>
      </form>
    </div>
  );
}
