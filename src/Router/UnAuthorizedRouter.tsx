import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Auth } from "../Pages/Auth";

export const UnAuthorizedRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route index path="/auth" element={<Auth />} />
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
};
