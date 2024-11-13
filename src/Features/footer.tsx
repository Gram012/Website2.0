// Footer component
import React from "react";
import "../Footer.css"; // Import the CSS file
import myImage from "../Assets/pngegg.png";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="semicircle">
        <img src={myImage} alt="" style={{ width: "2000px", height: "auto" }} />
      </div>
      <div className="footer-content">
        <h2>About My Website</h2>
        <p>
          Welcome to my personal website. This is an example of extending the
          page with additional content. Feel free to explore and enjoy the stars
          and comets that decorate the background!
        </p>
        <p>There's so much more to come!</p>
      </div>
    </footer>
  );
};

export default Footer;
