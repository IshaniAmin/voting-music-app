import React, { Component } from 'react'


class SpotifyView extends Component {
  render() {
    return (

      <div>

        <input type="radio" name="songChoice" value={this.props.song} /> Pick this song!

      </div>
    );
  }
}

export default SpotifyView;