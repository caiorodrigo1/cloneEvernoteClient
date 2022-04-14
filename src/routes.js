import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesIndexScreen from "./screens/notes/index";
import UsersEditScreen from "./screens/users/edit";

import PrivateRouter from "./components/auth/private_router";

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route exact element={<PrivateRouter />}>
        <Route path="/notes" element={<NotesIndexScreen />} />
      </Route>
      <Route exact element={<PrivateRouter />}>
        <Route path="/users/edit" element={<UsersEditScreen />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Routing;
