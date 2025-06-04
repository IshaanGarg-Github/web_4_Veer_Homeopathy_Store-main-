import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const CTAButton = () => {
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctaButton = buttonRef.current;

    if (!ctaButton) return;

    const handleMouseEnter = () => {
      gsap.to(ctaButton, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(ctaButton, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Add event listeners
    ctaButton.addEventListener("mouseenter", handleMouseEnter);
    ctaButton.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function
    return () => {
      ctaButton.removeEventListener("mouseenter", handleMouseEnter);
      ctaButton.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClick = () => {
    navigate("/homeopathy");
  };

  return (
    <button ref={buttonRef} className="cta-button" onClick={handleClick}>
      Read about Homeopathy
    </button>
  );
};

export default CTAButton;
