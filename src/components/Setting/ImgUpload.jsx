import { Link, useNavigate } from "react-router-dom";
import { Rigister } from "../../contex/Contex";
import { useContext, useEffect } from "react";
import axios from "axios";
import "./main.css";
import img from "../../assets/png/user3.png";
import copy from "copy-to-clipboard";

import { useState } from "react";

const ImgUpload = ({setImgUpload}) => {
  const [token, setToken] = useContext(Rigister);
  const [file, setFile] = useState();
  const [per, setPer] = useState(null);

  const res = JSON.parse(token);

  const copyToClipboard = () => {
    copy(res.user_name);
    alert(`You have copied "${res.user_name}"`);
  };

  let formData = new FormData();
  formData.set("file", file);
 
    if(file) {
      axios
        .post("http://azizbek.samandardev.uz/v1/media", formData, {
          headers: {
            Authorization: `${res.access_token}`,
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            console.log(`upload process: ${percentCompleted}%`);
            setPer(percentCompleted);
          },
        })
    
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("profil_img", JSON.stringify(res.data));
          setImgUpload(res.data.photo_url)
         
        });
        setFile(null)
    }


  return (
    <div className="seting-profil-con">
      <div className="setting-profil">
        <div className="img-page">
          <img src={res.profile_photo ? res.profile_photo : img} alt="" />
          <form  enctype="multipart/form-data" action="/upload" method="post">
          <label htmlFor="file" className="labelFile">
          <div className="chose-file">
          
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33366 3.82661C6.24525 3.82661 6.16047 3.86173 6.09796 3.92424C6.03544 3.98676 6.00033 4.07154 6.00033 4.15995V4.95661L5.50033 4.46328C5.32465 4.2946 5.09054 4.20041 4.84699 4.20041C4.60345 4.20041 4.36934 4.2946 4.19366 4.46328L3.96033 4.69661L3.13033 3.86661C2.9567 3.694 2.72182 3.59711 2.47699 3.59711C2.23216 3.59711 1.99728 3.694 1.82366 3.86661L1.33366 4.36328V2.49328C1.33366 2.40487 1.36878 2.32009 1.43129 2.25758C1.4938 2.19506 1.57859 2.15995 1.66699 2.15995H3.66699C3.7554 2.15995 3.84018 2.12483 3.90269 2.06231C3.96521 1.9998 4.00033 1.91502 4.00033 1.82661C4.00033 1.73821 3.96521 1.65342 3.90269 1.59091C3.84018 1.5284 3.7554 1.49328 3.66699 1.49328H1.66699C1.40178 1.49328 1.14742 1.59864 0.959885 1.78617C0.772349 1.97371 0.666992 2.22806 0.666992 2.49328V6.49328C0.666992 6.7585 0.772349 7.01285 0.959885 7.20039C1.14742 7.38792 1.40178 7.49328 1.66699 7.49328H5.66699C5.93221 7.49328 6.18656 7.38792 6.3741 7.20039C6.56164 7.01285 6.66699 6.7585 6.66699 6.49328V4.15995C6.66699 4.07154 6.63187 3.98676 6.56936 3.92424C6.50685 3.86173 6.42206 3.82661 6.33366 3.82661ZM1.66699 6.82661C1.57859 6.82661 1.4938 6.79149 1.43129 6.72898C1.36878 6.66647 1.33366 6.58168 1.33366 6.49328V5.30661L2.29366 4.33328C2.3179 4.30828 2.34691 4.2884 2.37897 4.27483C2.41104 4.26126 2.44551 4.25426 2.48033 4.25426C2.51515 4.25426 2.54961 4.26126 2.58168 4.27483C2.61374 4.2884 2.64275 4.30828 2.66699 4.33328L3.72366 5.38995L5.14366 6.80995L1.66699 6.82661ZM6.00033 6.49328C5.99917 6.55748 5.97949 6.61999 5.94366 6.67328L4.43033 5.16661L4.66366 4.93661C4.71238 4.88817 4.77829 4.86097 4.84699 4.86097C4.9157 4.86097 4.98161 4.88817 5.03033 4.93661L6.00033 5.89995V6.49328ZM7.24033 1.40995L6.43366 0.603279C6.3712 0.541195 6.28672 0.506348 6.19866 0.506348C6.1106 0.506348 6.02611 0.541195 5.96366 0.603279L4.43699 2.12995C4.40489 2.16054 4.37922 2.19723 4.36148 2.23787C4.34373 2.2785 4.33428 2.32227 4.33366 2.36661V3.17328C4.33366 3.26168 4.36878 3.34647 4.43129 3.40898C4.4938 3.47149 4.57859 3.50661 4.66699 3.50661H5.47366C5.56111 3.50624 5.64491 3.47153 5.70699 3.40995L7.23366 1.88328C7.26534 1.85273 7.29066 1.81622 7.30816 1.77583C7.32566 1.73545 7.33499 1.69201 7.33561 1.648C7.33623 1.604 7.32812 1.5603 7.31177 1.51944C7.29542 1.47859 7.27114 1.44137 7.24033 1.40995ZM5.33366 2.83995H5.00033V2.50661L6.20033 1.30995L6.53366 1.64328L5.33366 2.83995Z"
                  fill="black"
                />
              </svg>
          

            <input
              id="file"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          </label>
          </form>
        </div>

        <div onClick={copyToClipboard} className="profil-text">
          <p>{res.full_name}</p>
          <span>
            @{res.user_name}&nbsp;
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 3.47C9.49479 3.42407 9.48474 3.37882 9.47 3.335V3.29C9.44596 3.23859 9.41389 3.19133 9.375 3.15L6.375 0.15C6.33367 0.111108 6.28641 0.0790405 6.235 0.0549999C6.22008 0.05288 6.20493 0.05288 6.19 0.0549999C6.13921 0.0258706 6.08311 0.0071721 6.025 0H4C3.60218 0 3.22064 0.158035 2.93934 0.43934C2.65804 0.720644 2.5 1.10218 2.5 1.5V2H2C1.60218 2 1.22064 2.15804 0.93934 2.43934C0.658035 2.72064 0.5 3.10218 0.5 3.5V8.5C0.5 8.89782 0.658035 9.27936 0.93934 9.56066C1.22064 9.84196 1.60218 10 2 10H6C6.39782 10 6.77936 9.84196 7.06066 9.56066C7.34196 9.27936 7.5 8.89782 7.5 8.5V8H8C8.39782 8 8.77936 7.84196 9.06066 7.56066C9.34196 7.27936 9.5 6.89782 9.5 6.5V3.5C9.5 3.5 9.5 3.5 9.5 3.47ZM6.5 1.705L7.795 3H7C6.86739 3 6.74021 2.94732 6.64645 2.85355C6.55268 2.75979 6.5 2.63261 6.5 2.5V1.705ZM6.5 8.5C6.5 8.63261 6.44732 8.75979 6.35355 8.85355C6.25979 8.94732 6.13261 9 6 9H2C1.86739 9 1.74021 8.94732 1.64645 8.85355C1.55268 8.75979 1.5 8.63261 1.5 8.5V3.5C1.5 3.36739 1.55268 3.24021 1.64645 3.14645C1.74021 3.05268 1.86739 3 2 3H2.5V6.5C2.5 6.89782 2.65804 7.27936 2.93934 7.56066C3.22064 7.84196 3.60218 8 4 8H6.5V8.5ZM8.5 6.5C8.5 6.63261 8.44732 6.75979 8.35355 6.85355C8.25979 6.94732 8.13261 7 8 7H4C3.86739 7 3.74021 6.94732 3.64645 6.85355C3.55268 6.75979 3.5 6.63261 3.5 6.5V1.5C3.5 1.36739 3.55268 1.24021 3.64645 1.14645C3.74021 1.05268 3.86739 1 4 1H5.5V2.5C5.5 2.89782 5.65804 3.27936 5.93934 3.56066C6.22064 3.84196 6.60218 4 7 4H8.5V6.5Z"
                fill="#8B8B8B"
              />
            </svg>
          </span>
        </div>
      </div>
 
      <div className="edit-page">
        <Link>
          <i className="fa-solid fa-pen-to-square"></i> &nbsp; Edit profile{" "}
        </Link>
      </div>

      <div className={per > 0 && per < 100 ? "proces2" : "proces"}>
        {/* <div className="proces2"> */}

        <div className="proc" style={{ width: `${per}%` }}></div>
      </div>
    </div>
  );
};

export default ImgUpload;
