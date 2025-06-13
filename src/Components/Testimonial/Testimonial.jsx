import React from "react";
import Slider from "react-slick";
import "./Testimonial.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    name: "Ozozbek Allaberdiev",
    text: 'FASH EDU menga orzu qilgan universitetga kirishda katta ko‘mak berdi. Ularning tavsiyalari aniq va samarali bo‘lib, har bir bosqichda meni qo‘llab-quvvatlashdi. Bu jarayonda o‘zimga bo‘lgan ishonchim oshdi!',
    image: "/Students/std01.png",
  },
  {
    name: "Farangiz Ulasheva",
    text: 'Men ulardan shunchaki maslahat kutgan edim, ammo ular yordamida kutganimdan ham yaxshiroq universitetga o‘qishga kirdim. Haqiqiy mutaxassislar jamoasi!',
    image: "/Students/std02.png",
  },
  {
    name: "Sotimboy Ruzimetov",
    text: 'Dastlab qayerdan boshlashni bilmay, juda ko‘p savollarim bor edi. FASH EDU jamoasi ilk suhbatdayoq aniq yo‘l-yo‘riq ko‘rsatdi va hujjat ishlarini to‘g‘ri tashkil qilib berishdi. Juda mamnunman!',
    image: "/Students/std01.png",
  },
  {
    name: "Manizha Tukhsabaeva",
    text: 'Men bir nechta firmalarni ko‘rib chiqdim, lekin FASH EDU eng jiddiy va professional yondashuvni namoyish etdi. Har bir mijozga alohida e’tibor qaratiladi. Ular bilan ishlaganim to‘g‘ri tanlov bo‘ldi.',
    image: "/Students/std02.png",
  },
  {
    name: "Sherzod Shermatov",
    text: 'FASH EDU nafaqat universitet tanlash, balki til imtihonlariga tayyorgarlikda ham katta yordam ko‘rsatdi. Har bir maslahat foydali va kerakli bo‘ldi. Ular xizmatidan juda minnatdorman.',
    image: "/Students/std01.png",
  },
];

const Testimonial = () => {
  const { t, i18n } = useTranslation();

        const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

  return (
    <div className="slider-wrapper" id="thoughts">
      <h2 className="slider-title" style={{ textTransform: "uppercase" }}>{t('students')}</h2>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div className="slide-item" key={index}>
            <div className="testimonial-box">
              <img src={item.image} alt={item.name} className="testimonial-photo" />
              <div className="testimonial-text">
                <h3 className="testimonial-name">{item.name}</h3>
                <p className="testimonial-message">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;