import React from "react";
import "../App.css";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
// import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const SoundQuality = (props) => {
  return (
    <div>
      <Card variant="outlined" class="onlinecard">
        <CardContent>
          <Typography variant="h5" component="h2" class="title">
            Sound Quality
          </Typography>
          <Typography variant="body2" component="p" class="body">
            Select your desired sound quality.
          </Typography>
        </CardContent>
        <CardActions class="select">
          <Typography component="div">
            <Select
              class="selectQuaility"
              onChange={props.handleQualityChange}
              value={props.quality}
            >
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Medium</MenuItem>
              <MenuItem value={3}>High</MenuItem>
            </Select>
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default SoundQuality;
