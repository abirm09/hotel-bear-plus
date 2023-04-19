import React from "react";
import Header from "../pages/Home/Shared/Header/Header";
import Footer from "../pages/Home/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "calc(100vh - 64px)" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
