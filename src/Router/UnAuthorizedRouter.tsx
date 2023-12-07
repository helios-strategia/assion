import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { Auth } from "../Pages/Auth";

export const UnAuthorizedRouter = (): JSX.Element => {
  const { pathname, search } = useLocation();
  const Url = encodeURIComponent(pathname + search);

  return (
    <Routes>
      <Route index path="/auth" element={<Auth />} />
      <Route
        path="*"
        element={
          <Navigate to={`/auth${Url ? `/?redirect_url=${Url}` : ""}`} replace />
        }
      />
    </Routes>
  );
};
