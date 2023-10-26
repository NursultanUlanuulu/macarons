import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";
import Modal from "./modal/Modal";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <Outlet />
      </div>
      <Modal/>
      <Footer />
    </div>
  );
};

export default Layout;
