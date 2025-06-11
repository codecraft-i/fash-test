import React from "react";
import Slider from "react-slick";
import "./Testimonial.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Shixnazar Botirov",
    text: 'FASH EDU menga orzu qilgan universitetimga kirishda katta yordam berdi. Ularning maslahatlari aniq, samarali va har bir bosqichda qo‘llab-quvvatlashdi. O‘zimga ishonch paydo bo‘ldi!',
    image: "/Students/std1.JPG",
  },
  {
    name: "Nazarbek Boltobayev",
    text: 'Avvaliga juda ko‘p chalkashliklar bo‘lgan, qayerdan boshlashni bilmasdim. FASH EDU jamoasi birinchi uchrashuvdan boshlab yo‘nalish berdi, hamma hujjat ishlarini ham to‘g‘ri qilib berishdi. Ajoyib xizmat!',
    image: "/Students/std2.JPG",
  },
  {
    name: "Nafisa Polatova",
    text: 'Men bu firmadan shunchaki maslahat kutgan edim, lekin ular menga hohlaganimdan ham yaxshi universitetga kirishimga yordam berishdi. Haqiqatdan ham o‘z ishining ustalari!',
    image: "/Students/std3.png",
  },
  {
    name: "Rahmanov Isfandiyor",
    text: 'FASH EDU menga nafaqat universitet tanlashda, balki til imtihonlariga tayyorgarlikda ham katta yordam berdi. Har bir maslahat foydali va o‘rinli edi. Bunday xizmat uchun minnatdorman.',
    image: "/Students/std4.png",
  },
  {
    name: "Karimova Nafosat",
    text: 'Men bir necha firmalarni ko‘rib chiqdim, lekin FASH EDU eng professional yondashuvni taklif qildi. Har bir mijozga individual e’tibor berishadi. Ular bilan ishlash men uchun to‘g‘ri qaror bo‘ldi.',
    image: "/Students/std5.png",
  },
];

const Testimonial = () => {
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
    <div className="slider-wrapper">
      <h2 className="slider-title">O'QUVCHILARIMIZ</h2>
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