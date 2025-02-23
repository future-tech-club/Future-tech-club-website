import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedinIn } from "react-icons/fa";
import "./members.css";
import AsmaImg from './images/asma.jpg'

const Members = () => {
  const members = [
    {
      id: 1,
      image: AsmaImg,
      name: "Chohra Asma",
      department: "Developpment",
      role: "Manager",
      prom: "IGE3",
      description: "rontend developer & DevOps enthusiast leading the development team.",
      linkedin_account: "www.linkedin.com/in/asma-chohra-53003124b"
    },
    {
      id: 2,
      image: "https://example.com/image2.jpg",
      name: "Jane Smith",
      department: "Design",
      role: "UI/UX Designer",
      prom: "2022",
      description: "Jane is a creative designer specializing in user experience and interface design.",
      linkedin_account: "https://www.linkedin.com/in/janesmith"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <div id="Members" className="Members-section">
      <div className="title">Members</div>
      <div className="subtitle">Meet Our Team</div>
      <Slider className="flex members" {...settings}>
        {members.map((member) => (
          <div key={member.id} className="member flex">
            <div className="member-card flex">
              <img
                src={member.image}
                alt={member.name}
                onError={(e) => (e.target.src = "default-placeholder.png")} // Fallback image if the URL is broken
              />
              <div className="member-description">{member.description}</div>
              <div className="linkedin-icon">
                <a
                  href={member.linkedin_account}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={25} color="#61DBFB" />
                </a>
              </div>
            </div>
            <div className="member-details">
              <p>{member.department}</p>
              <p>{member.role}</p>
              <p>{member.name}</p>
              <p>{member.prom}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Members;