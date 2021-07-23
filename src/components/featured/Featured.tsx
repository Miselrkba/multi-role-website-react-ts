import React from "react";
import "./Featured.scss";
import featured1 from "../../assets/images/featured-img1.jpg";
import featured2 from "../../assets/images/featured-img2.jpg";
import { FaFire, FaMagic } from "react-icons/fa";

const Featured = () => {
  return (
    <section id="featured">
      <div className="featured__container">
        <div className="featured__row">
          <div
            className="featured__row__wrapper"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <div className="featured__title">
              <h6>About the company</h6>
              <h1>a rich featured, epic & premium work.</h1>
            </div>
            <p>
              There are many variations of passages of available but the
              majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the generators on the Internet.
            </p>
            <div className="featured__media__container">
              <div className="featured__media">
                <FaMagic />
                <div className="featured__media__body">
                  <h5>Great offer</h5>
                  <p>Bratislava, Slovakia</p>
                </div>
              </div>
              <div className="featured__media">
                <FaFire />
                <div className="featured__media__body">
                  <h5>Another offer</h5>
                  <p>New York, United States</p>
                </div>
              </div>
            </div>
            <button
              className="featured__button creative__button --outlined__button"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <span>See More</span>
            </button>
          </div>
          <div
            className="featured__row__wrapper"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <div className="featured__img">
              <img className="featured__big" src={featured1} alt="Featured 1" />
              <img
                className="featured__small"
                src={featured2}
                alt="Featured 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
