import React, { Dispatch, FC, useEffect, useState } from "react";
import { AuthProviderProps } from ".";
import { HTTPMethod, useHttp } from "../../hooks/useHttp";

export type authType = {
  isAuth: boolean;
  info: any;
  role: Record<string, boolean>;
};

export const defAuth: authType = {
  isAuth: false,
  info: null,
  role: {},
};

export type authProvider = {
  auth: authType;
  signIn: (authData: { email: string; password: string }) => void;
  signOut: () => void;
};

const defProvider = {
  auth: defAuth,
  signIn: () => {},
  signOut: () => {},
};

export const AuthContext = React.createContext<authProvider>(defProvider);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<authType>(defAuth);

  const [request, loading, error] = useHttp();

  async function signIn(authData: { email: string; password: string }) {
    const res = await request(
      "http://localhost:3034/api/v1/auth/login",
      HTTPMethod.POST,
      authData
    );
    console.log(res);
    //setAuth((prev) => ({ ...prev, isAuth: true }));
  }
  function signOut() {
    setAuth((prev) => ({ ...prev, isAuth: false }));
  }

  const value = {
    auth,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
