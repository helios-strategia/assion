import React, { Dispatch, FC, useEffect, useState } from "react";
import { AuthProviderProps } from ".";
import { HTTPMethod, useHttp } from "../../hooks/useHttp";
import { apiURL } from "../../api/apiURL";
import { message } from "antd";
import { useJWT } from "../../hooks/useJWT";

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
  loading: boolean;
};

const defProvider = {
  auth: defAuth,
  signIn: () => {},
  signOut: () => {},
  loading: false,
};

export const AuthContext = React.createContext<authProvider>(defProvider);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { baseUrl, sign, profile } = apiURL;

  const { jwtToken, setJWTToken, removeJWTToken } = useJWT();

  const [auth, setAuth] = useState<authType>(defAuth);

  const { request, loading, error } = useHttp();
  useEffect(() => {
    if (jwtToken) {
      whoAmI();
    } else {
      signOut();
    }
  }, []);

  useEffect(() => {
    if (auth.isAuth && jwtToken) {
      whoAmI();
    }
  }, [auth.isAuth]);

  async function signIn(authData: { email: string; password: string }) {
    const res = await request(`${baseUrl}${sign}`, HTTPMethod.POST, authData);
    if (res.token) {
      setJWTToken(res.token);
      setAuth((prev) => ({ ...prev, isAuth: true }));
    } else {
      message.error(res.message);
    }
  }
  function signOut() {
    setAuth((prev) => ({ ...prev, isAuth: false, info: {} }));
    removeJWTToken();
  }

  async function whoAmI() {
    const res = await request(`${baseUrl}${profile}`, HTTPMethod.GET);
    if (res) {
      setAuth((prev) => ({ ...prev, info: res, isAuth: true }));
    }
  }

  const value = {
    auth: defAuth,
    signIn,
    signOut,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
