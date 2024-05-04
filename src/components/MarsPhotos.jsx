/*import React, { useState } from 'react';

const NASA_API_KEY = 'J1e8btYzf3eOi58dSP7X43k5puQJbVFRKT58NzVc';

const MarsPhotos = () => {
  const [date, setDate] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${NASA_API_KEY}`);
      const data = await response.json();
      setPhotos(data.photos);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container mx-auto py-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Mars Rover Photos</h1>
      <div className="flex justify-center mb-4">
        <input
          type="date"
          className="border border-gray-300 rounded px-4 py-2 mr-2"
          value={date}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={fetchData}
        >
          Fetch Photos
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos && photos.map((photo) => (
  <div key={photo.id} className="border border-gray-300 p-4 rounded">
    <img src={photo.img_src} alt={`Mars photo ${photo.id}`} className="w-full h-auto" />
    <p className="text-sm mt-2">
      Date: {photo.earth_date}, Sol: {photo.sol}
    </p>
  </div>
))}

      </div>
    </div>
  );
};

export default MarsPhotos;*/
import React, { useState } from 'react';


const NASA_API_KEY = 'J1e8btYzf3eOi58dSP7X43k5puQJbVFRKT58NzVc';

const MarsPhotos = () => {
  const [date, setDate] = useState('');
  const [photos, setPhotos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${NASA_API_KEY}`);
      const data = await response.json();

      if (data.photos.length === 0) {
        setErrorMessage('No photos available for the selected date.');
      } else {
        setPhotos(data.photos);
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('Error fetching data. Please try again later.');
    }
  };

  return (
    <div className=" py-8 bg-black text-white w-full relative">
      <h1 className="text-3xl font-bold mb-4 text-center">Mars Rover Photos</h1>
      <div className="flex justify-center mb-4">
        <input
          type="date"
          className="border border-gray-300 rounded px-4 py-2 mr-2"
          value={date}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={fetchData}
        >
          Fetch Photos
        </button>
      </div>
      {errorMessage && (
        <div className="text-red-500 text-center">{errorMessage}</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="border border-gray-300 p-4 rounded">
            <img src={photo.img_src} alt={`Mars photo ${photo.id}`} className="w-full h-auto" />
            <p className="text-sm mt-2">
              Date: {photo.earth_date}, Sol: {photo.sol}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarsPhotos;

