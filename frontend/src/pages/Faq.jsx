import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is Khaja Pasal?",
      answer:
        "Khaja Pasal is your one-stop solution for discovering delicious food and the best dining experiences around your area.",
    },
    {
      question: "How can I book a food item?",
      answer:
        "You can browse through the menu, select a food item, and proceed with the booking by filling in your details and selecting your preferred payment method.",
    },
    {
      question: "Do I need an account to order food?",
      answer:
        "Yes, you need to create an account to place orders and track your bookings.",
    },
    {
      question: "How do I become a partner with Khaja Pasal?",
      answer:
        "To become a partner, you can contact us directly through the ‘Contact Us’ page or sign up as a service provider.",
    },
    {
      question: "What payment methods are available?",
      answer:
        "We accept cash payments and online transactions for your convenience.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-items">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className="faq-toggle-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="logo-section">
            <h3>Khaja Pasal</h3>
            <p>© 2024 Khaja Ghar, All Rights Reserved</p>
          </div>
          <div className="contact-section">
            <h4>Contact Us</h4>
            <p>Tel: +977-9856345689</p>
            <p>Email: info@gharmaisewa.com</p>
          </div>
          <div className="social-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Faq;
