import React from "react";
import Slider from "react-slick";
import "./CountriesComponents.css";

const countries = [
  { name: "Italiya", image: "/images/ctr2.jpeg" },
  { name: "Turkiya", image: "/images/ctr3.jpeg" },
  { name: "Xitoy", image: "/images/ctr1.jpeg" },
  { name: "Turkiya", image: "/images/ctr3.jpeg" },
];

const CountriesComponents = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title" style={{ color: "#eee" }}>DAVLATLAR</h2>
      <Slider {...settings}>
        {countries.map((country, index) => (
          <div key={index} className="carousel-card-wrapper">
            <div className="carousel-card">
              <img src={country.image} alt={country.name} className="carousel-image" />
              <div className="carousel-label">{country.name}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CountriesComponents;