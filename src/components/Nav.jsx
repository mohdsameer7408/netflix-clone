import React, { useEffect, useState } from "react";
import "../assets/css/Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="netflix"
      />
      <img
        className="nav_avatar"
        src="https://as2.ftcdn.net/jpg/02/64/43/05/500_F_264430586_gTDCNNUcX7PaBiAlWFpfHVhp87BkJMwp.jpg"
        alt="netflix"
      />
    </div>
  );
}

export default Nav;
