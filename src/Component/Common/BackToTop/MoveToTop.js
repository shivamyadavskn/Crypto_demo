import React, { useState, useEffect } from "react";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import "./styles.css";

function MoveToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`top-btn ${isVisible ? "visible" : ""}`}
      onClick={topFunction}
    >
      <NorthRoundedIcon className="top-icon" sx={{ fontSize: "2rem" }} />
    </div>
  );
}

export default MoveToTopButton;
