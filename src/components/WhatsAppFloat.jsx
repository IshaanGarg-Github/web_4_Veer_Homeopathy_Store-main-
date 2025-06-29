import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import "./WhatsAppFloat.css"; // import custom styles

const WhatsAppFloat = () => {
  const phoneNumber = "+917505508719";
  const message = "Hello! I would like to know more about your services.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.button
      className="whatsapp-float-button"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </motion.button>
  );
};

export default WhatsAppFloat;
