import React from "react";
import Image from "next/image";
import pic from "./Mithu.jpg";
import "./Body.css"; // Importing custom CSS

const Body = () => {
  return (
    <>
      {/* Body Section */}
      <div className="body-container">
        {/* Text Section */}
        <div className="text-content">
          <h1>
            I am a Professional <br />
            <b className="highlight">Web Developer</b>
          </h1>
          <p className="description">
            I create modern and responsive web applications.
          </p>
          <button className="portfolio-button">
            You can see my Portfolio
          </button>
        </div>

        {/* Profile Image */}
        <Image
          src={pic}
          width={400}
          height={400}
          placeholder="blur"
          alt="Profile Photo"
          className="profile-image"
        />
      </div>

      {/* Social Media Section */}
      <h1 className="social-title">Visit Social Media Profile</h1>
      <div className="social-container">
        {/* LinkedIn */}
        <div className="social-box">
          <button className="social-button">
            <a target="_blank" href="https://www.linkedin.com/in/mithu-mal-8a14781a7/">
              LinkedIn
            </a>
          </button>
          <p className="social-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
            excepturi earum sequi voluptates vel beatae veritatis. Sunt, aut
            dolor possimus harum ab iste doloribus nulla unde. Est sunt placeat
            fugit.
          </p>
        </div>

        {/* GitHub */}
        <div className="social-box">
          <button className="social-button">
            <a target="_blank" href="https://github.com/Mithu3311">
              GitHub
            </a>
          </button>
          <p className="social-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            cumque ipsa? Nulla rem, quos quam, quidem debitis error voluptatum
            enim pariatur aliquid facilis deleniti in consequuntur consequatur
            incidunt placeat? Voluptatem.
          </p>
        </div>

        {/* Vercel */}
        <div className="social-box">
          <button className="social-button">
            <a target="_blank" href="https://vercel.com/mithu3311s-projects">
              Vercel
            </a>
          </button>
          <p className="social-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            tempora repellat aperiam inventore aliquam recusandae autem dolores
            rerum tenetur, harum hic animi perferendis officia voluptatibus
            nobis, qui perspiciatis fugiat adipisci.
          </p>
        </div>

        {/* Facebook */}
        <div className="social-box">
          <button className="social-button">
            <a target="_blank" href="https://www.facebook.com/mithu.mal.94617?mibextid=JRoKGi">
              Facebook
            </a>
          </button>
          <p className="social-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            tempora repellat aperiam inventore aliquam recusandae autem dolores
            rerum tenetur, harum hic animi perferendis officia voluptatibus
            nobis, qui perspiciatis fugiat adipisci.
          </p>
        </div>
      </div>
    </>
  );
};

export default Body;
