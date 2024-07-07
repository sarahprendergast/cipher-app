import React from "react";
import styles from './Track.module.css';

function Track({addTrack, removeTrack}) {


  return (
      <div className={styles.Track}>
        <div className={styles["TrackInformation"]}>
          <h3 className="track">{props.name}</h3>
          <p className="artist">{props.artists}</p>
          <p className="album">{props.album}</p>
        </div>
        <button class="Track-action">

        </button>
      </div>
    );
}

export default Track;