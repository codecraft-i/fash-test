import React from 'react';
import './TurkeyUniversities.css';
import { Link } from 'react-router-dom';

import Header from '@components/Header/Header/Header';
import Footer from '@components/Footer/Footer';
import ContactSection from '@components/ContactSection/ContactSection';
import ContactForm from '@components/ContactItems/ContactForm';

const universities = [
  {
    name: 'Istanbul Kent Universiteti',
    image: '/images/universities/m1.jpg',
    link: '/universities/istanbul-kent',
  },
  {
    name: 'Istanbul Kadir Has Universiteti',
    image: '/images/universities/m2.jpg',
    link: '/universities/kadir-has',
  },
  {
    name: 'Antalya Bilim Universiteti',
    image: '/images/universities/m3.jpg',
    link: '/universities/antalya-bilim',
  },
  {
    name: 'Istanbul Arel Universiteti',
    image: '/images/universities/m4.jpg',
    link: '/universities/istanbul-arel',
  },
  {
    name: 'Istanbul Yeni Yüzyıl Universiteti',
    image: '/images/universities/m5.jpg',
    link: '/universities/yeni-yuzyil',
  },
  {
    name: 'Istanbul Altınbaş Universiteti',
    image: '/images/universities/m6.jpg',
    link: '/universities/altinbas',
  },
  {
    name: 'Istanbul Medipol Universiteti',
    image: '/images/universities/m7.jpg',
    link: '/universities/medipol',
  },
  {
    name: 'Istanbul Üsküdar Universiteti',
    image: '/images/universities/m8.jpg',
    link: '/universities/uskudar',
  },
  {
    name: 'Istanbul Beykent Universiteti',
    image: '/images/universities/m9.jpg',
    link: '/universities/beykent',
  },
  {
    name: 'Istanbul Nişantaşı Universiteti',
    image: '/images/universities/m10.jpg',
    link: '/universities/nisantasi',
  },
  {
    name: 'Istanbul Özyeğin Universiteti',
    image: '/images/universities/m11.jpg',
    link: '/universities/ozyegin',
  },
  {
    name: 'Istanbul Topkapı Universiteti',
    image: '/images/universities/m12.jpg',
    link: '/universities/topkapi',
  },
];

const TurkishUniversities = () => {
  return (
    <>
    <Header />
    <div className="turkish-universities-container">
      <h1 className="section-title">Turkiyadagi Eng Nufuzli Universitetlar</h1>
      <p className="section-description">
        Fash Edu orqali siz hech qanday firma xizmatlari, til sertifikatlari yoki imtihonlarsiz, 50% dan 100% gacha bo‘lgan grant asosida, atigi 24 soat ichida talaba bo‘lish imkoniyatiga egasiz.
      </p>

      <div className="university-grid">
        {universities.map((uni, index) => (
          <Link to={uni.link} className="university-card" key={index}>
            <img src={uni.image} alt={uni.name} />
            <h2>{uni.name}</h2>
          </Link>
        ))}
      </div>

      <div className="final-note">
        <p>
          Har bir universitet bilan tanishish, hujjat topshirish va batafsil ma’lumot olish uchun biz bilan bog‘laning. Sizga eng mos universitet va yo‘nalishni tanlab, 24 soat ichida talaba bo‘lish orzuyingizni ro‘yobga chiqaramiz!
        </p>
      </div>
    </div>

    <ContactSection />
        <div className='baseContactSendingBox'>
            <ContactForm />
        </div>
    <Footer />
    </>
  );
};

export default TurkishUniversities;
