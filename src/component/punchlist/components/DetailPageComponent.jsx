import React from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import DataOne from './detailpages/DataOne';
import DataSlider from './detailpages/DataSlider';
import DataCheckBox from './detailpages/DataCheckBox';
import DataTime from './detailpages/DataTime';
import DataChipsArray from './detailpages/DataChipsArray';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 15
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  lpaper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  rpaper: {
    padding: theme.spacing(1),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const theme = createTheme({
  typography: {
    htmlFontSize: 33,
    // subtitle1: {
    //   fontSize: 5,
    // },
    // testbody: {
    //   fontWeight: 500,
    // },
    // button: {
    //   fontStyle: 'italic'
    // },
    // h5: {
    //   fontStyle: 'italic'
    // },
  },
})


function DetailPageComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Paper variant="outlined" square> */}
      <Paper style={{padding: '15px'}}>
        <Typography variant="subtitle1" gutterBottom>
            {/* Material-UI Grid: */}
        </Typography>
        
        <DataOne />
        <DataCheckBox />
        <DataTime />

        {/* <br /> */}
        <Divider className={classes.divider} />
        {/* <br /> */}

        <DataSlider />

        

        {/* <br /> */}
          <Divider className={classes.divider} />
        {/* <br /> */}

        {/* <h5>Keyword</h5> */}
        <DataChipsArray />
        
        {/* <br /> */}
        <Divider className={classes.divider} />
        {/* <br /> */}




        <h5>Issue Description</h5>
        <Paper variant="outlined" square>
          KEN-jei-29348 Cable not connected
          <br />
          asdf
        </Paper>
          
        <br />
        <Divider className={classes.dxivider} />
        <br />

        <h5>Complete Comment</h5>
        <Paper variant="outlined" square>
          KEN-jei-29348 Cable not connected
          <br />
          asdf
        </Paper>

        <br />
        <Divider className={classes.dxivider} />
        <br />

        <Grid container spacing={3}>
            <Grid item xs={6}>
            <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
        </Grid>

        <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>View Drawing</Paper>
            </Grid>
        </Grid>

        <br />
        <Divider className={classes.dxivider} />
        <br />

        <Grid container spacing={3}>
            <Grid item xs={6}>
            <Paper className={classes.paper}>Cancel</Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper className={classes.paper}>Save</Paper>
            </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default DetailPageComponent;