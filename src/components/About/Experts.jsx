import React from "react";
import './Experts.css';

// Importing images
import David from '../../Assets/HomePage/David.png';
import maam from '../../Assets/HomePage/maam.png';



// Social Icons (FontAwesome)
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Nattasha Kelvin",
    title: "Team member post",
    image: David,
    social: true,
  },
  {
    name: "David Simpson",
    title: "Team member post",
    image: David,
    social: false,
  },
  {
    name: "Madeleine Grant",
    title: "Team member post",
    image: maam,
    social: false,
  },
];

const Experts = () => {
  return (
    <section className="experts">
      <div className="experts-header">
        <span className="experts-subtitle">Our Team</span>
        <h2 className="experts-title">Meet Our Experts</h2>
      </div>
      <div className="experts-team">
        {teamMembers.map((member, idx) => (
          <div className="expert-card" key={idx}>
            <div className={`expert-image ${member.social ? "overlay" : ""}`}>
              <img src={member.image} alt={member.name} />
              {member.social && (
                <div className="expert-social">
                  <FaInstagram />
                  <FaFacebookF />
                  <FaTwitter />
                </div>
              )}
            </div>
            <div className="expert-info">
              <strong>{member.name}</strong>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experts;
