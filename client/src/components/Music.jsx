
import React, { useEffect, useState } from 'react';
import { SlSocialSpotify } from "react-icons/sl";
import { Spotify } from 'react-spotify-embed';

function Music() {
    const [tracks, setTracks] = useState(null);

    // Fetches data from the server
    useEffect(() => {
    fetch('https://brendon-port-server-production.up.railway.app/api/dvddy') //! change to deplayed server url in production
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setTracks(data.tracks.slice(0, 5));
            console.log(data.tracks.slice(0,5)); // Log the data
        })
        .catch(error => console.error('Error:', error));  
    }, []);


    return (
        <div className='flex flex-col'>
            <div className='flex items-start'>
                <SlSocialSpotify size={32}/>
                <h2 className='text-2xl ml-1'>My Current Top Tracks:</h2>
            </div>
            {tracks && tracks.map((track, index) => (
              <div key={index} className='flex flex-row mt-2 drop-shadow-lg'>
                <Spotify wide link={track.external_urls.spotify} />
              </div>
            ))}
        </div>
      );
}

export default Music;