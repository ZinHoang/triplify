// import React from 'react';
import { About } from './about';
import { Banner } from './banner/Banner';
import { Blogs } from './blogs/Blogs';
import { BookingForm } from './booking-form';
import { Destination } from './destination';
import { Gallery } from './gallery';
import { Home } from './home';
import { Reviews } from './reviews/Reviews';
import { Services } from './services';
import { Element } from 'react-scroll';

export const MainContent = () => {
  return (
    <>
      <Element name="home">
        <section style={{ padding: 0 }}>
          <Home />
        </section>
      </Element>
      <Element name="booking-form">
        <section>
          <BookingForm />
        </section>
      </Element>
      <Element name="about">
        <section>
          <About />
        </section>
      </Element>
      <Element name="gallery">
        <section>
          <Gallery />
        </section>
      </Element>
      <Element name="destination">
        <section>
          <Destination />
        </section>
      </Element>
      <Element name="services">
        <section>
          <Services />
        </section>
      </Element>
      <Reviews />
      <Element name="blogs">
        <section>
          <Blogs />
        </section>
      </Element>
      <Banner />
    </>
  );
};
