import React from "react";
import UiLanding from "./ui";
import logo from "../../assets/images/logo.svg";
import main from "../../assets/images/main.svg";

const Landing = () => {
  return (
    <UiLanding>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Sit eiusmod aliqua excepteur irure incididunt. Sunt sint incididunt
            in in sunt nulla. Minim dolor incididunt dolor sint proident.
          </p>
          <button className="btn btn-hero">Login Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </UiLanding>
  );
};

export default Landing;
