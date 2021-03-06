import React, { Component } from 'react';
import './addSong.css';
import SongForm from './SongForm.js';
import {__loadSpotifyInformation} from '../lib/songService';
import SpotifyView from './SpotifyView'


// import SongView from './SongView.js';
// import SpotifyView from './SpotifyView'


class addSong extends Component {

	constructor() {
	  super();

    this.state = {
      song: '',
      artist: '',
      spotifyData: []
    };

	  //when you use arrow syntax for functions, es7 will autobind those functions to the component
	    //so you don't need these lines here
	  //--
	  this._handleSubmit = this._handleSubmit.bind(this);

	}

  _handleSubmit = (evt) => {
    evt.preventDefault();
    // __createSong(newSong)
    //   .then((savedSong) => { //we do this because the savedSong will have an _id while newSong won't 
    //     let songsUpdated = [...this.state.songs, savedSong];

    //     const songs = songsUpdated.sort(function(a, b) {
    //       return b.votes - a.votes;
    //     });

    //     this.setState({
    //       songs
    //     });
    //   })

    this.setState({
      song: evt.target.children[1].value,
      artist: evt.target.children[0].value
    }, function(){
      __loadSpotifyInformation(this.state.artist, this.state.song)
        .then(spotifyData => this.setState({spotifyData}));   
    });
  }

  render() {
    return (

      <div>

	    <center>
	    	<h1 id="header">Add Song Page</h1>
	    </center>

	    <center>
	        <SongForm 
	          handleSubmit={this._handleSubmit} 
	          edit={false}
	           />
	        <br /><br />
	    </center>

	    <div>
        {this.state.spotifyData.map((song, index) => <SpotifyView key={index} {...song} />)}
        { console.log( this.state.spotifyData ) }
	    </div>

       

      </div>
      
    );
  }
}

export default addSong;