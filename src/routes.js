import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./modules/Home";
import Header from "./common/components/header";
import Courses from "./modules/courses";
import About from "./modules/about";
import Footer from "./common/components/footer";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
