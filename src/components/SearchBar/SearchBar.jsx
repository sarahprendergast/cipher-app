import React from "react";
import styles from './SearchBar.module.css';

function SearchBar () {

  //This component should render a search input and handle user input.
    return (
        <div className={styles.SearchBar}>
        <input 
          placeholder="Enter A Song, Album, or Artist"
        />
        <button className={styles.SearchButton} >
          SEARCH
        </button>
      </div>
        );
}

export default SearchBar;