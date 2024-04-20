import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Import react-slick
import { mockBarbers, mockTestimonials, mockHaircutPhotos } from '../mockData';
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme styles


const HomePage = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Render featured barbers
  const renderFeaturedBarbers = () => {
    return mockBarbers.map((barber) => (
      <div key={barber.id} className="grid-item barber-item">
        <img src={barber.photoUrl} alt={barber.name} className="barber-photo" />
        <h3>{barber.name}</h3>
        <p>{barber.description}</p>
      </div>
    ));
  };

  // Render testimonials
  const renderTestimonials = () => {
    return mockTestimonials.map((testimonial) => (
      <div key={testimonial.id} className="testimonial">
        <img src={testimonial.photo} alt={testimonial.name} />
        <p>{testimonial.quote}</p>
        <p>- {testimonial.name}</p>
      </div>
    ));
  };

  // Render haircut photos
  const renderHaircutPhotos = () => {
    return mockHaircutPhotos.map((photo) => (
      <div key={photo.id} className="grid-item haircut-item">
        <img src={photo.src} alt={photo.alt} className="haircut-photo" />
      </div>
    ));
  };

  return (
    <div className="home-page">
      <div className="home-page-content">
        <section className="hero-section">
          <h1>Welcome to Barber Services</h1>
          <p>Discover the best barbers in town and book your appointment today.</p>
          <Link to="/barbers" className="cta-button">View Barbers</Link>
        </section>

        <section className="about-us-section">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada diam vel viverra sagittis. Nulla facilisi. Nulla facilisi. Phasellus vestibulum, nisl eget consequat lacinia, nisi lectus sollicitudin mauris, ut dignissim ex justo eget lectus.</p>
          <p>Etiam et augue vel ante consequat varius. Nullam in libero nulla. Aenean in pharetra lacus, eget aliquet tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </section>

        <section className="featured-barbers-section">
          <h2>Featured Barbers</h2>
          <div className="grid-container">{renderFeaturedBarbers()}</div>
        </section>

        <section className="testimonials-section">
          <h2>What Our Customers Say</h2>
          <div className="testimonials">{renderTestimonials()}</div>
        </section>

        <section className="gallery-section">
          <h2>Explore Our Work</h2>

          <Slider {...sliderSettings}>
            {renderHaircutPhotos()}
          </Slider>
        </section>
      </div>
    </div>
  );
};

export default HomePage;