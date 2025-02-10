import React, { createContext, useState, useContext } from 'react';
import storageService from '../services/storageService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(storageService.getUser());

  const login = (userData) => {
    setUser(userData);
    storageService.setUser(userData);
  };

  const logout = () => {
    setUser(null);
    storageService.clearUser();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);