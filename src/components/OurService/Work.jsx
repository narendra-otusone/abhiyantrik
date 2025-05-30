import React, { useState } from "react";
import "./Work.css";
import Plant from "../../Assets/HomePage/plant.png";

// You can move this to a separate file if needed
const ServiceCards = () => {
  const services = [
    {
      title: "WEB DEVELOPMENT",
      icon: "📝",
      link: "#",
    },
    {
      title: "SOFTWARE SOLUTIONS",
      icon: "💻",
      link: "#",
    },
    {
      title: "AI SERVICES",
      icon: "🤖",
      link: "#",
    },
  ];

  return (
    <div className="card-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="icon-circle">{service.icon}</div>
          <h3 className="card-title">{service.title}</h3>
          <a className="read-more" href={service.link}>
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

const servicesData = [
  {
    title: "WEB DEVELOPMENT",
    description:
      "Completely synergized resourced taxings relationships premiers markets ultivate one-to-one customer service with robust ideas dynamically innovated resources leveling customer service for state of the art customer service innovate product for reliable supply engage web services cutting-edge deliverables.",
    benefits: ["Increased Credibility", "Client Convenience", "Professionalism"],
  },
  {
    title: "SOFTWARE SOLUTIONS",
    description:
      "Streamline your business with custom software. Enhance efficiency, reliability, and performance with tailor-made digital tools.",
    benefits: ["Efficiency Boost", "Tailored Experience", "Cost Optimization"],
  },
  {
    title: "AI SERVICES",
    description:
      "Empower your systems with intelligent automation. AI solutions that learn, adapt, and optimize operations across platforms.",
    benefits: ["Automation", "Data Insights", "Smart Decisions"],
  },
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const service = servicesData[activeIndex];

  return (
    <div className="services-container">
      <h2 className="section-heading">We’re Offering</h2>

      {/* Insert the 3 Cards Below the Heading */}
      <ServiceCards />

      <div className="services-content">
        <div className="service-menu">
          <h3>Services</h3>
          {servicesData.map((item, index) => (
            <button
              key={index}
              className={`menu-button ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {item.title}
              <span className="arrow">{activeIndex === index ? "→" : ">"}</span>
            </button>
          ))}
        </div>

        <div className="service-details">
          <h3>{service.title}</h3>
          <p className="service-description">{service.description}</p>

          <div className="image-benefits">
            <img
              src={Plant}
              alt="Service Visual"
              className="service-image"
            />
            <div className="benefits">
              <h4>Our benefits</h4>
              <p className="highlight">Incubate standards compliant channels benefits.</p>
              <ul>
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}>✔ {benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
