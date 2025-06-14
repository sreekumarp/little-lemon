import SectionTitle from "../title/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { testimonialItem } from "../../Data";

import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <SectionTitle
        subtitle="Testimonials"
        title={
          <>
            What Our Awesome <span>Clients Say</span> About Us
          </>
        }
      />

      <Swiper
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        className="container"
      >
        {testimonialItem.map(({ name, description }, index) => {
          return (
            <SwiperSlide className="testimonials-item" key={index}>
              <div className="testimonials-bg">
                <div className="testimonials-data">
                  <div>
                    <h3 className="testimonials-name">{name}</h3>
                    <p className="testimonials-profile">Customer</p>
                  </div>
                </div>

                <p className="testimonials-description">{description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonials;
