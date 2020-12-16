import SongList from '../components/SongList';
import {useState, useEffect} from 'react';
import Song from '../components/Song';

const SongBox = () => {

    const[songs, setSongs] = useState(null);

    const getSongs = () => {
        console.log("getting songs....");
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`).then((res)=>{
            return res.json();
        }).then((data)=>{
            setSongs(data);
        })
    };

    useEffect(()=>{
        getSongs();
    },[])

    return (
        <>
            <h1> TOP 20 SONGS </h1>
            <SongList songs ={songs}/>
            
        </>
    );
};

export default SongBox;