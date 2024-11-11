import React, { useState } from "react";
import "./Space.css";

const App: React.FC = () => {
  // Function to generate the stars
  const generateStars = (): JSX.Element[] => {
    const stars: JSX.Element[] = []; // Array of JSX elements
    for (let i = 0; i < 200; i++) {
      const cx = `${Math.round(Math.random() * 10000) / 100}%`; // X-coordinate for stars
      const cy = `${Math.round(Math.random() * 10000) / 100}%`; // Y-coordinate for stars
      const r = Math.round((Math.random() + 0.5) * 10) / 10; // Random radius for stars
      stars.push(<circle key={i} className="star" cx={cx} cy={cy} r={r} />);
    }
    return stars;
  };

  // State to track dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <div className="stars-wrapper" style={{ height: "200vh", zIndex: -1 }}>
        <p
          style={{
            color: "#FFFFFF",
            textAlign: "center",
            fontSize: "large",
            paddingTop: "100px",
          }}
        >
          Welcome to my Website!!
        </p>

        {[...Array(3)].map((_, s) => (
          <svg
            key={s}
            className="stars"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          >
            {generateStars()}
          </svg>
        ))}
        <svg
          className="extras"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="comet-gradient" cx="0" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="rgba(255,255,255,.8)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
          <g transform="rotate(-135)">
            <ellipse
              className="comet comet-a"
              fill="url(#comet-gradient)"
              cx="0"
              cy="0"
              rx="150"
              ry="2"
            />
          </g>
          <g transform="rotate(20)">
            <ellipse
              className="comet comet-b"
              fill="url(#comet-gradient)"
              cx="100%"
              cy="0"
              rx="150"
              ry="2"
            />
          </g>
          <g transform="rotate(300)">
            <ellipse
              className="comet comet-c"
              fill="url(#comet-gradient)"
              cx="40%"
              cy="100%"
              rx="150"
              ry="2"
            />
          </g>
        </svg>
      </div>

      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "50px",
          textAlign: "center",
          clipPath: "circle(130% at 50% 600%)",
        }}
      >
        <h2>About My Website</h2>
        <p>
          Welcome to my personal website. This is an example of extending the
          page with additional content. Feel free to explore and enjoy the stars
          and comets that decorate the background!
        </p>
        <p>There's so much more to come!</p>
      </div>
    </>
  );
};

export default App;
