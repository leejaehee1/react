import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 15
  },
  paper: {
    padding: theme.spacing(1.5),
    // margin: theme.spacing(1),
    // width: theme.spacing(16),
    // height: theme.spacing(16),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function DetailSelector() {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.root} container spacing={4}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>Issue</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>History</Paper>
        </Grid>
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
      </Grid>
    </div>
  )
}

export default DetailSelector;