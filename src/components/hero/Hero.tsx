/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Hero.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__row">
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
          >
            <SwiperSlide>
              <h1>Creative Multipurpose Website</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                officiis. Consectetur quos incidunt nam dolor in officia
                voluptatibus delectus nemo.
              </p>
              <button className="hero__button --outlined__button">
                <span>See More</span>
              </button>
              <button className="hero__button --outlined__button">
                <span>Buy Now</span>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <h1>Creative Multipurpose Website</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                officiis. Consectetur quos incidunt nam dolor in officia
                voluptatibus delectus nemo.
              </p>
              <button className="hero__button --outlined__button">
                <span>See More</span>
              </button>
              <button className="hero__button --outlined__button">
                <span>Buy Now</span>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <h1>Creative Multipurpose Website</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                officiis. Consectetur quos incidunt nam dolor in officia
                voluptatibus delectus nemo.
              </p>
              <button className="hero__button --outlined__button">
                <span>See More</span>
              </button>
              <button className="hero__button --outlined__button">
                <span>Buy Now</span>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <h1>Creative Multipurpose Website</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                officiis. Consectetur quos incidunt nam dolor in officia
                voluptatibus delectus nemo.
              </p>
              <button className="hero__button --outlined__button">
                <span>See More</span>
              </button>
              <button className="hero__button --outlined__button">
                <span>Buy Now</span>
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
