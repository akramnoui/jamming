import React from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';
import profile from './profile.png';
import { Navbar } from 'react-bootstrap';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: [] , 
      imgurl: profile , 
      userId:'Login'
    };

    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }  
  componentDidMount(){
    Spotify.fetchuser().then(result =>{


      if (result.images.length !== 0){
    
      this.setState({
        userId: result.display_name ,
        imgurl: result.images[0].url
        
      })
    }else{

        this.setState({
          userId: result.display_name ,
          
        })

    }

    })
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      
      this.setState({searchResults: searchResults , 
      //  imgurl: user.imgurl,
      // userId: user.userId
      });
      
      
    
      
    });
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  }

  render() {
    return (
      <div>
      <header>
        <Navbar bg="red" expand="lg">
            <Navbar.Brand href="#home">
              <div className="LogoContainer">
                <img className="logo" src={require('./audio.png')} />

                <h1 className="akramspotify">Akram <span className="highlight">Spotify</span></h1>

              </div>
           
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <nav class="navbar navbar-light" >
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#">Features</a>
                    <a class="nav-item nav-link" href="#">Pricing</a>
                    <a class="nav-item nav-link disabled" href="#">Disabled</a>
                  </div>
                </div>
              </nav>
              
            </Navbar.Collapse>
        </Navbar>
    
      <div className='MainHeader'>
   
      <div className="flex-container">
        <h2 className="pname">{this.state.userId}</h2>
        <img className="pp" src={this.state.imgurl} />
      </div>
      </div>

      
      </header>
             
       <div className="App">
         <SearchBar onSearch={this.search}/>
           <div className="App-playlist">
             <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}  />
             <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
           </div>
       </div>
     </div>
    );
  }
}

export default App;
