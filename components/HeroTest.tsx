"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const HeroTest = () => {
  const services = [
    {
      title: "Software Development",
      description: "Build Scalable, Custom Software Solutions.",
      image: "/images/software-dev.png",
    },
    {
      title: "Web Development",
      description: "Design Stunning, User-Friendly Websites.",
      image: "/images/web-dev.png",
    },
    {
      title: "Digital Marketing",
      description: "Drive Growth with Data-Driven Marketing Strategies.",
      image: "/images/digital-marketing.png",
    },
    {
      title: "Cybersecurity",
      description: "Secure Your Business with Advanced Cybersecurity Solutions.",
      image: "/images/cybersecurity.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-black opacity-75"></div>
      <div className="relative z-10 text-center">
        <img src="/logo.svg" alt="Digimatic Marketers Logo" className="w-48 mx-auto mb-8" />
        <h1 className="text-5xl font-bold mb-4">Open the Future</h1>
        <p className="text-xl mb-8">From Software Development to Cybersecurity, We Deliver Results That Matter.</p>
        <div className="w-full max-w-4xl mx-auto">
          <Swiper
            effect={'fade'}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center p-8">
                  <img src={service.image} alt={service.title} className="w-32 h-32 mb-4" />
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-8">
          <a href="#services" className="bg-purple-600 text-white px-6 py-3 rounded-lg mr-4 hover:bg-purple-700 transition duration-300">
            Explore Our Services
          </a>
          <a href="#success-stories" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
            See Our Success Stories
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroTest;