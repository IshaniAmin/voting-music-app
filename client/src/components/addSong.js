import React, { Component } from 'react';
import './addSong.css';
import SongForm from './SongForm.js';
import {__createSong} from '../lib/songService';

import SongView from './SongView.js';


class addSong extends Component {

	constructor() {
	  super();

	  //when you use arrow syntax for functions, es7 will autobind those functions to the component
	    //so you don't need these lines here
	  //--
	  this._handleSubmit = this._handleSubmit.bind(this);

	}

  _handleSubmit = (evt) => {
    evt.preventDefault();

    let newSong = {song: evt.target.children[1].value, votes: 0, artist: evt.target.children[0].value,};

    __createSong(newSong)
      .then((savedSong) => { //we do this because the savedSong will have an _id while newSong won't 
        let songsUpdated = [...this.state.songs, savedSong];

        const songs = songsUpdated.sort(function(a, b) {
          return b.votes - a.votes;
        });

        this.setState({
          songs
        });
      })
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

       

      </div>
      
    );
  }
}

export default addSong;