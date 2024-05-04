import React from 'react';
import marsf from "../assets/marsf.jpeg";

const MarsInfo = () => {
  return (
    <div className='w-full bg-white  text-black py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
        <img className='w-[600px] mx-auto my-4' src={marsf} alt='/' />
        <div className='flex flex-col justify-center '>
          <p className='text-[#00df9a] font-bold '>SEE THE BEAUTY OF WORLD OF MARS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>An Exiciting News from World of Mars</h1>
          <p>
          Recent findings from Mars indicate the presence of subsurface lakes
           beneath its polar ice caps, bolstering the possibility of microbial life.
            Additionally, NASA's Perseverance rover detected organic molecules in Martian rocks,
             hinting at past habitable conditions. These discoveries fuel excitement
              and deepen our understanding of the Red Planet's potential for life.</p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Explore More...</button>
        </div>
      </div>
    </div>
  );
};

export default MarsInfo;