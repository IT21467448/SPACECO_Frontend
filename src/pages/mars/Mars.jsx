import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MarsPhotos from '../../components/MarsPhotos';
import BgVideo from "../../assets/marsv.mp4";
import MarsInfo from '../../components/MarsInfo';
const Mars = () => {
  return (
    <div>
         <div className="h-[500px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[500px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        
        </div>
        <MarsInfo />
        <MarsPhotos />
        <Footer />
    </div>
  )
}

export default Mars