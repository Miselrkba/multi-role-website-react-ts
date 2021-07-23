import React from "react";
import "./Recent.scss";
import post1 from "../../assets/images/post1.jpg";
import post2 from "../../assets/images/post2.jpg";
import post3 from "../../assets/images/post3.jpg";
import post4 from "../../assets/images/post4.jpg";
import { FaArrowRight } from "react-icons/fa";

const Recent = () => {
  return (
    <section id="recent">
      <div className="recent__container">
        <div className="recent__row">
          <div className="recent__row__wrapper">
            <div
              className="recent__row__post"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="recent__row__post__content">
                <time dateTime="2021-08-06T13:53">15 Oct, 2021</time>
                <h3>
                  <a href="/#">Proudly for us to build stylish</a>
                </h3>
                <p>
                  <a href="/#">Creative</a>, <a href="/#">Website</a>,
                  <a href="/#">E-commerce</a>
                </p>
                <a className="recent__icon__button" href="/#">
                  <FaArrowRight />
                </a>
              </div>
              <div className="recent__row__post__content__thumb">
                <img className="img-fluid" src={post1} alt="Post 1" />
              </div>
            </div>
          </div>
          <div className="recent__row__wrapper">
            <div
              className="recent__row__post"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="recent__row__post__content__thumb">
                <img className="img-fluid" src={post2} alt="Post 1" />
              </div>
              <div className="recent__row__post__content">
                <time dateTime="2021-08-06T13:53">15 Oct, 2021</time>
                <h3>
                  <a href="/#">Remind me to water the plants</a>
                </h3>
                <p>
                  <a href="/#">Creative</a>, <a href="/#">Website</a>,
                  <a href="/#">E-commerce</a>
                </p>
                <a className="recent__icon__button" href="/#">
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className="recent__row__wrapper">
            <div
              className="recent__row__post"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="recent__row__post__content">
                <time dateTime="2021-08-06T13:53">15 Oct, 2021</time>
                <h3>
                  <a href="/#">Add apples to the grocery list</a>
                </h3>
                <p>
                  <a href="/#">Creative</a>, <a href="/#">Website</a>,
                  <a href="/#">E-commerce</a>
                </p>
                <a className="recent__icon__button" href="/#">
                  <FaArrowRight />
                </a>
              </div>
              <div className="recent__row__post__content__thumb">
                <img className="img-fluid" src={post3} alt="Post 1" />
              </div>
            </div>
          </div>
          <div className="recent__row__wrapper">
            <div
              className="recent__row__post"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="recent__row__post__content__thumb">
                <img className="img-fluid" src={post4} alt="Post 1" />
              </div>
              <div className="recent__row__post__content">
                <time dateTime="2021-08-06T13:53">15 Oct, 2021</time>
                <h3>
                  <a href="/#">Make it warmer downstairs</a>
                </h3>
                <p>
                  <a href="/#">Creative</a>, <a href="/#">Website</a>,
                  <a href="/#">E-commerce</a>
                </p>
                <a className="recent__icon__button" href="/#">
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="recent__button__container">
          <button
            className="recent__button creative__button --outlined__button"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <span>See More</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recent;
