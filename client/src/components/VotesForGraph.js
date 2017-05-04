import React, { Component } from 'react';
// import SongForm from './SongForm';
import {
  Link
} from 'react-router-dom'

class VotesForGraph extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   edit : false,
    //   currentsong : "",
    //   currentArtistName : ""
    // }

    //when you use arrow syntax for functions, es7 will autobind those functions to the component
      //so you don't need these lines here
    //--
    // this._handleEdit = this._handleEdit.bind(this);
    //--
  }

  _handleEdit = (evt) => {
    evt.preventDefault();
    this.setState({edit : !this.state.edit});
  }
 
  render() {
    // let displayEditForm = null;
    //  if (this.state.edit) {
    //   displayEditForm = <SongForm 
    //       song={this.state.currentsong || this.props.song}
    //       artist={this.state.currentArtistName || this.props.artist}
    //       handleSubmit={this.props.handleUpdate}
    //       edit={true}
    //       songId={this.props.songId}
    //       cancelForm={this._handleEdit}
    //        />
    // }

    let urlToSongView = `/songs/${this.props.songId}`;

    return (
      <div>

        <li className="song">
          { /* this.props.key */ } {/* Warning: Cat: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. */}
          
                
          &nbsp;&nbsp;
          <strong>Song:</strong> {this.props.song} {/* better to use song from props because state in this component doesn't reflect the song from the database in mongo */}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <strong>Votes: </strong>{this.props.votes}
          
        </li>

      </div>
    );
  }
}

VotesForGraph.propTypes = {
  songId: React.PropTypes.string.isRequired,
	artist: React.PropTypes.string.isRequired,
	song: React.PropTypes.string.isRequired
}

export default VotesForGraph;