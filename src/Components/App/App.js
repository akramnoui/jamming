import React from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import Playlist from "../Playlist/Playlist"
import Spotify from "../../util/Spotify";


class App extends React.Component {

    constructor(props){
      super(props);
      this.state = {searchResults: [
        {name: 'name7', artist: 'artist7', id: 7, album: 'album7' }, {name: 'name2', artist: 'artist2', id: 2, album: 'album2' }, {name: 'name3', artist: 'artist3', id: 3, album: 'album3'}],
        playlistName: 'Running Tracks',
        playlistTracks: [
        {name: 'name1', artist: 'artist1', id: 1, album: 'album1' }, {name: 'nameB', artist: 'artistB', id: 5, album: 'albumB' }, {name: 'nameC', artist: 'artistC', id: 6, album: 'albumC'}]

    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }else{
      this.setState(state =>{
        const playlistTracks= [...state.playlistTracks , track];
        return {
            playlistTracks
        };
      })
      
    }
  }

  removeTrack(track){

    this.setState(state =>{
      const playlistTracks= state.playlistTracks.filter(tack =>{
        return track.id != tack.id
      });
      return {
          playlistTracks
      };
    })

  }


  updatePlaylistName(name1){
    this.setState({
      name: name1
    })
  }


  savePlaylist(){
    const trackURIs = this.state.playlistName.map(track =>
      track.uri)
      Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
        this.setState({
          playlistName: "New Playlist",
          playlistTracks: []
        });
      });
  }

  search(term){
    Spotify.search(term).then(searchResults => {
      this.setState({ searchResults: searchResults });
    });
  }




  render() {
    return (
     <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
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

