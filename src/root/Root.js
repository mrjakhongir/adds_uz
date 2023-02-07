
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
import Error from "../components/Error/Error";
import { useContext } from "react";
import { Rigister } from "../contex/Contex";
import LoginIn from "../components/regestr/login/LoginIn";
import ForgotPass from "../components/regestr/login/ForgotPass";
import NewPass from "../components/regestr/login/NewPass";
import News from "../components/News/News";
import New from "../components/News/New";



const Root = () => {
  const [token,setToken] = useContext(Rigister)


  return (
    <RoootC>
      <Routes>
        <Route path="/*" element={<Error />} />
        
        <Route path="/" element={token ? <Opener /> : <Auth />}>

            <Route path="/brands" element={<BrandsList />} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/sale" element={<SaleList/>} />
            <Route path="/register/siginin" element={<Siginin />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/register/activcode" element={<ActiveCode />} />
            <Route path="/register/finsh" element={<Finsh />} />
            <Route path="/register/login" element={<LoginIn />} />
            <Route path="/register/forgotpass" element={<ForgotPass />} />
            <Route path="/register/login/newpass" element={<NewPass />} />
            <Route path="/news" element={<News />} />
            <Route path="/new" element={<New />} />

        </Route>
   
      </Routes>
    </RoootC>
  );
};

export default Root;
