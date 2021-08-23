import React from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';



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
        <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper elevation={0} className={classes.lpaper}>
                <ThemeProvider theme={theme}>
                {/* <Typography variant="subtitle1">subtitle</Typography> */}
                  <Typography variant="h5">Issued Date</Typography>
                  <Typography variant="h5">Issued By</Typography>
                  <Typography variant="h5">Completed Data</Typography>
                  <Typography variant="h5">Completed By</Typography>
                </ThemeProvider>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={0} className={classes.rpaper}>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5"><b>2021.07.26</b></Typography>
                  <Typography variant="h5"><b>John Smith</b></Typography>
                  <Typography variant="h5"><b>2021.07.26</b></Typography>
                  <Typography variant="h5"><b>Abdul Habib</b></Typography>
                </ThemeProvider>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={0} className={classes.lpaper}>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5">Closed Date</Typography>
                  <Typography variant="h5">Closed By</Typography>
                  <Typography variant="h5">Client QC</Typography>
                </ThemeProvider>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={0} className={classes.rpaper}>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5"><b>2021.07.26</b></Typography>
                  <Typography variant="h5"><b>Robert Junior</b></Typography>
                  <Typography variant="h5"><b>Abdul Habib</b></Typography>
                </ThemeProvider>
              </Paper>
            </Grid>
        </Grid>

        <br />
        <Divider className={classes.dxivider} />
        <br />
        
        <Grid container spacing={3}>
            <Grid item xs={3}>
            <Paper className={classes.lpaper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
            <Paper className={classes.rpaper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
            <Paper className={classes.lpaper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
            <Paper className={classes.rpaper}>xs=3</Paper>
            </Grid>
        </Grid>

        <br />
        <Divider className={classes.dxivider} />
        <br />

        <Grid container spacing={3}>
            <Grid item xs={3}>
            <Paper className={classes.lpaper}>xs=3</Paper>
            </Grid>
            <Grid item xs={9}>
            <Paper className={classes.rpaper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
            <Paper className={classes.lpaper}>xs=3</Paper>
            </Grid>
            <Grid item xs={9}>
            <Paper className={classes.rpaper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
            <Paper className={classes.lpaper}>xs=3</Paper>
            </Grid>
            <Grid item xs={9}>
            <Paper className={classes.rpaper}>xs=3</Paper>
            </Grid>
        </Grid>

        <br />
        <Divider className={classes.dxivider} />
        <br />

        <h5>Keyword</h5>

        
        <br />
        <Divider className={classes.dxivider} />
        <br />

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