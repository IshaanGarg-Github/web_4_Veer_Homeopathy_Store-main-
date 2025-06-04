import { useEffect, useRef } from "react";
import welcomeImg from "../assets/welcomeImg.jpg";
import gsap from "gsap";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import CTAButton from "../hooks/ctaBtn";
import HomoCTABtn from "../hooks/HomoCTABtn"
import { useNavigate } from "react-router-dom";
import productData from "../productDetails.json";

// Import all product images
import follibrace from "../assets/follibrace.jpg";
import sinoheal from "../assets/sinoheal.jpg";
import pilefix from "../assets/pilefix.jpg";
import dermoheal from "../assets/dermoheal.jpg";
import stressfree from "../assets/stressfree.jpg";
import wipestone from "../assets/wipestone.jpg";
import oviheal from "../assets/oviheal.jpg";
import tumoheal from "../assets/tumoheal.jpg";
import allerzee from "../assets/allerzee.jpg";
import fevoheal from "../assets/fevoheal.jpg";
import fungoheal from "../assets/fungoheal.jpg";
import reglow from "../assets/reglow.jpg";
import warteez from "../assets/warteez.jpg";
import justika from "../assets/justika.jpg";
import skiwell from "../assets/skiwell.jpg";
import kalmegh from "../assets/kalmegh.jpg";
import rheumoheal from "../assets/rheumoheal.jpg";
import acidoheal from "../assets/acidoheal.jpg";
import deseasesTreated from "../assets/Diseases_treated.jpg"

// Create an image mapping object
const imageMap = {
  "follibrace.jpg": follibrace,
  "sinoheal.jpg": sinoheal,
  "pilefix.jpg": pilefix,
  "dermoheal.jpg": dermoheal,
  "stressfree.jpg": stressfree,
  "wipestone.jpg": wipestone,
  "oviheal.jpg": oviheal,
  "tumoheal.jpg": tumoheal,
  "allerzee.jpg": allerzee,
  "fevoheal.jpg": fevoheal,
  "fungoheal.jpg": fungoheal,
  "reglow.jpg": reglow,
  "warteez.jpg": warteez,
  "justika.jpg": justika,
  "skiwell.jpg": skiwell,
  "kalmegh.jpg": kalmegh,
  "rheumoheal.jpg": rheumoheal,
  "acidoheal.jpg": acidoheal,
};

const Home = () => {
  const textRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      {/* Welcome Section */}
      <section className="welcome-page">
        <div className="left">
          <h1
            ref={(el) => el && textRef.current.push(el)}
            className="animate-text"
          >
            Welcome
          </h1>
          <h2
            ref={(el) => el && textRef.current.push(el)}
            className="animate-text"
          >
            Healthy Life is a key of,
            <br />
            <span>Happy Life</span>
          </h2>
          <p
            ref={(el) => el && textRef.current.push(el)}
            className="animate-text"
          >
            Discover the power of natural healing with our premium homeopathic
            products. We believe in holistic wellness that nurtures both body
            and mind, bringing balance and harmony to your life.
          </p>
          <CTAButton></CTAButton>
        </div>
        <div className="right">
          <img src={welcomeImg} alt="Happy Family" />
        </div>
      </section>

      {/* Product Swiper */}
      <section className="product-range">
        <h1>Our Product Range</h1>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          lazy={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {productData.slice(0, 6).map((product) => {
            const imageFilename = product.image.split("/").pop();
            const productImage = imageMap[imageFilename];

            return (
              <SwiperSlide key={product.id}>
                <div
                  className="product-card"
                  onClick={() => handleProductClick(product.id)}
                >
                  <img
                    src={productImage}
                    alt={product.product}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3>{product.product}</h3>
                    <p className="category">{product.category}</p>
                    <div className="price-section">
                      {Array.isArray(product.available_size) ? (
                        product.available_size.map((size, index) => (
                          <p key={index} className="price-item">
                            <span className="size">{size.size}</span>
                            <span className="price">₹{size.price}</span>
                          </p>
                        ))
                      ) : (
                        <p className="price-item">
                          <span className="size">
                            {product.available_size.size}
                          </span>
                          <span className="price">
                            ₹{product.available_size.price}
                          </span>
                        </p>
                      )}
                    </div>
                    <p className="helps-in">Helps in: {product.helps_in}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </section>

      <section className="deseasesTreated">
        <div className="left">
          <img src={deseasesTreated} alt="Deseases that can be Treated" />
        </div>

        <div className="right">
          <h1>Deseases that can be Treated</h1>
          <p>Diseases that can be treated with Holistic medicine or so-called alternative medicine belong to practically all aspect of medicine including cardiology, surgery, ENT, OB-GYM, Pulmonology, Cardiology etc..</p>
          <HomoCTABtn></HomoCTABtn>
        </div>
      </section>
    </div>
  );
};

export default Home;
