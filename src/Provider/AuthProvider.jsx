import React, { createContext, useState } from "react";

export const AuthContext = createContext("");
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //all contexts
  const authInfo = { name: "Abir", user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
