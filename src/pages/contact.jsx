import contactPic from "../assets/contact-pic.jpg";

const contact = () => {
  return (
    <div>
      <section class="contact-hero">
        <div class="contact-content">
          <h1>Contact Us</h1>
          <p>
            We're here to assist you with any inquiries or support you may need.
          </p>
        </div>
      </section>

      <section class="contact-details">
        <div class="container">
          <div class="main-details">
            <h2>Veer Homeopathic Store</h2>
            <h3>Corporate Office :-</h3>
            <p>
              Opp. Durga Mandir, Samrat Vikram Colony, Chilkana Road, Saharanpur
            </p>

            <p>
              <i class="fa-solid fa-phone"></i> +91 904 508 8689
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i> veerhomeopathic@gmail.com
            </p>
          </div>
          <div class="contact-img">
            <img src={contactPic} alt="Contact Us" />
          </div>
        </div>
      </section>

      <section class="contact-section">
        <div class="contact-container">
          <h2>Contact Us</h2>
          <form action="https://formspree.io/f/xovwqykb" method="POST">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>

          <div class="contact-info">
            <p>Email: veerhomeopathic@gmail.com</p>
            <p>
              Note: After submitting the form, you'll receive a confirmation
              message on the screen. Your message will be sent directly to our
              email, and we'll get back to you as soon as possible. <br />
              We respect your privacy — your contact details are safe with us
              and will only be used to respond to your message.
            </p>
          </div>
        </div>
      </section>

      <section class="map-section">
        <div class="map-container">
          <div class="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d77.5405!3d29.9901667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU5JzI0LjYiTiA3N8KwMzInMjUuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Veer Homeopathic Store Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
