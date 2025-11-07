import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../api/axios'; // Use the configured axios instance

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // The token itself is the user's identifier in this mock setup.
          // In a real JWT setup, you'd send the token in the header
          // and the backend would return the user.
          // Here, we find the user whose token matches.
          const response = await api.get(`/users?token=${token}`);
          if (response.data.length > 0) {
            setUser(response.data[0]);
          } else {
            // Token is invalid or user deleted
            localStorage.removeItem('token');
          }
        } catch (error) {
          console.error("Failed to verify user token:", error);
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };

    verifyUser();
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('token', userData.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};