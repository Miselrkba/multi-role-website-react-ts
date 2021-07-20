import React from "react";
import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const HeroContent = () => {
  return (
    <>
      <h1 data-aos="fade-right" data-aos-delay="200">
        Creative
        <br />
        Multi-Role Website
      </h1>
      <p data-aos="fade-right" data-aos-delay="600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <br />
        Quam, officiis. Consectetur quos incidunt nam dolor in officia
        voluptatibus delectus nemo.
      </p>
      <button
        className="creative__button --outlined__button"
        data-aos="fade-right"
        data-aos-delay="900"
      >
        <span>See More</span>
      </button>
      <button
        className="creative__button --outlined__button"
        data-aos="fade-right"
        data-aos-delay="900"
      >
        <span>Buy Now</span>
      </button>
    </>
  );
};

const Hero = () => {
  return (
    <section id="hero">
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
              <HeroContent />
            </SwiperSlide>
            <SwiperSlide>
              <HeroContent />
            </SwiperSlide>
            <SwiperSlide>
              <HeroContent />
            </SwiperSlide>
            <SwiperSlide>
              <HeroContent />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
