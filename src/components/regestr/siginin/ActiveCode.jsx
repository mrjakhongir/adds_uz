
import {useState} from "react";
import { SigininCon } from "./style";
import { Link,useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg"
import HomePage from "../../HomePage/HomePage";


const ActiveCode = ()=> {

  const telnumber = localStorage.getItem("telnumber")

const navigate = useNavigate();

const[codeValue,setCodeValue] = useState("")



  const handleFormSubmit = () => {

    if (codeValue) {
        fetch(`http://azizbek.samandardev.uz/v1/user/verify/${telnumber}/${codeValue}`)
        .then(response => response.json())
        .then(json =>{
          localStorage.setItem("faceToken",json.access_token)
            console.log(json.access_token)
            navigate("/finsh")
         
        })
        .catch(err => console.log(err))
            
    }
  };

  return (
    <>
      <SigininCon>

        <HomePage />
        <Link to="/">
          <div className="filter-blur"></div>
        </Link>
        <div className="register">
          <p className="register-title">Log in/registering</p>
          <label className="input-name">
            <div className="input-name-icon">
              <img src={tel} alt="" />
            </div>
            <form  action="#" >
              <input
                type="text"
                placeholder="+998 (90) ___ __ __"
                value={telnumber}
              />
            </form>
          </label>
          <label className="input-name">
            <div className="input-name-icon">
              <img src={tel} alt="" />
            </div>
            <form  action="#" >
              <input
                type="text"
                placeholder="code"
                onChange={(e) => setCodeValue(e.target.value)}
              />
            </form>
          </label>
          <button onClick={handleFormSubmit} className="reg-btn">Confirm</button>
        </div>
      </SigininCon>
    </>
  );
};

export default ActiveCode;
