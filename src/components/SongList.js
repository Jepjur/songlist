import React, { useState } from 'react';
import {v4} from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'And I\'m Home', id: 1 },
        { title: 'Rolling Girl', id: 2 },
        { title: 'Omega Rhythm', id: 3 }
    ]);

    /* Create a new array by taking SongList and adding a new array element
    */
    const addSong = (title) => {
        setSongs([...songs, {title, id: v4()}]);
    }
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}>{song.title}</li>);
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>
     );
}
 
export default SongList;
