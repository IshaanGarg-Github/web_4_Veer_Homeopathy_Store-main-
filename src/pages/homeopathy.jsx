import homoIntro from '../assets/homeopathy-intro.jpg';

const homeopathy = () => {
  return (
    <div>
      <section class="homeopathy-hero">
        <div class="homeopathy-content">
          <h1>Understanding Homeopathy</h1>
          <p>A Natural Approach to Healing</p>
        </div>
      </section>

      <section class="homeopathy-intro">
        <div class="container">
          <div class="intro-content">
            <h2>What is Homeopathy?</h2>
            <p>
              Homeopathy is a natural system of medicine that uses highly
              diluted substances to trigger the body's natural healing
              processes. Founded by Dr. Samuel Hahnemann in the late 18th
              century, homeopathy is based on the principle of "like cures like"
              - a substance that causes symptoms in a healthy person can be used
              to treat similar symptoms in a sick person.
            </p>
          </div>
          <div class="intro-image">
            <img
              src={homoIntro}
              alt="Homeopathy Introduction"
            />
          </div>
        </div>
      </section>

      <section class="principles">
        <div class="container">
          <h2>Key Principles of Homeopathy</h2>
          <div class="principles-grid">
            <div class="principle-card">
              <i class="fas fa-balance-scale"></i>
              <h3>Law of Similars</h3>
              <p>
                The fundamental principle that a substance which can cause
                symptoms in a healthy person can cure similar symptoms in a sick
                person.
              </p>
            </div>
            <div class="principle-card">
              <i class="fas fa-flask"></i>
              <h3>Minimum Dose</h3>
              <p>
                Using the smallest possible dose of a substance to stimulate the
                body's natural healing response.
              </p>
            </div>
            <div class="principle-card">
              <i class="fas fa-user"></i>
              <h3>Individualization</h3>
              <p>
                Treating each person as a unique individual, considering their
                specific symptoms and characteristics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="benefits">
        <div class="container">
          <h2>Benefits of Homeopathy</h2>
          <div class="benefits-grid">
            <div class="benefit-item">
              <i class="fas fa-check-circle"></i>
              <h3>Natural Healing</h3>
              <p>
                Uses natural substances to stimulate the body's own healing
                mechanisms.
              </p>
            </div>
            <div class="benefit-item">
              <i class="fas fa-check-circle"></i>
              <h3>Safe & Gentle</h3>
              <p>Minimal side effects and suitable for people of all ages.</p>
            </div>
            <div class="benefit-item">
              <i class="fas fa-check-circle"></i>
              <h3>Holistic Approach</h3>
              <p>Treats the whole person, not just isolated symptoms.</p>
            </div>
            <div class="benefit-item">
              <i class="fas fa-check-circle"></i>
              <h3>Preventive Care</h3>
              <p>
                Can help prevent illness by strengthening the body's natural
                defenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="faq">
        <div class="container">
          <h2>Frequently Asked Questions</h2>
          <div class="faq-grid">
            <div class="faq-item">
              <h3>How long does homeopathic treatment take?</h3>
              <p>
                The duration of treatment varies depending on the individual and
                the condition being treated. Some people experience improvement
                quickly, while others may need longer-term treatment.
              </p>
            </div>
            <div class="faq-item">
              <h3>Are homeopathic remedies safe?</h3>
              <p>
                Yes, homeopathic remedies are generally safe when used as
                directed. They are highly diluted and typically have no side
                effects.
              </p>
            </div>
            <div class="faq-item">
              <h3>Can homeopathy be used alongside conventional medicine?</h3>
              <p>
                Yes, homeopathy can be used alongside conventional medicine.
                However, it's important to inform your healthcare provider about
                all treatments you're using.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default homeopathy;
