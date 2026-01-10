import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirige vers login si non connecté
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default ProtectedRoute;