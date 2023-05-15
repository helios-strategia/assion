import { AuthContext } from "./../Hoc/AuthProvider";
import { useContext } from "react";

export const useAuth = () => {
  return useContext(AuthContext);
};
