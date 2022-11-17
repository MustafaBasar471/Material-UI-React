import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Dashboard, BlogCardDetails } from "../pages";

const AppRouter = () => {
  const userInfo = true;
  return (
    <BrowserRouter>
      <Routes>
        {/* Main */}
        <Route path="/" element={userInfo ? <Dashboard /> : <Login />} />
        <Route
          path="/post/details"
          element={userInfo ? <BlogCardDetails /> : <Login />}
        />
        {/* Auth */}
        <Route
          path="/auth/login"
          element={userInfo ? <Dashboard /> : <Login />}
        />
        <Route
          path="/auth/register"
          element={userInfo ? <Dashboard /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
