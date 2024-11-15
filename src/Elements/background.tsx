import React from "react";
import "../css/Space.css";

const Stars: any = () => {
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

  return (
    <>
      <div
        className="stars-wrapper"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "200wh",
          height: "200vh",
          zIndex: -1,
        }}
      >
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
    </>
  );
};

export default Stars;
