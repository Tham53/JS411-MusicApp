import React from "react";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: '290px',
    display: 'inline',
    padding: '60px',
    margin: '20px',
    boxShadow: '5px 5px 15px rgb(78, 78, 78)',
  },
});

const SoundQuality = (props) => {
    const classes = useStyles();
    
  return (
      <Card variant="outlined" classes={classes} style={{padding: "20px", width: "210px"}}>
        <CardContent>
          <Typography variant="h5" component="h2" style={{paddingBottom: "10px"}}>
            Sound Quality
          </Typography>
          <Typography color="textSecondary" style={{fontSize: "14px"}}>
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
  );
};

export default SoundQuality;