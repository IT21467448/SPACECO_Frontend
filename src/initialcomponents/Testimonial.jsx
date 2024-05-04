import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className=" tracking-wide bg-black mt-0" id="testimonial">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center pt-16 ">
      <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          What People are saying
        </span>
     
      </h2>
      <h3 className="text-3xl sm:text-5xl lg:text-6xl text-center pt-6 text-green-600">
        SPACECO.
      </h3>
      <div className="flex flex-wrap justify-center py-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-gray-600 rounded-md p-6 text-md border border-neutral-800 font-thin  text-orange-600">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6 className="text-white">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-green-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
