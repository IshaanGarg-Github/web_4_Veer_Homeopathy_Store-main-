import logoPic from '../assets/logo-pic.jpg';

const about = () => {
  return (
    <div>
      <section class="about-hero">
        <div class="about-content">
          <h1>About Us</h1>
          <p>Your Trusted Partner in Natural Healing</p>
        </div>
      </section>

      <section class="about-story">
        <div class="container">
          <div class="story-content">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to bring natural healing to everyone, we
              have been at the forefront of homeopathic medicine for over two
              decades. Our journey began with a simple belief: that nature
              provides the best remedies for our health challenges.
            </p>
            <p>
              Today, we continue to uphold this belief while combining
              traditional wisdom with modern scientific research to create
              effective, natural solutions for your health and wellness needs.
            </p>
          </div>
          <div class="story-image">
            <img src={logoPic} alt="Our Story" />
          </div>
        </div>
      </section>

      <section class="our-values">
        <div class="container">
          <h2>Our Values</h2>
          <div class="values-grid">
            <div class="value-card">
              <i class="fas fa-heart"></i>
              <h3>Natural Healing</h3>
              <p>
                We believe in the power of nature to heal and restore balance to
                the body.
              </p>
            </div>
            <div class="value-card">
              <i class="fas fa-flask"></i>
              <h3>Scientific Excellence</h3>
              <p>
                Our products are backed by rigorous research and quality
                testing.
              </p>
            </div>
            <div class="value-card">
              <i class="fas fa-handshake"></i>
              <h3>Customer Care</h3>
              <p>Your health and satisfaction are our top priorities.</p>
            </div>
            <div class="value-card">
              <i class="fas fa-leaf"></i>
              <h3>Sustainability</h3>
              <p>
                We are committed to eco-friendly practices and sustainable
                sourcing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
