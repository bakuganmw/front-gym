import React from 'react'
import NavbarCom from '../components/NavbarCom/indeks';
import HeroSection from '../components/HeroSection/indeks';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const MainPage = () => {
  return (
    <div>
        <NavbarCom></NavbarCom>
        <HeroSection></HeroSection>
    </div>
  )
}

export default MainPage