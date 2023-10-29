import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import HomeTopCarousel from "../../components/carousel/HomeTopCarousel";
import CardInfo from "../../components/card/Card";
import styles from "./Home.module.css"
import Footer from "../../components/footer/Footer";
import Instructions from "../../components/instructions/Instructions";

const Home = () => {
  

  return (
    <div>
      <Header></Header>
      <HomeTopCarousel></HomeTopCarousel>
      <div className={styles.instuctionContainer}>
        <Instructions color="green" title="شایسته گزینی سرمایه های انسانی آجا "></Instructions>
        <Instructions color="blue" title="شایسته سنجی سرمایه های انسانی آجا" ></Instructions>
        <Instructions color="red" title="شایسته گماری سرمایه های انسانی آجا" ></Instructions>
        <Instructions color="skyblue" title="شایسته پروی سرمایه های انسانی آجا" ></Instructions>
      </div>
      <div className={styles.cardContainer} >
        <CardInfo></CardInfo>
        <CardInfo></CardInfo>
        <CardInfo></CardInfo>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
