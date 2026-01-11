import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Header() {
  // Sécurisation si le Provider n'est pas présent
  const authContext = useContext(AuthContext) || {};
  const { user, logout } = authContext;

  const themeContext = useContext(ThemeContext) || {};
  const { theme, dispatch } = themeContext;

  return (
    <header
      style={{
        padding: "10px",
        background: theme === "light" ? "#eee" : "#222",
        color: theme === "light" ? "black" : "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        ReactBook
      </Link>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {user ? (
          <>
            <span>Connecté en tant que {user.username}</span>
            <button onClick={logout}>Déconnexion</button>
          </>
        ) : (
          <span>Invité</span>
        )}

        <button
          onClick={() => dispatch && dispatch({ type: "TOGGLE_THEME" })}
        >
          Thème
        </button>
      </div>
    </header>
  );
}
