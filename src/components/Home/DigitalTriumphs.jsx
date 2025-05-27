import React from 'react';
import TriumphCard from './TriumphCard';
import './DigitalTriumphs.css';
import web from '../../Assets/HomePage/coffeebar.png';
import software from '../../Assets/HomePage/vases.png';
import ai from '../../Assets/HomePage/camera.png';

const DigitalTriumphs = () => {
  return (
    <section className="digital-triumphs">
      <h2 className="section-heading">Our Digital Triumphs</h2>
      <div className="triumph-cards-wrapper">
        <TriumphCard
          image={web}
          title="WEB DEVELOPMENT"
          description="Everything you need to create a professional homepage and site for your business: a custom domain, SEO tools, automated business listings, contact form and more."
          linkText="Business Website how to"
        />
        <TriumphCard
          image={software}
          title="SOFTWARE SOLUTIONS"
          description="Sell anything online easily—secure payments, order management, no transaction fees. Perfect for hobbyists or growing businesses."
          linkText="Online shop how to"
        />
        <TriumphCard
          image={ai}
          title="AI SERVICES"
          description="Looking to find new work or new audiences? Present yourself and your portfolio or resume in the best light with a customized website."
          linkText="Portfolio how to"
        />
      </div>
      <div className="cta-button-container">
        <button className="cta-button">Start now. It’s free</button>
      </div>
    </section>
  );
};

export default DigitalTriumphs;
