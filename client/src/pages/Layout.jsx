import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";
import '../navbar.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;