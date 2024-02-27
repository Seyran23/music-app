import React from "react";
import "../scss/components/_trial.scss";
import backImg from "../images/trial-bckg.svg";

const Trial = () => {
  return (
    <section className="trial-sec">
      <div className="trial-sec__content">
        <div className="img-container">
          <img alt="trial" src={backImg} />
        </div>

        <div className="trial-sec__content-text">
          <h1>Dive Into The <br/> Music World</h1>
          <p>
            Attract more clients to your cafe with out <br/> music, get licensed songs
          </p>
        </div>
      </div>

      <div className="btn-container">
        <button className="purple-btn">try for free</button>
        <button className="transparent-btn">subscribe</button>
      </div>
    </section>
  );
};

export default Trial;
