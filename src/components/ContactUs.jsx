import React from 'react'
import rocket from "../assets/rocket.jpeg"

const ContactUs = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      class="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 "
    >
      <div class="flex flex-col justify-center p-8 md:p-14 ">
        <span class="mb-3 text-4xl font-bold">Hi, Aliiens Contact Us SPACECO.</span>
        <span class="font-light text-gray-400 mb-8">
          Welcom back! Please enter your details
        </span>
        <div class="py-4">
          <span class="mb-2 text-md">Email</span>
          <input
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            name="email"
            id="email"
          />
        </div>
        <div class="py-4">
          <span class="mb-2 text-md">Message to SPACECO.</span>
          <textarea
            type="password"
            name="pass"
            placeholder='Type your concern towards the SPACECO..'
            id="pass"
            class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
          />
        </div>
        <div class="flex justify-between w-full py-4">
            <div class="mr-24">
              <input type="checkbox" name="ch" id="ch" class="mr-2" />
              <span class="text-md">Agreed to company Rules and Regulations</span>
            </div>
           
          </div>
        
        <button
          class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
        >
          Submit
        </button>
        </div>
      
      <div class="relative">
        <img
          src={rocket}
          alt="img"
          class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
        />
        
        <div
          class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
        >
          <span class="text-white text-xl"
            >We've been uesing Untitle to kick"<br />start every new project
            and can't <br />imagine working without it."
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactUs;