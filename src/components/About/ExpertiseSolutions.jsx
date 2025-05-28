import React from 'react';
import './ExpertiseSolutions.css';

const services = [
  {
    icon: '📅',
    title: 'Web Development',
    description: 'Schedule a consultation with our experts to discuss your requirements.',
    link: '#',
  },
  {
    icon: '🧠',
    title: 'Software Solutions',
    description: 'We analyze your needs and provide tailored solutions for your business growth.',
    link: '#',
  },
  {
    icon: '🛡️',
    title: 'AI Services',
    description: 'Receive high-quality professional services and ongoing support for your financial success.',
    link: '#',
  },
];

export default function ExpertiseSolutions() {
  return (
    <section className="expertise-section">
      <div className="section-label">Work Process</div>
      <h2 className="section-title">Expertise and Solutions</h2>
      <div className="card-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.link}>Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}
