import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Login from "../components/Login/Login";

const PrivateRote = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Login></Login>;
};

export default PrivateRote;
