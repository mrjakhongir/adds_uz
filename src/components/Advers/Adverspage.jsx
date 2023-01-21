import React from "react";
import Sneak from "../../assets/png/sneak.png";
import Pont from "../../assets/png/photo.png";

const Adverspage = () => {
  return (
    <div>
      <div className="main_photo">
        <img src={Sneak} alt="" />
        <img src={Pont} alt="" />
      </div>
    </div>
  );
};

export default Adverspage;
