import React, { Component } from 'react'


class RadioButtons extends Component {
  render() {
    return (

      <div>

        <input type="submit" name="songChoice" value={this.props.song} /> Pick this song!

      </div>
    );
  }
}

export default RadioButtons;