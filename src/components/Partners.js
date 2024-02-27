import "../scss/components/_partners.scss";

import techCrunch from "../images/tech.svg";
import fastComp from "../images/fast-comp.svg";
import mit from "../images/mit.svg";
import forbes from "../images/forbes.svg";

const Partners = () => {
  return (
    <section className='partners-sec'>
        <h1 className="partners-sec__title">OUR PARTNERS</h1>
        <div className='partners-container'>
            <img alt='partner' src={techCrunch}/>
            <img alt='partner' src={fastComp}/>
            <img alt='partner' src={mit}/>
            <img alt='partner' src={forbes}/>
        </div>

    </section>
  )
}

export default Partners