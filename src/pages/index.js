import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { heroPage } from '../components/HeroSection/data';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutUs';
import { aboutPage } from '../components/AboutUs/data';
import ServicesSection from '../components/OurServices';
import { servicesPage } from '../components/OurServices/data';
import ClienteleSection from '../components/OurClientele';
import { clientelePage } from '../components/OurClientele/data';
import ContactUsSection from '../components/ContactUs';
import { contactUsPage } from '../components/ContactUs/data';
import FooterSection from '../components/Footer';
import { footerPage } from '../components/Footer/data';


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
        <ClienteleSection {...clientelePage} />
        <ContactUsSection  {...contactUsPage} />
        <FooterSection {...footerPage} />
    </>
  )
}

export default Home;