import React from "react";
import sateliteImg from "../assets/earhst.jpg";

const Banner2 = () => {
  return (
    <>
      <section className="bg-black  text-white pb-12">
        <div className=" ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mx-6 px-4">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                our Earth explore
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Sentinel-2
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              One of the prominent Earth observation satellites is "Sentinel-2", 
              part of the European Union's Copernicus program. It's tasked with capturing 
              high-resolution optical imagery of Earth's surface to monitor changes in land cover, vegetation health, agricultural productivity, 
              and natural disasters for environmental and societal benefit
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner2;