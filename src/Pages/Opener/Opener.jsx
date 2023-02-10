import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Brands from "../../components/Brands/Brands";
import Category from "../../components/Category/Category";
import { OpenerC, Container } from "./style";
import { Outlet } from "react-router-dom";
import Error from '../../components/Error/Error';

const Opener = () => {
  return (
    <div>
      <OpenerC>
        <Container>
          {/* <Navbar /> */}
          <Header />

          <main>
            <div className="left__col">
              <Sidebar />
              <Brands />
            </div>

            <div className="col col-2">
              <Outlet />
            </div>   

          </main>
        </Container>
      </OpenerC>
    </div>
  )
};

export default Opener;
