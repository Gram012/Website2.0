// Footer component
import React from "react";
import "../css/Footer.css";
import myImage from "../Assets/pngegg.png";

const Footer: React.FC = () => {
  return (
    <footer className="page-container">
      <div className="content">
        <div className="semicircle">
          <img src={myImage} alt="" style={{ width: "100%", height: "auto" }} />
        </div>
        <div className="footer-content">
          <h2>About My Website</h2>
          <p>
            Welcome to my personal website. This is an example of extending the
            page with additional content. Feel free to explore and enjoy the
            stars and comets that decorate the background!
          </p>
          <p>There's so much more to come!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
