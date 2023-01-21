import React from "react";
import Opener from "../Pages/Opener/Opener";
import { RoootC } from "./style";
import { Routes, Route } from "react-router-dom";
import BrandsList from "../components/Brands/BrandsList";
import Auth from "../Pages/auth/Auth";
import HomePage from "../components/HomePage/HomePage";

const Root = () => {
  const token = true;
  return (
    <RoootC>
      <Routes>
        <Route path="/" element={token ? <Opener /> : <Auth />}>
          <Route path="/brands" element={<BrandsList />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </RoootC>
  );
};

export default Root;
