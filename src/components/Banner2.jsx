import React from "react";
import sateliteImg from "../assets/satelite2.jpg";

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
                our Earth mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                EarthWatch
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              The satellite "EarthWatch" is responsible for monitoring various Earth phenomena,
               including weather patterns, environmental changes, natural disasters, and human activities.
                Equipped with advanced sensors and imaging technology, EarthWatch provides crucial data
                 for climate research, disaster management, urban planning, and environmental conservation efforts worldwide.
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