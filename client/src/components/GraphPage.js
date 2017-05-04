import React, { Component } from 'react';
import './GraphPage.css';
import Graph from './Graph.js';


import VotesForGraph from '../components/VotesForGraph';

import {__loadSongs, __voteOnSong } from '../lib/songService';


class GraphPage extends Component {

	constructor() {
	    super();
	    
	    this.state = {
	      songs : [],
	    }
	}

	componentDidMount() {
	  __loadSongs()
	    .then(songs => this.setState({songs}))
	}

	_handleVote = (evt) => {
	  evt.preventDefault();

	  let songId = evt.target.getAttribute("data-songid");
	  let direction = evt.target.getAttribute("data-direction");

	  let songsInState = this.state.songs;

	  __voteOnSong(songId, direction).then((song) => {
	    //this will return a new array of : [1, 2, 99, 4, 5]
	      //[1,2,3,4,5].map((a) => (a == 3) ? 99 : a);
	    let songsUpdated = songsInState.map((sng) => {
	      return (sng._id === song._id) ? song : sng
	    });

	    const songs = songsUpdated.sort(function(a, b) {
	      return b.votes - a.votes;
	    });

	    this.setState({
	      songs
	    })
	  });
	}

  render() {
    return (
      <div>

      	<center>
	      	<h1 id="header">Graph Page</h1>
        </center>

        <ul>
          {this.state.songs.map((song, ind) => <VotesForGraph 

            song={song.song} 
            votes={song.votes}

            />)}
        </ul>

        <Graph />

      </div>
    );
  }
}

export default GraphPage;