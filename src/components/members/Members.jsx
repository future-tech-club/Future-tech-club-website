import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedinIn } from "react-icons/fa";
import "./members.css";
import AsmaImg from './images/asma.jpg'
import AnfelImg from './images/anfel.jpg'

const Members = () => {
  const members = [
    {
      id: 1,
      image: AsmaImg,
      name: "Chohra Asma",
      department: "Developpment",
      role: "Manager",
      prom: "IGE3",
      description: "Hi, I'm Chohra Asma, a 3rd-year IT engineering student at ENSTIC. I am a frontend developer  leading the development team.",
      linkedin_account: "www.linkedin.com/in/asma-chohra-53003124b"
    },
    {
      id: 2,
      image: AnfelImg,
      name: "Yetto Anfel",
      department: "Design",
      role: "Manager",
      prom: "IGE3",
      description: "Hi, I'm YETTO Anfel, a 3rd-year IT engineering student at ENSTICP and the design department chief at FTClub. I hope to encourage beginner designers to improve.",
      linkedin_account: "https://www.linkedin.com/in/yetto-anfel-ab656126a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
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