import { useCallback } from "react";
import { useCookies } from "react-cookie";

export function useJWT() {
  const [jwtCookie, setJWTCookie, removeJWTCookie] = useCookies(["token"]);

  const setJWT = useCallback((token: string) => {
    setJWTCookie("token", token);
  }, []);

  const removeJWT = useCallback(() => {
    removeJWTCookie("token");
  }, []);

  return {
    jwtToken: jwtCookie.token,
    setJWTToken: setJWT,
    removeJWTToken: removeJWT,
  };
}
