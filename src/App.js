import React from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import Playlist from "../Playlist/Playlist"

function App() {
  return (
    <div>
    <h1>Ja<span class="highlight">mmm</span>ing</h1>
    <div class="App">
     <SearchBar />
      <div class="App-playlist">
        <SearchResults></SearchResults>
        <Playlist></Playlist>
      </div>
    </div>
  </div>
  );
}

export default App;
