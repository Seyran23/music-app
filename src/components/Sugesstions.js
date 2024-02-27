import "../scss/components/_suggestions.scss";
import banner from "../images/sugesstion-banner.svg";

const Sugesstions = () => {
  return (
    <section className="sugesstions-sec">
      <div className="sugesstions-sec__banner">
        <img alt="banner" src={banner} />
      </div>
      <div className="sugesstions-sec__content">
        <h1>AI Generated Suggestions</h1>
        <h2>Quick And Effective</h2>
      </div>
    </section>
  )
}

export default Sugesstions