import { useState, useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../../../assets/jpg/logo.jpg";
import instagram from "../../../assets/icon/instagram.svg";
import facebook from "../../../assets/icon/facebook.svg";
import telegram from "../../../assets/icon/telegram.svg";
import twitter from "../../../assets/icon/twitter.svg";
import linkedin from "../../../assets/icon/linkedin.svg";
import whatsapp from "../../../assets/icon/whatsapp.svg";
import companyname from "../../../assets/icon/companyname.svg";
import call from "../../../assets/icon/tel.svg";
import mail from "../../../assets/icon/mail.svg";
import password from "../../../assets/icon/password.svg";
import { Container, HeaderC } from "./finshreg";
import FinshUpload from "./FinshUpload";
import { request } from "../../../request/Axios";

const FinshBiznesReg = () => {
  const fakeMailToken = localStorage.getItem("faceMailToken")
  const navigate = useNavigate()
  const [imgUpload, setImgUpload] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [ins, setInstagram] = useState("");
  const [fac, setFacebook] = useState("");
  const [teleg, setTelegram] = useState("");
  const [twit, setTwiter] = useState("");
  const [web, setWeb] = useState("");
  const [whats, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  let insValue = ins ? ins : "";
  let facValue = fac ? fac : "";
  let telegValue = teleg ? teleg : "";
  let twitValue = twit ? twit : "";
  let WebValue = web ? web : "";
  let whatsValue = whats ? whats : "";

  let body = {
    bio: bio,
    company_name: company,
    logo: imgUpload,
    password: pass,
    phone_numbers: [
      {
        phone_number: phone,
      },
    ],
    social_medias: {
      facebook: facValue,
      instagram: insValue,
      telegram: telegValue,
      twitter:twitValue,
      web: WebValue,
      whatsapp: whatsValue,
    },
  };

  const handlwFormSubmit = (event) => {
    event.preventDefault();

    if (company && phone && email && pass) {
      request({
        url: "business/register/finish",
        method: "put",
        data:body,
        headers: {
          Authorization: fakeMailToken,
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res.data);
        navigate("/biznes")
      });
    }

    // console.log(body);

    // console.log(
    //   imgUpload,
    //   company,
    //   phone,
    //   phone2,
    //   email,
    //   pass,
    //   insValue,
    //   facValue,
    //   telegValue,
    //   twitValue,
    //   WebValue,
    //   whatsValue,
    //   bio
    // );
  };

  return (
    <div>
      <Container>
        <HeaderC>
          <Link className="href">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Adds</p>
            </div>
          </Link>
        </HeaderC>
        <form onSubmit={handlwFormSubmit} action="#">
          <div className="finshBiznes_con">
            <h3>Create business profile</h3>
            <div className=" biznes_profile_post">
              <div className="input-page">
                <label className="input-name">
                  <div className="input-name-icon">
                    <img src={companyname} alt="" />
                  </div>
                  <input
                    type="text"
                    placeholder="Write your company or shop name"
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </label>
                <FinshUpload setImgUpload={setImgUpload} />
                <label className="input-name">
                  <div className="input-name-icon">
                    <img src={call} alt="" />
                  </div>

                  <input
                    type="text"
                    placeholder="Write  phone number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                <label className="input-name">
                  <div className="input-name-icon">
                    <img src={call} alt="" />
                  </div>

                  <input
                    type="text"
                    placeholder="Additional phone number"
                    onChange={(e) => setPhone2(e.target.value)}
                  />
                </label>
                <label className="input-name">
                  <div className="input-name-icon">
                    <img src={mail} alt="" />
                  </div>

                  <input
                    type="text"
                    placeholder="adds@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>

                <label className="input-name">
                  <div className="input-name-icon">
                    <img src={password} alt="" />
                  </div>

                  <input
                    type="text"
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                </label>

                <br />
              </div>
            </div>
            <br />
            <h3>Write your social links</h3>
            <div className="social-con">
              <div className=" biznes_profile_post">
                <div className="input-page">
                  <label className="input-nam social-label ">
                    <div className="input-name-icon social-icon">
                      <img src={instagram} alt="" />
                    </div>
                    <input
                      type="text"
                      placeholder="Instagram link optional"
                      onChange={(e) => setInstagram(e.target.value)}
                    />
                  </label>

                  <label className="input-nam social-label ">
                    <div className="input-name-icon social-icon">
                      <img src={facebook} alt="" />
                    </div>
                    <input
                      type="text"
                      placeholder="Facebook link optional"
                      onChange={(e) => setFacebook(e.target.value)}
                    />
                  </label>
                  <label className="input-nam social-label ">
                    <div className="input-name-icon social-icon">
                      <img src={telegram} alt="" />
                    </div>
                    <input
                      type="text"
                      placeholder="Telegram link optional"
                      onChange={(e) => setTelegram(e.target.value)}
                    />
                  </label>
                  <label className="input-nam social-label ">
                    <div className="input-name-icon social-icon">
                      <img src={twitter} alt="" />
                    </div>
                    <input
                      type="text"
                      placeholder="Twitter link optional"
                      onChange={(e) => setTwiter(e.target.value)}
                    />
                  </label>
                  <label className="input-nam social-label ">
                    <div className="input-name-icon social-icon">
                      <img src={linkedin} alt="" />
                    </div>
                    <input
                      type="text"
                      placeholder="LinkedIn link optional"
                      onChange={(e) => setWeb(e.target.value)}
                    />
                  </label>
                  <label className="input-nam social-label ">
                    <div className="input-name-icon social-icon">
                      <img src={whatsapp} alt="" />
                    </div>
                    <input
                      type="text"
                      placeholder="Whatsapp link optional"
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </label>

                  <br />
                </div>
              </div>
            </div>
            <br />
            <h3>About Company or Shop</h3>
            <br />

            <div className="about-con">
              <textarea
                placeholder="Write about your company or shop"
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button type="submit">yuborish</button>
        </form>
      </Container>
    </div>
  );
};

export default FinshBiznesReg;
