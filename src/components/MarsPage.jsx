import React, { useEffect, useState } from 'react';

const MarsPage = () => {
    const [roverData, setRoverData] = useState(null);

    useEffect(() => {
        const fetchRoverData = async () => {
            try {
                const response = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2024-1-15&api_key=J1e8btYzf3eOi58dSP7X43k5puQJbVFRKT58NzVc");
                const data = await response.json();
                setRoverData(data);
            } catch (error) {
                console.error('Error fetching rover data:', error);
            }
        };

        fetchRoverData();
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold text-center mb-8">Mars Photos</h1>
            {roverData && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Rover Information</h2>
                        <ul className="list-disc pl-4">
                            <li>Name: {roverData.photos[0].rover.name}</li>
                            <li>Launch Date: {roverData.photos[0].rover.launch_date}</li>
                            <li>Landing Date: {roverData.photos[0].rover.landing_date}</li>
                            <li>Status: {roverData.photos[0].rover.status}</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Photos Taken on {roverData.photos[0].earth_date}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {roverData.photos.map(photo => (
                                <div key={photo.id} className="border border-gray-200 rounded-lg overflow-hidden">
                                    <img src={photo.img_src} alt={`Mars Photo ${photo.id}`} className="w-full h-auto" />
                                    <div className="p-4">
                                        <p className="text-sm">Camera: {photo.camera.full_name}</p>
                                        <p className="text-sm">Sol: {photo.sol}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MarsPage;
