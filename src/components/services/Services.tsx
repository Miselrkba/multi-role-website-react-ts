import React from 'react';
import './Services.scss';
import service1 from '../../assets/images/service1.png';
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.png';
import service4 from '../../assets/images/service4.png';
import service5 from '../../assets/images/service5.png';

const Services = () => {
  return (
    <section id="services">
      <div className="services__container__top">
        <div className="services__title">
          <h6>Our Work</h6>
          <h1>Why Choose Us</h1>
        </div>
        <div className="services__container__bottom">
          <div className="services__container__row">
            <div className="services__container__row__box">
              <div
                className="services__container__row__box__media"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="400"
              >
                <img className="mr-4" src={service1} alt="Web Development" />
                <div className="services__container__row__box__media__body">
                  <h5>Web Development</h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, quo.
                </div>
              </div>
            </div>
            <div className="services__container__row__box">
              <div
                className="services__container__row__box__media"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                <img className="mr-4" src={service2} alt="Web Development" />
                <div className="services__container__row__box__media__body">
                  <h5>Testing for perfection</h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, quo.
                </div>
              </div>
            </div>
            <div className="services__container__row__box">
              <div
                className="services__container__row__box__media"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="800"
              >
                <img className="mr-4" src={service3} alt="Web Development" />
                <div className="services__container__row__box__media__body">
                  <h5>Discussion of the idea</h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, quo.
                </div>
              </div>
            </div>
            <div className="services__container__row__box">
              <div
                className="services__container__row__box__media"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="400"
              >
                <img className="mr-4" src={service4} alt="Web Development" />
                <div className="services__container__row__box__media__body">
                  <h5>Modern style</h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, quo.
                </div>
              </div>
            </div>
            <div className="services__container__row__box">
              <div
                className="services__container__row__box__media"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                <img className="mr-4" src={service1} alt="Web Development" />
                <div className="services__container__row__box__media__body">
                  <h5>Web Development</h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, quo.
                </div>
              </div>
            </div>
            <div className="services__container__row__box">
              <div
                className="services__container__row__box__media"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="800"
              >
                <img className="mr-4" src={service5} alt="Web Development" />
                <div className="services__container__row__box__media__body">
                  <h5>Elaboration of the core</h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, quo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
