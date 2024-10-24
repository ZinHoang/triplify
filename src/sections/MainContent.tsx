import { About } from './about';
import { Home } from './home';
import { BookingForm } from './booking-form/BookingForm';

export const MainContent = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="booking-form">
        <BookingForm />
      </section>
      <section id="about">
        <About />
      </section>
      {/* <section id="destination">
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
    </section> */}
    </div>
  );
};
