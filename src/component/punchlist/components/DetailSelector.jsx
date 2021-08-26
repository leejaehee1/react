import React from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 12 
  },
  paper: {
    padding: theme.spacing(1.5),
    // margin: theme.spacing(1),
    // width: theme.spacing(16),
    // height: theme.spacing(16),
    textAlign: 'center',
    // color: theme.palette.text.disabled,
    color: 'white',
    backgroundColor: '#616161',
    // background:'black',
    
  },
}));

const theme = createTheme({
  typography: {
    htmlFontSize: 38,
    
  },
})

function DetailSelector() {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.root} container spacing={4}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {/* Issue */}
            <ThemeProvider theme={theme}>
              <Typography variant="h4">Issue</Typography>
            </ThemeProvider>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4">History</Typography>
            </ThemeProvider>
          </Paper>
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