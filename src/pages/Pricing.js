import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChoosePlan from '../components/ChoosePlan';
import TakeQuiz from '../components/TakeQuiz';



const Pricing = () => {
  return (
    <>
        <Navbar activePage="pricing" />
        <ChoosePlan />
        <TakeQuiz />
        <Footer />
    </>
  )
}

export default Pricing