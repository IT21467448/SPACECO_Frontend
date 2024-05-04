import React from 'react';

import earth1 from '../assets/earth1.jpeg';
import mars1 from '../assets/mars1.jpeg';
import mars2 from '../assets/mars2.jpeg';
import mars3 from '../assets/mars3.jpeg';
import mars4 from '../assets/mars4.jpeg';

const Services = () => {
  return (
    <div className='bg-black text-white md:px-14 px-4 py-16 max-w-screen-2xl mx-auto ' id='service'>
        <div className='text-center my-8'>
            <h1 className='font-bold text-green-600'>Our Services</h1>
            <h2 className='text-orange-400'>We are the monarch of field of Astronomy</h2>
            <p>
            <span className='text-green-600'>SPACECO.</span> offers a galaxy of services tailored for intrepid adventurers and space
             enthusiasts alike.  <span className='text-blue-400'>we cater to every cosmic dream. Our comprehensive
              platform provides in-depth information, expert guidance, and exclusive access to the latest 
              advancements in space travel technology. Whether you're a seasoned astronaut or a curious 
              stargazer</span>, SPACECO is your ultimate destination for unlocking the wonders of the universe
               and making your celestial journey truly unforgettable.
            </p>
            <div className='ml-8 my-12 mx- 8 flex flex-wrap justify-between items-center gap-6'>
                <img className='h-[250px] w-[250px]' src={mars1} alt="Satelite Image"/>
                <img  className='h-[250px] w-[250px]'src={mars2} alt="Satelite Image"/>
                <img  className='h-[250px] w-[250px]'src={mars3} alt="Satelite Image"/>
                <img  className='h-[250px] w-[250px]'src={mars4} alt="Satelite Image"/>
              
            </div>
        </div>
        <div className='w-full bg-white  text-black'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={earth1} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>OUR SPACE TRAVELS WITH NASA</h1>
          <p>
          <span className='text-green-600'>SPACECO.</span> is at the forefront of space travel, offering unparalleled expertise and resources 
          for those embarking on interplanetary journeys. From Mars expeditions to Earth-based cosmic adventures,
           we provide comprehensive guidance, curated experiences, and access to cutting-edge technology, 
           making space exploration accessible to all. Welcome aboard the future of travel.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Travel Around Space</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Services;