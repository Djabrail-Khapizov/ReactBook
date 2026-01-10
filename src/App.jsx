import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import FeedPage from './pages/FeedPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
// Ajoute ces deux lignes en haut de App.jsx :
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          {/* Routes protégées (Question 9) */}
          <Route path="/" element={
            <ProtectedRoute> <FeedPage /> </ProtectedRoute>
          } />
          <Route path="/user/:username" element={
            <ProtectedRoute> <ProfilePage /> </ProtectedRoute>
          } />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;