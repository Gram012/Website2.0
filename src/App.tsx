import React from "react";
import "./Space.css";
import Welcome from "./Features/welcome";
import Stars from "./Features/background";
import Footer from "./Features/footer";

const App: React.FC = () => {
  // State to track dropdown visibility
  //const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  //const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <Stars />
      <Welcome />
      <Footer />
    </>
  );
};

export default App;
