import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/// Protected routes for the auth of user
export const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <h3>Loading...</h3>;
  if (!user) return <Navigate to="/login" />;

  return <div>{children}</div>;
};
