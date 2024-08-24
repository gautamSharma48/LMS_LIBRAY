import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import HomePage from "./modules/Home";
import Header from "./common/components/header";
import Courses from "./modules/courses";
import About from "./modules/about";
import Footer from "./common/components/footer";
import LoginPage from "./modules/login";
import SignUpScreen from "./modules/signUp";

const Router = () => {
  const location = useLocation();
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/sign-up";
  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
};

export default Router;
