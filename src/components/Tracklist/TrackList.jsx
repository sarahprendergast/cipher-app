import React from "react";
import styles from './TrackList.module.css'
import Track from "../Track/Track";


const TrackList = ({addTrack, removeTrack}) => {
    return (
        <div className={styles.TrackList}>
          {props.tracks.map((track) => {
            return (
              <Track 
              track={track}
              />
            );
          })}
        </div>
    );
};

export default TrackList;