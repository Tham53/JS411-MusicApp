import React from "react";
import "../App.css";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import FormControl from "@material-ui/core/FormControl";
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
          <FormControl>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.quality}
              onChange={props.handleQualityChange}
            >
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Medium</MenuItem>
              <MenuItem value={3}>High</MenuItem>
            </Select>
          </FormControl>
        </CardActions>
      </Card>
    </div>
  );
};

export default SoundQuality;
