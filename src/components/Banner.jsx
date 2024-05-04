import React from "react";
import sateliteImg from "../assets/satelite1.jpg";

const Banner = () => {
  return (
    <>
      <section className="bg-black  text-white pb-12 ">
        <div className=" ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mx-4 px-4">
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
                our Mass Journey
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Red Horizon
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              The satellite "Red Horizon" is tasked with monitoring Mars' atmosphere and
               surface conditions, including weather patterns, atmospheric composition, and geological changes.
                Equipped with advanced sensors and imaging technology, Red Horizon provides vital data 
               for ongoing research and future missions to the Red Planet.
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

export default Banner;