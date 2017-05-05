import React, { Component } from 'react'
import './SpotifyView.css';
import { __createSong } from '../lib/songService';


import RadioButtons from './RadioButtons.js';

class SpotifyView extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	    songs : [],
	  }

	  this._handleSubmit = this._handleSubmit.bind(this);
	}

	// componentDidMount() {
	//   __loadSongs()
	//     .then(songs => this.setState({songs}))
	// }

	_handleSubmit = (evt) => {
	  evt.preventDefault();

	  debugger;

	  console.log(this.props)

	  let newSong = {
	  	song: this.props.song, 
	  	artist: this.props.artist,
	  	album: this.props.album, 
	  	previewLink: this.props.previewSong,  
	  	votes: 0
	  };

	  __createSong(newSong)
	    .then((savedSong) => { //we do this because the savedSong will have an _id while newSong won't 
	      let songsUpdated = [...this.state.songs, savedSong];

	      });

	      // this.setState({
	      //   songs
	      // });

	  // });

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