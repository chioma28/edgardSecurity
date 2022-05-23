import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { heroPage } from '../components/HeroSection/data';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutUs';
import { aboutPage } from '../components/AboutUs/data';
import ServicesSection from '../components/OurServices';
import { servicesPage } from '../components/OurServices/data';


const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection {...heroPage} />
        <AboutSection {...aboutPage} />
        <ServicesSection {...servicesPage} />
    </>
  )
}

export default Home;