import "../scss/components/_whyus.scss";

const WhyUs = () => {
  return (
    <section className="why-us__sec">
      <div className="why-us__sec-content">
        <h1>Why Us?</h1>
        <p>
          Innovative Solution <br /> For Modern Problems
        </p>
      </div>

      <div className="bg-container">
        <div className="btn-container">
          <button className="transparent-btn">view our pricing</button>
          <button className="purple-btn">get started</button>
        </div>

        <div className="light-bg__cycle"></div>
      </div>
    </section>
  );
};

export default WhyUs;
