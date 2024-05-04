/*import React from 'react';
import sateliteImg from "../assets/satelite1.jpg";

const About = () => {
  return (
    <div className='bg-black text-white' id='about'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 '>
            <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                <img src={sateliteImg} alt="Satelite Image"/>
                </div>
                <div>
                    <h2 className='font-semibold'>Hello Space</h2>
                    <p>A satellite is an object in space that orbits or circles<br/> 
                        around a bigger object. There are two kinds of satellites: <br/>
                        natural (such as the moon orbiting the Earth) or artificial<br/>
                         (such as the International Space Station orbiting the Earth).</p>
                         <button className='bg-green-600'>Learn More</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About;*/
import BgVideo from "../assets/marsv.mp4";
import BgVideo1 from "../assets/space.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center bg-white w-full" id="about">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <span className="text-green-600">SPACECO.</span> Explorations towards
        <br/>
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
           Our ALiens Community.
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      SPACECO pioneers space travel, offering expert guidance, curated experiences, 
      and cutting-edge resources for Mars and Earth exploration enthusiasts worldwide.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={BgVideo1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;