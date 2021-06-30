import React from 'react';
import './Newsletter.scss';

const Newsletter = () => {
  return (
    <section id="cta" data-aos="fade-up" data-aos-delay="0">
      <div className="cta__container">
        <div
          className="cta__content"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div
            className="cta__content__container"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2>BUILDING THE MODERN WEBSITES</h2>
            <p>
              Packed with all the goodies you can get, your premium website.
            </p>
          </div>

          <button
            className="creative__button --outlined__button"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-offset="0"
          >
            <span>JOIN NEWSLETTER</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
