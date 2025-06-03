import React from "react";
import Home from "../components/Home";
import Service from "../components/Service";
import About from "../components/About";
import Product from "../components/Product";
import { Route, Routes } from "react-router-dom";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Mainroutes;
