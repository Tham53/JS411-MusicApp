import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Slider from '@material-ui/core/Slider';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    maxWidth: '290px',
    display: 'inline',
    padding: '60px',
    margin: '20px',
    boxShadow: '5px 5px 15px rgb(78, 78, 78)',
  },
});

function MasterVolume(props) {
  const classes = useStyles();

  return (
      <Card variant="outlined" classes={classes} style={{padding: "20px", width: "210px"}}>
        <CardContent>
          <Typography variant="h5" component="h2" style={{paddingBottom: "10px"}}>
            Master Volume
          </Typography>
          <Typography color="textSecondary" style={{fontSize: "14px"}}>
          </Typography>
        </CardContent>
        <CardActions>
          <Slider
          defaultValue={20}
          onChange={props.handleSlider}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={0}
          max={100}
          value={props.volume}
          onChange={props.handleChange}
          />
           <Button size="small" onClick={() => props.muteVolume()}>
            {props.mute ? "Unmute" : "Mute"}
          </Button>
        </CardActions>
      </Card>
  )
}

export default MasterVolume;