
import React from "react";
import Opener from "../Pages/Opener/Opener";
import { RoootC } from "./style";
import { Routes, Route } from "react-router-dom";
import BrandsList from "../components/Brands/BrandsList";
import Auth from "../Pages/auth/Auth";
import HomePage from "../components/HomePage/HomePage";
import SaleList from '../components/Sale/SaleList'
import Siginin from "../components/regestr/siginin/Siginin";
import Setting from "../components/Setting/Setting";
import ActiveCode from "../components/regestr/siginin/ActiveCode";
import Finsh from "../components/regestr/siginin/Finsh";




const Root = () => {
  const token = false;
  return (
    <RoootC>
      <Routes>

        <Route path="/" element={token ? <Opener /> : <Auth />}>
             <Route path="/brands" element={<BrandsList />} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/sale" element={<SaleList/>} />
            <Route path="/siginin" element={<Siginin />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/activcode" element={<ActiveCode />} />
            <Route path="/finsh" element={<Finsh />} />
       
            
         

            <Route path='/*' element={<h2>This page come soon!</h2>} />
        </Route>
   
      </Routes>
    </RoootC>
  );
};

export default Root;
