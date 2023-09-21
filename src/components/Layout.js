import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Sticky from "./Sticky";

import "../assets/css/main.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Sticky />
    </>
  );
};

export default Layout;
