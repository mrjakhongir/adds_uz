import React from "react";
import { HomeListC, HomeCon } from "./style";
import logo from "../../assets/png/brands/2.png";
import laptop from "../../assets/png/coder.png";
import Card from "./Card";
import Adverspage from "../Advers/Adverspage";

const HomePage = () => {
  const homePageData = [
    {
      id: 1,
      companyLogo: logo,
      companyName: "Texnomart",
      image: laptop,
      product: "Neo QLED 4K Smart TV QN90A",
      oldPrice: "1200$",
      price: "1000$",
      view: "335k",
    },
    {
      id: 2,
      companyLogo: logo,
      companyName: "Apple",
      image: laptop,
      product: "Neo QLED 4K Smart TV QN90A",
      oldPrice: "1200$",
      price: "1000$",
      view: "335k",
    },
    {
      id: 3,
      companyLogo: logo,
      companyName: "Tesla",
      image: laptop,
      product: "Neo QLED 4K Smart TV QN90A",
      oldPrice: "1200$",
      price: "1000$",
      view: "335k",
    },
  ];

  return (
    <HomeCon>
      <HomeListC>
        {homePageData.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </HomeListC>
      <Adverspage />
    </HomeCon>
  );
};
export default HomePage;
