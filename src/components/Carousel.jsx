import React, { useState, useEffect } from 'react';

const NasaApod = () => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=XKPRidO4DKaJYUyi54gJp8IxuXmJOugbZcAKKYLB')
      .then(response => response.json())
      .then(data => setApodData(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <>
    

<div className='w-full bg-white  text-black py-16 px-4'>
<h1 className="text-3xl font-semibold text-center text-green-600 mb-4">Astronomy Picture Of the Day</h1>
<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
  {apodData ? (
  <img className='w-[500px] mx-auto my-4' src={apodData.url} alt={apodData.title} />
  ):(
    <p className="text-center text-gray-600">Loading...</p>
  )}
  {apodData && (
  <div className='flex flex-col justify-center'>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{apodData.title}</h2>
              <p className="text-blue-700 text-base mb-4">{apodData.explanation}</p>
              <p className="text-gray-600">Date: {apodData.date}</p>
              <p className="text-gray-600">Copyright: {apodData.copyright}</p>
   
  </div>)}
</div>
</div>
</>
  );
};

export default NasaApod;
/*
<div className="flex flex-col md:flex-row justify-center items-center ">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">Astronomy Picture Of the Day</h1>
        {apodData ? (
          <div className="max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={apodData.url} alt={apodData.title} className="w-full h-auto" />
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading...</p>
        )}
      </div>
      <div className="w-full md:w-1/2 p-4">
        {apodData && (
          <div className="max-w-lg rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{apodData.title}</h2>
              <p className="text-gray-700 text-base mb-4">{apodData.explanation}</p>
              <p className="text-gray-600">Date: {apodData.date}</p>
              <p className="text-gray-600">Copyright: {apodData.copyright}</p>
            </div>
          </div>
        )}
      </div>
    </div>
    */
