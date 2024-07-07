import React, { useState, useCallback } from 'react'
import styles from "./App.module.css";
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from "../../util/Spotify";


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  
  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = (props) => {
    
  }

  const removeTrack = useCallback((props) => {

  });


  return (
    <div>
    <h1 className={styles.h1}>
      Cipher
    </h1>
    <div className={styles.App}>
      <SearchBar onSearch={search} />
      <div className={styles.App["Playlist"]}>
        <SearchResults search={searchResults}/>
        <Playlist />
      </div>
    </div>
  </div>
    );
}

export default App;

