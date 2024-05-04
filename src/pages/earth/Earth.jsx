import React from 'react';
import BgVideo from "../../assets/space.mp4";
import Navbar from '../../components/Navbar';
import VideoText from '../../components/VideoText';
import Distance from '../../components/Distance';
import Banner from '../../components/Banner';
import Banner2 from '../../components/Banner2';
import Footer from '../../components/Footer';

const Resources = () => {
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
        <VideoText />
    
        </div>
        <Distance />
        <Banner />
        <Banner2 />
        <Footer />
        
    </div>
  )
}

export default Resources;