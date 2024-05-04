import React from 'react';
import mars5 from '../assets/mars5.jpeg';
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Product = () => {
  return (
    <>
    <div className='w-full bg-white  text-black py-16 px-4' id="product">
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
        <img className='w-[600px] mx-auto my-4' src={mars5} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>OUR PRODUT TOWARDS THE PUBLIC.</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Be A part of <span className='text-green-600'>SPACECO. </span> Brands </h1>
          <p>
          <span className='text-green-600'>SPACECO. </span>offers a diverse range of products tailored for space enthusiasts.
           From advanced space travel guides and virtual reality experiences to Mars exploration kits 
           and celestial-themed merchandise, our products inspire and equip adventurers to embark 
           on their cosmic journeys with confidence and excitement. Explore the universe with <span className='text-green-600'>SPACECO. </span>today.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Our Products</button>
        </div>
      </div>
    </div>
    <div className="bg-black">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap text-green-600">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2 text-orange-400">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Product;
