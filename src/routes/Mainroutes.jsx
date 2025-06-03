import React from "react";
import Home from "../components/Home";
import Service from "../components/Service";
import About from "../components/About";
import Product from "../components/Product";
import { Route, Routes } from "react-router-dom";
import Productdetails from "../components/Productdetails";
import ServiceDetails from "../components/Servicedetails";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/detail/:name" element={<Productdetails />} />
      <Route path="/service" element={<Service />}>
        <Route path="/service/detail" element={<ServiceDetails />} />
      </Route>
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Mainroutes;
