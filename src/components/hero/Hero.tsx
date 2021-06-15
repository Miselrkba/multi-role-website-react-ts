/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Hero.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__row">
          <Swiper
            // spaceBetween={30}
            // centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <h1>Creative Multipurpose Website</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                officiis. Consectetur quos incidunt nam dolor in officia
                voluptatibus delectus nemo.
              </p>
              <button>See More</button>
              <button>Get More</button>
            </SwiperSlide>
            <SwiperSlide>
              <h1>Creative Multipurpose Website</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                officiis. Consectetur quos incidunt nam dolor in officia
                voluptatibus delectus nemo.
              </p>
              <button>See More</button>
              <button>Get More</button>
            </SwiperSlide>
            <SwiperSlide>
              <h1>Creative Multipurpose Website</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                officiis. Consectetur quos incidunt nam dolor in officia
                voluptatibus delectus nemo.
              </p>
              <button>See More</button>
              <button>Get More</button>
            </SwiperSlide>
            <SwiperSlide>
              <h1>Creative Multipurpose Website</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                officiis. Consectetur quos incidunt nam dolor in officia
                voluptatibus delectus nemo.
              </p>
              <button>See More</button>
              <button>Get More</button>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
