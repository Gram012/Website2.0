import React from "react";
import "./css/Space.css";
import Welcome from "./Elements/welcome";
import Stars from "./Elements/background";
import Footer from "./Elements/footer";

const App: React.FC = () => {
  // State to track dropdown visibility
  //const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  //const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      {/* need to figure out how to contain... */}
      <Stars />
      <Welcome />
      <Footer />
    </>
  );
};

export default App;
