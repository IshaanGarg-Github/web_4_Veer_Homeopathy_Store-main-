import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSwiper({ testimonials }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
    >
      {testimonials.map(({ img, name, status, quote }, i) => (
        <SwiperSlide key={i}>
          <div className="testimonial-card">
            <div className="quote">
              <i className="fas fa-quote-left" />
            </div>
            <p>{quote}</p>
            <div className="client-info">
              <img src={img} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{status}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
