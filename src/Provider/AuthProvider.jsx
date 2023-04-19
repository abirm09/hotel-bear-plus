import React, { createContext } from "react";

export const AuthContext = createContext("");
const AuthProvider = ({ children }) => {
  //all contexts
  const authInfo = { name: "Abir" };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
