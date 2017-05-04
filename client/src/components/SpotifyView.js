import React, { Component } from 'react'
import './SpotifyView.css';

import RadioButtons from './RadioButtons.js';

class SpotifyView extends Component {
	render() {
		return (

		  <div className="SpotifyView">

			<center>

			  	<RadioButtons value={this.props.song} /> 

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