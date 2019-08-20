import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

const tracks = [{name: 'I Am The Walrus', album: 'The White Album', artist: 'The Beatles', id: 1},
                {name: 'Yellow Submarine', album: 'Revolver', artist: 'The Beatles', id: 2},
                {name: 'Think of England', album: 'Islands', artist: 'Bears Den', id: 3}];

const playlistName = "Steve's Play List";
let playlistTracks = [{name: 'I Am The Walrus', album: 'The White Album', artist: 'The Beatles', id: 1},
{name: 'Yellow Submarine', album: 'Revolver', artist: 'The Beatles', id: 2}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchResults: tracks, playlistName: playlistName, playlistTracks:playlistTracks};
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    console.log(`adding the track: ${track.id}`)
    if(this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
      return
    }
    playlistTracks.push(track);
    this.setState({playlistTracks: playlistTracks})

  }
  removeTrack(track) {
    console.log(`Removing track: ${track.id}`);
    playlistTracks = playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({playlistTracks: playlistTracks});

  }

  render() {
console.log(`From App: ${this.state.searchResults}`);
    return (
      <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
              <Playlist onRemove= {this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
            </div>
        </div>
      </div>
    );

  }

}

export default App;
