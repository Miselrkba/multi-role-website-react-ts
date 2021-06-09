import React from 'react';
import Featured from './featured/Featured';
import Footer from './footer/Footer';
import Header from './header/Header';
import Hero from './hero/Hero';
import Newsletter from './newsletter/Newsletter';
import Pricing from './pricing/Pricing';
import Recent from './recent/Recent';
import Services from './services/Services';
import Testimonials from './testimonials/Testimonials';
import Trust from './trust/Trust';

const App = () => {
  return (
    <>
      <button>test</button>
      <Header />
      <Hero />
      <Newsletter />
      <Services />
      <Featured />
      <Recent />
      <Trust />
      <Pricing />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
