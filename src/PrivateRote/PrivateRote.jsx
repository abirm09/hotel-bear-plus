import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Login from "../components/Login/Login";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRote = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" replace={true} state={{ from: location }}></Navigate>
  );
};

export default PrivateRote;
