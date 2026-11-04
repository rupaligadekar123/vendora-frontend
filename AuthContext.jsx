import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🪙 Browser storage se save user token auto-check karega
    const storedUser = localStorage.getItem('vendoraUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // 🔑 User Login state handle method
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('vendoraUser', JSON.stringify(userData));
  };

  // 🚪 User Logout state clear method
  const logout = () => {
    setUser(null);
    localStorage.removeItem('vendoraUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
