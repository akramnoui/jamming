import React , {useState , useEffect} from 'react'
import './MainPage.css';

import Playlist from '../Playlist/Playlist';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';



export default function MainPage() {

    


    useEffect(()=> {

    })
  return (
    <div>
    <header>
       <nav class="navbar navbar-expand-lg navbar-dark "  >
         <div className='navbar-brand'>
          <div className="LogoContainer">
                  <img className="logo" src={require('./audio.png')} />

                  <h1 className="akramspotify">Akram <span className="highlight">Spotify</span></h1>

                </div> 
          </div>  
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <div className='navbar-text'>
            
            <div className="flex-container">
              <h2 className="pname">{this.state.userId}</h2>
              <img className="pp" src={this.state.imgurl} />
            </div>
          </div> 
        </div>
      </nav>
  


    
    </header>
           
     <div className="App">
       <SearchBar onSearch={this.search}/>
         <div className="App-playlist">
           <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}  />
           <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
         </div>
     </div>
   </div>
  )
}
