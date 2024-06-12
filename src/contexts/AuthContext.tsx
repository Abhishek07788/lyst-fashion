import React, { useState, createContext, ReactNode } from "react";

interface AuthContextType {
  isAuth: boolean;
  toggleAuth: () => void;
  logOutUser: () => void;
  loginUser: (email: string, token: string) => void;
  email: string;
  token: string | null;
}

const initialContext: AuthContextType = {
  isAuth: false,
  toggleAuth: () => {},
  logOutUser: () => {},
  loginUser: (email, token) => {},
  email: "",
  token: null,
};

export const AuthContext = createContext<AuthContextType>(initialContext);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContextProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [token, setToken] = useState<string | null>(null);

  const toggleAuth = () => setIsAuth(!isAuth);
  const loginUser = (email: string, token: string) => {
    setEmail(email);
    setToken(token);
    setIsAuth(true);
  };

  const logOutUser = () => {
    setEmail("");
    setToken(null);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, toggleAuth, logOutUser, loginUser, email, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
