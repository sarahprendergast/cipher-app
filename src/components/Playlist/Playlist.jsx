import React from "react";
import TrackList from "../TrackList/TrackList";
import styles from './Playlist.module.css';

function Playlist() {

  //This component should display the playlist and handle adding/removing tracks.
  return (
    <div className={styles.Playlist}>
      <input className={styles.Playlist.input} type="text" defaultValue={"New Playlist"} />
      <TrackList />
      <button onClick= className={styles["Playlist-save"]}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;