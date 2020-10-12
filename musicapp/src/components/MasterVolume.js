import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const MasterVolume =  (props) => {
  //constructor(props) {
    //super(props);
    //this.state = {
      //volume: this.props.volumeState,
      //mute: false,
      //previousVolume: this.props.volumeState,
    //};
 // }

  //MUTE
 // muteVolume = (event, value) => {
  //  let newMute = !this.state.mute;
  //  this.setState({
    //  mute: newMute,
    //  previousVolume: this.state.volume,
   //   volume: newMute ? 0 : this.state.previousVolume,
   // });
 // };

  //handleChange = (event, value) => {
  //  this.setState({ volume: value });
  //};

  //SLIDER

   
    return (
      <div className="master-volume">
        <Typography id="discrete-slider" gutterBottom>
          Master Volume Control
        </Typography>
        <Slider
          defaultValue={props.volume}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="on"
          step={10}
          marks
          min={0}
          max={100}
          value={props.volume}
          onChange={props.handleChange}
        />
        <CardActions>
          <Button size="small" onClick={() => props.muteVolume()}>
            {props.mute ? "Unmute" : "Mute"}
          </Button>
        </CardActions>
      </div>
    );
  }

export default MasterVolume;