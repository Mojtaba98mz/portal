import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeTopCarousel = () => {
  let settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    atoplaySpeed: 2000,
    // pauseOnHover: true,
  };
  return (
    <div style={{ marginTop: 100, width: "100vw", height: 450 }}>
      <Slider {...settings}>
        <img src="http://193.151.146.199/img/2.0f3ba80f.jpg" height="400px" />
        <img src="http://193.151.146.199/img/3.6a19f663.jpg" height="400px" />
        <img src="http://193.151.146.199/img/2.0f3ba80f.jpg" height="400px" />
        <img src="http://193.151.146.199/img/1.f725f065.jpg" height="400px" />
      </Slider>
      
    </div>
  );
};

export default HomeTopCarousel;
