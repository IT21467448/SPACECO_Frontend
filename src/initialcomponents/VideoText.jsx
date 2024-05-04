import React from "react";
import {Link} from "react-router-dom";
import MountainPng from "../assets/moon-surface-hd.png";

const VideoText = () => {
  return (
    <div className=" bg-black/20 h-[700px]">
      <div className="h-[700px] flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold">
              ORBIT THE EARTH & TRAVEL TO MARS
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
            SPACECO. pioneers the frontier of space exploration, 
            specializing in comprehensive travel information for Mars and Earth.
            We provide cutting-edge insights, guides, and resources for aspiring space travelers,
            from celestial itineraries to planetary accommodations.
             Join us as we navigate the cosmos, bridging the gap between Earth and the Red Planet.
            </p>
            <Link to="/register">
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-blue-400 text-white hover:bg-blue-500 px-6 py-4 rounded-md duration-200"
            >
              GET STARTED
            </button>
            </Link>
           
          </div>
          <div></div>
        </div>
      </div>
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />

     
    </div>
  );
};

export default VideoText;