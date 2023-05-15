import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Home } from "../Pages/Home";
import { Stations } from "../Pages/Stations";
import { CurrentStation } from "../Pages/CurrentStation";
import { Account } from "../Pages/Account";
import { Users } from "../Pages/Users";
import { CreateStation } from "../Pages/CreateStation";

export const AuthorizedRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index path="/stations" element={<Stations />} />
      <Route index path="/stations/:id" element={<CurrentStation />} />
      <Route index path="/account" element={<Account />} />
      <Route index path="/users" element={<Users />} />
      <Route index path="/create-station" element={<CreateStation />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
