import { About } from './about';
import { Banner } from './banner/Banner';
import { Blogs } from './blogs/Blogs';
import { BookingForm } from './booking-form';
import { Destination } from './destination';
import { Gallery } from './gallery';
import { Home } from './home';
import { Services } from './services';

export const MainContent = () => {
  return (
    <div>
      <section style={{ padding: 0 }} id="home">
        <Home />
      </section>
      <section id="booking-form">
        <BookingForm />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="destination">
        <Destination />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <Banner />
    </div>
  );
};
