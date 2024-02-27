import React from "react";
import "../scss/components/_choose-plan.scss";
import PlanCard from "./PlanCard";

const ChoosePlan = () => {
  return (
    <section className="choose-plan__sec">
      <h1 className="choose-plan__sec-title">Choose Your Plan!</h1>
      <div className="plan-card__container">
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </div>
    </section>
  );
};

export default ChoosePlan;
