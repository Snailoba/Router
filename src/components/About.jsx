import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div pt={5}>
      <h1>This is Aboot page</h1>
      <button className="buttonLogin" onClick={navigateToHome}>
        Redirect
      </button>
    </div>
  );
}

export default About;
