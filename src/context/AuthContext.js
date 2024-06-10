"use client";

import React, { createContext, useState, useContext } from 'react';


const AuthContext = createContext();


export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const login = () => {
   
    setIsLoggedIn(true);
  };

 
  const logout = () => {
   
    setIsLoggedIn(false);
  };

 
  const values = {
    isLoggedIn,
    login,
    logout,
  };

 
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
