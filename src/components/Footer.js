import React from 'react';
import "../scss/components/_footer.scss";
import footerLogo from "../images/footer-logo.svg";

const Footer = (props) => {
  return (
    <footer className='footer'>
        <div className='footer-logo__container'>
            <img alt='footer-logo' src={footerLogo} />
        </div>
        < div className='footer__content-container'>


            <ul className='content-list'>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Email</a></li>
                <li><a href='#'>LinkedIn</a></li>
                <li><a href='#'>Instagram</a></li>
                <li><a href='#'>Twitter</a></li>
            </ul>
            <ul className='content-list'>
                <li><a href='#'>Pricing</a></li>
                <li><a href='#'>Email</a></li>
                <li><a href='#'>LinkedIn</a></li>
                <li><a href='#'>Instagram</a></li>
                <li><a href='#'>Twitter</a></li>
            </ul>
            <ul className='content-list'>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Email</a></li>
                <li><a href='#'>LinkedIn</a></li>
                <li><a href='#'>Instagram</a></li>
                <li><a href='#'>Twitter</a></li>
            </ul>
            <ul className='content-list'>
                <li><a href="#">Log In</a></li>
            </ul>
            
        </div>

       {props.backgroundCycle && <div className='bg-cycle footer-blue-cycle'></div>} 
    </footer>
  )
}

export default Footer