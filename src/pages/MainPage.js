import React from 'react'
import NavbarCom from '../components/NavbarCom/indeks';
import HeroSection from '../components/HeroSection/indeks';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import Map from '../components/ContactSection/Map'
const MainPage = () => {
  return (
    <div>
        <NavbarCom></NavbarCom>
        <HeroSection></HeroSection>
        <PricingSection></PricingSection>
        <ContactSection></ContactSection>
        <Map></Map>
    </div>
  )
}

export default MainPage