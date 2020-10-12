import React, { Component } from "react";

class MasterVolume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: this.props.volumeState,
      mute: false,
      previousVolume: this.props.volumeState,
    };
  }

  //MUTE
  muteVolume = (event, value) => {
    let newMute = !this.state.mute;
    this.setState({
      mute: newMute,
      previousVolume: this.state.volume,
      volume: newMute ? 0 : this.state.previousVolume,
    });
  };

  handleChange = (event, value) => {
    this.setState({ volume: value });
    this.props.volumeFunc(value);
  };

  //SLIDER
  render() {
    return (
      <div className="master-volume">
        <Typography id="discrete-slider" gutterBottom>
          Master Volume Control
        </Typography>
        <Slider
          defaultValue={this.state.volume}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="on"
          step={10}
          marks
          min={0}
          max={100}
          value={this.state.volume}
          onChange={this.handleChange}
        />
        <CardActions>
          <Button size="small" onClick={() => this.muteVolume()}>
            {this.state.mute ? "Unmute" : "Mute"}
          </Button>
        </CardActions>
      </div>
    );
  }
}
