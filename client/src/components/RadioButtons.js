import React, { Component } from 'react'


class RadioButtons extends Component {

  render() {

    return (

      <div>

        <button data-song={this.props.song} data-artist={this.props.artist.toString()} data-album={this.props.album} data-previewSong={this.props.previewSong} onClick={this.props.handleSubmit} name="songChoice" value="Pick this song">
        	pick this song
        </button>

      </div>
    );
  }
}

export default RadioButtons;