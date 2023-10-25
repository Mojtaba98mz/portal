import React from "react";
import Header from "../../components/Header/Header";
import HomeTopCarousel from "../../components/carousel/HomeTopCarousel";
import CardInfo from "../../components/card/Card";
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div>
      <Header></Header>
      <HomeTopCarousel></HomeTopCarousel>
      <div>
      <CardInfo></CardInfo>
      <CardInfo></CardInfo>
      <CardInfo></CardInfo>
      <CardInfo></CardInfo>
      </div>

    </div>
  );
};

export default Home;
