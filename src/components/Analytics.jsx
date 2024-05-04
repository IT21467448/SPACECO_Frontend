import React from 'react';
import mars6 from '../assets/mars6.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white  text-black py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
        <img className='w-[600px] mx-auto my-4' src={mars6} alt='/' />
        <div className='flex flex-col justify-center '>
          <p className='text-[#00df9a] font-bold '>TRAVEL TO THE MARS.</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'><span className='text-green-600'>SPACECO. </span>Observations related to Planet Mars</h1>
          <p>
          <span className='text-green-600'>SPACECO. </span>provides comprehensive data on Mars, including detailed maps,
           weather forecasts, geological surveys, and exploration updates. 
           Our platform offers insights into Martian habitats, potential colonization sites,
           and scientific discoveries, empowering users to immerse themselves in the Red Planet's mystique
            and prepare for future interplanetary endeavors
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Explore Mars</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;