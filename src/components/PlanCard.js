import React from "react";
import "../scss/components/_plan-card.scss";

const PlanCard = () => {
  return (
    <div className="plan-card">
      <div className="plan-type">
        <div className="light_bg__cycle"></div>
        <h2>basic plan</h2>
      </div>

      <div className="plan-description__container">
        <div className="price-details">
          <div className="price">50$</div>
          <div className="duration">per month</div>
        </div>
        <ul className="plan-details">
          <li>licenses</li>
          <li>foreign playlists</li>
        </ul>
        <button className="purple-btn card-btn">SIGN UP NOW</button>
      </div>
    </div>
  );
};

export default PlanCard;
