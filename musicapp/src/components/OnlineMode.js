import React from "react";
import Switch from "@material-ui/core/Switch";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

const OnlineMode = (props) => {
    const classes = useStyles();

  return (
      <Card variant="outlined" classes={classes} style={{padding: "20px", width: "210px"}}>
        <CardContent>
          <Typography variant="h5" component="h2" style={{paddingBottom: "10px"}}>
            Online Mode
          </Typography>
          <Typography variant="body2" component="p" class="body" color="textSecondary" style={{fontSize: "14px"}}>
            Toggle the switch to change the mode.
          </Typography>
        </CardContent>
        <CardActions class="toggle">
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Online</Grid>
              <Grid item>
                <AntSwitch onChange={props.handleToggleChange} />
              </Grid>
              <Grid item>Offline</Grid>
            </Grid>
          </Typography>
        </CardActions>
      </Card>
  );
};

export default OnlineMode;