import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
