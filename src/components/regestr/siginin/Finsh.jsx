import {useState} from "react";
import { SigininCon } from "./style";
import { Link,useNavigate} from "react-router-dom";
import tel from "../../../assets/icon/tel.svg"
import HomePage from "../../HomePage/HomePage";



const Finsh = () => {
  const[ful_name,setFulname] = useState("")
  const[password,setPassword] = useState("")
  const faceToken = localStorage.getItem("faceToken")
  const navigate = useNavigate()

  const handleFormSubmit = () => {
    if (ful_name && password) {
      fetch('http://azizbek.samandardev.uz/v1/user/register/finish', {
          method: 'POST',
          body: JSON.stringify({
            full_name: `${ful_name}`,
            password: `${password}`
          }),
          headers: {
              "authorization": `${faceToken}`,
              "Content-type": "application/json; charset=UTF-8"}
          
      })
      .then(response => response.json())
      .then(json =>{
         console.log(json);
          navigate("/")
      })
  }
}
  return (
    <>
      <SigininCon>
        <HomePage />
        <Link to="/">
          <div className="filter-blur"></div>
        </Link>
        <div className="register">
          <p className="register-title">Create your permanent password</p>
          <label className="input-name">
            <div className="input-name-icon">
              <img src={tel} alt="" />
            </div>
            <form  action="#" >
              <input
                type="text"
                onChange={(e) => setFulname(e.target.value)}
                placeholder="Full name"
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
                onChange={(e) => setPassword(e.target.value)}
                
                placeholder="  repeat your password"
              />
            </form>
          </label>
          <button  onClick={handleFormSubmit} className="reg-btn">Register  </button>
        </div>
    
      </SigininCon>
    </>
  );
};

export default Finsh;
