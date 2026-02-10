import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of our user data
interface User {
  id: number;
  name: string;
  email: string;
}

// Define the context type
interface UserContextType {
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
}

// Create the context (like Angular's service)
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component (wraps your app to provide the context)
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (name: string, email: string) => {
    setUser({
      id: Date.now(),
      name,
      email
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the context (makes it easier to consume)
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};
