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

function DataOne(props) {
  const classes = useStyles();
  return (
    <>
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
              {/* <Typography variant="h5"><b>aaaaaaaaaaaaaaaaaaa</b></Typography> */}
              {(props.dataOne?.issuedDate)?
                <Typography variant="h5"><b>{props.dataOne?.issuedDate.split('-')[0]}/{props.dataOne?.issuedDate.split('-')[1]}/{props.dataOne?.issuedDate.split('-')[2].slice(0,2)}</b></Typography>
              :
                <Typography variant="h5"><b>{props.dataOne?.issuedDate}</b></Typography>
              }
              
              <Typography variant="h5"><b>{props.dataOne?.issuedBy}</b></Typography>
              
              {(props.dataOne?.completedDate)?
                <Typography variant="h5"><b>{props.dataOne?.completedDate.split('-')[0]}/{props.dataOne?.completedDate.split('-')[1]}/{props.dataOne?.completedDate.split('-')[2].slice(0,2)}</b></Typography>
              :
                <Typography variant="h5"><b>{props.dataOne?.completedDate}</b></Typography>
              }
              <Typography variant="h5"><b>{props.dataOne?.completedBy}</b></Typography>
            </ThemeProvider>
          </Paper>
        </Grid>

        {/* <Divider orientation="vertical" flexItem /> */}
        
        <Grid item xs={3}>
          <Paper elevation={0} className={classes.lpaper}>
            <ThemeProvider theme={theme}>
              <Typography variant="h5">Closed Date</Typography>
              <Typography variant="h5">Closed By</Typography>
              <Typography variant="h5">Raised On</Typography>
            </ThemeProvider>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={0} className={classes.rpaper}>
            <ThemeProvider theme={theme}>
              {(props.dataOne?.closedDate)?
                <Typography variant="h5"><b>{props.dataOne?.closedDate.split('-')[0]}/{props.dataOne?.closedDate.split('-')[1]}/{props.dataOne?.closedDate.split('-')[2].slice(0,2)}</b></Typography>
              :
                <Typography variant="h5"><b>{props.dataOne?.closedDate}</b></Typography>
              }
              <Typography variant="h5"><b>{props.dataOne?.closedBy}</b></Typography>
              <Typography variant="h5"><b>{props.dataOne?.raisedBy}</b></Typography>
            </ThemeProvider>
          </Paper>
        </Grid>
      </Grid>    
    </>
  )
}

export default DataOne;