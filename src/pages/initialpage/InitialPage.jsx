import React from 'react'
import Navbar from '../../initialcomponents/Navbar';
import Services from '../../initialcomponents/Services';
import VideoText from '../../initialcomponents/VideoText';
import BgVideo from "../../assets/earth-bg.mp4";
import About from '../../initialcomponents/About';
import Product from '../../initialcomponents/Product';
import Footer from '../../initialcomponents/Footer';
import Testimonial from '../../initialcomponents/Testimonial';
import ContactUs from '../../initialcomponents/ContacUs';
const InitialPage = () => {
  return (
    <div>
    <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <VideoText/>
        </div>
        <About/>
    <Services/>
    
    <Testimonial/>
    <Product/>
    <ContactUs />
    <Footer/>
    </div>
  )
}

export default InitialPage;