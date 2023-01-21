import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Brands from "../../components/Brands/Brands";
import { OpenerC, Container } from "./style";
import { Outlet } from "react-router-dom";
import AuthSidebar from "../../components/AuthSidebar/AuthSidebar";
import HomePage from "../../components/HomePage/HomePage";

const Auth = () => {
  return (
    <div>
      <OpenerC>
        <Container>
          <Navbar />
          <Header />

          <main>
            <div className="left__col">
              <AuthSidebar />
              <Brands />
            </div>

            <div className="col col-2">
            {/* <HomePage /> */}
              <Outlet/>
            </div>    
          </main>

        </Container>
      </OpenerC>
    </div>
  )
}

export default Auth