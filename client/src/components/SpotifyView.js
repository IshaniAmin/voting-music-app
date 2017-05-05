import React, { Component } from 'react'
import './SpotifyView.css';

import RadioButtons from './RadioButtons.js';

class SpotifyView extends Component {
	constructor(props) {
	  super(props);

	  this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleSubmit = (evt) => {
	  evt.preventDefault();

	  debugger;

	  console.log(this.props.song, this.props.artist, this.props.previewSong, this.props.album)
	  // let newSong = {artist: evt.target.children[0].value, song: evt.target.children[1].value, votes: 0};

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
	}

	render() {
		return (

		  <div className="SpotifyView">

			<center>

			  	<RadioButtons {...this.props} handleSubmit={this._handleSubmit} /> 

			  	<br />

			  	<p><strong>Artist:</strong> {this.props.artist}</p>
			  	<p><strong>Song:</strong> {this.props.song}</p>
			  	<p><strong>Album:</strong> {this.props.album}</p>

			  	
			  	<audio controls>
			  		<source src={this.props.previewSong} type="audio/mpeg" />
			  		Your browser does not support the audio element.
			  	</audio>

			</center>


		  </div>
		);
	}
}

export default SpotifyView;