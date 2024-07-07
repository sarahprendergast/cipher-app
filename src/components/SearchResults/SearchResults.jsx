import React from "react";
import TrackList from "../TrackList/TrackList";
import styles from './SearchResults.module.css';

function SearchResults () {

  //This component should display the results from a search query.
    return (
        <div className={styles.SearchResults}>
       <TrackList userSearchResults={searchResults}/>
      </div>
        );
}

export default SearchResults;