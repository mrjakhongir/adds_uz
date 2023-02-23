import { useState, useContext } from "react";
import { Rigister } from "../../../contex/Contex";
import imgUpload from "../../../assets/icon/imgUpload.svg";
import axios from "axios";

const FinshUpload = ({setImgUpload}) => {
  const [token, setToken] = useContext(Rigister);
  const [file, setFile] = useState();
  const [per, setPer] = useState(null);

  const res = JSON.parse(token);
  

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
        // localStorage.setItem("profil_img", JSON.stringify(res.data));
        setImgUpload(res.data.photo_url)
       
      });
      setFile(null)
  }
  return (
    <label className="input-name">
      <div className="input-name-icon">
        <img src={imgUpload} alt="" />
      </div>

      <input
        style={{ display: "none" }}
        type="file"
        placeholder="jpg40000vknxdvakg"
        onChange={(e) => setFile(e.target.files[0])}
      />
    </label>
  );
};

export default FinshUpload;
