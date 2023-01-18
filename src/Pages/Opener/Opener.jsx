import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Brands from "../../components/Brands/Brands";
import Category from "../../components/Category/Category";
import { OpenerC, Container } from "./style";
import Sneak from "../../assets/png/sneak.png";
import Pont from "../../assets/png/photo.png";
import Footer from "../../components/Foooter/Footer";
import BrandsList from "../../components/Brands/BrandsList";
import { Outlet } from "react-router-dom";

const Opener = () => {
  return (
    <OpenerC>
      <Container>
        <Navbar />
        <Header />
        <main>
          <div>
            <Sidebar />
            <Brands />
          </div>
          <div className="col col-2">
            <Category />
            <Outlet/>
          </div>
          <div className="main_photo">
            <img src={Sneak} alt="" />
            <img src={Pont} alt="" />
          </div>
        </main>
      </Container>

      <Footer />
    </OpenerC>
  );
};

export default Opener;
