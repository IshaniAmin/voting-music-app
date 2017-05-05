import React, { Component } from 'react';
import './Song.css';
import SongForm from './SongForm';
import SpotifyView from './SpotifyView'
import {__loadSong, __loadSpotifyInformation} from '../lib/songService';
import AudioPlayer from './AudioPlayer';


import {
  Link
} from 'react-router-dom'

class Song extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // edit : false,
      // currentsong : "",
      // currentArtistName : "",
      spotifyData : []
    }

    //when you use arrow syntax for functions, es7 will autobind those functions to the component
      //so you don't need these lines here
    //--
    // this._handleEdit = this._handleEdit.bind(this);
    //--
  }

  componentDidMount() {
    __loadSong(this.props.match.params.id)
      .then(song => {
        __loadSpotifyInformation(song.artist, song.song)
          .then(spotifyData => this.setState({spotifyData}))
      })
  }

  // _handleEdit = (evt) => {
  //   evt.preventDefault();
  //   this.setState({edit : !this.state.edit});
  // }
 
  render() {
    // let displayEditForm = null;
    //  if (this.state.edit) {
    //   displayEditForm = <SongForm 
    //       song={this.state.currentsong || this.props.song}
    //       artist={this.state.currentArtistName || this.props.artist}
    //       handleSubmit={this.props.handleUpdate}
    //       edit={true}
    //       songId={this.props._id}
    //       cancelForm={this._handleEdit}
    //        />
    // }

    let urlToSongView = `/songs/${this.props._id}`;

    return (
      <div className="col-md-4">

        <div id="listSongs" className="song">

          { /* this.props.key */ } {/* Warning: Cat: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. */}

          <span className='delete-item'><a href='#' data-songid={this.props._id} onClick={this.props.handleRemove}>X</a></span>

          <Link exact to={urlToSongView}>SPOTIFY ME</Link>  

          <br />
                
          <strong>Artist:</strong> {this.props.artist} {/* better to use artist from props because state in this component doesn't reflect the artist from the database in mongo */}
          
          <br />
          
          <strong>Song:</strong> {this.props.song} {/* better to use song from props because state in this component doesn't reflect the song from the database in mongo */}
          
          <br />
          
          &nbsp;&nbsp;
          
          <span className='vote-item'><a href='#' data-songid={this.props._id} data-direction="up" onClick={this.props.handleVote}>/\</a></span>
          
          &nbsp;&nbsp;&nbsp;&nbsp;
          
          {this.props.votes}
          
          &nbsp;&nbsp;
          
          <span className='vote-item'><a href='#' data-songid={this.props._id} data-direction="down" onClick={this.props.handleVote}>\/</a></span>
          
          <div>
            <audio controls>
              <source src={this.props.previewLink} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
            
        </div>

      </div>
    );
  }
}

Song.propTypes = {
  songId: React.PropTypes.string.isRequired,
	artist: React.PropTypes.string.isRequired,
	song: React.PropTypes.string.isRequired,
}

export default Song;
