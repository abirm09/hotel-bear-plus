import React, { useEffect } from "react";
import Header from "../pages/Home/Shared/Header/Header";
import Footer from "../pages/Home/Shared/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  // const location = useLocation();
  // useEffect(() => {
  //   console.log(location);
  // }, [location]);
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
