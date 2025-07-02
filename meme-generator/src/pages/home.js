import React from 'react';
import MemeCard from '../components/memecard';
import { useState, useEffect } from 'react';
import { getAllMemes } from '../api/memes' 

const Home = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        // Fetch memes from the API
        getAllMemes().then(memes => setData(memes.data.memes))
    }
    , []);

    return (
        <div className='row'>
            {data.map((meme) => (
                <MemeCard
                    img={meme.url}
                    title={meme.name}
                />
            ))}
        </div>
    );
}

export default Home;