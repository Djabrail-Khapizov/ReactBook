import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Page de login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Feed protégé */}
        <Route
          path="/feed"
          element={
            <ProtectedRoute>
              <FeedPage />
            </ProtectedRoute>
          }
        />

        {/* Profil protégé */}
        <Route
          path="/user/:username"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* Redirection par défaut vers login si aucune route */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </>
  );
}
