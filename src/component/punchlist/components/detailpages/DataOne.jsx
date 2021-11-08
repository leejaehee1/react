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
    // padding: '0 0 0 8px'
    padding: theme.spacing(0, 0, 0, 1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(2),
  },
  rpaper: {
    padding: theme.spacing(0, 0, 0, 0),
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
      <Grid container spacing={1}>
        <Grid item xs={3.1}>
          <Paper elevation={0} className={classes.lpaper}>
            <ThemeProvider theme={theme}>

            {/* <Typography variant="subtitle1">subtitle</Typography> */}
              <Typography variant="h5" style={{padding: '0 0 0 8px'}}>Issued Date</Typography>
              <Typography variant="h5" style={{padding: '0 0 0 8px'}}>Issued By</Typography>
              <Typography variant="h5" style={{padding: '0 0 0 8px'}}>Completed Data</Typography>
              <Typography variant="h5" style={{padding: '0 0 0 8px'}}>Completed By</Typography>
            </ThemeProvider>
          </Paper>
        </Grid>
        <Grid item xs={3.1}>
          <Paper elevation={0} className={classes.rpaper} style={{padding: '0 0 0 5px'}}>
            <ThemeProvider theme={theme}>
              {(props.dataOne?.issuedDate)?
                <Typography variant="h5"><b>{props.dataOne?.issuedDate.split('-')[0]}.{props.dataOne?.issuedDate.split('-')[1]}.{props.dataOne?.issuedDate.split('-')[2].slice(0,2)}</b>&nbsp;</Typography>
              :
                <Typography variant="h5"><b>{props.dataOne?.issuedDate}&nbsp;</b></Typography>
              }
              
              <Typography variant="h5"><b>{props.dataOne?.issuedBy}&nbsp;</b></Typography>
              
              {(props.dataOne?.completedDate)?
                <Typography variant="h5"><b>{props.dataOne?.completedDate.split('-')[0]}.{props.dataOne?.completedDate.split('-')[1]}.{props.dataOne?.completedDate.split('-')[2].slice(0,2)}</b>&nbsp;</Typography>
              :
                <Typography variant="h5"><b>{props.dataOne?.completedDate}&nbsp;</b></Typography>
              }
              <Typography variant="h5"><b>{props.dataOne?.completedBy}&nbsp;</b></Typography>
            </ThemeProvider>
          </Paper>
        </Grid>

        {/* <Divider orientation="vertical" flexItem /> */}
        
        <Grid item xs={3}>
          <Paper elevation={0} className={classes.lpaper} style={{padding: '0 0 0 16px'}}>
            <ThemeProvider theme={theme}>
              <Typography variant="h5">Closed Date</Typography>
              <Typography variant="h5">Closed By</Typography>
              <Typography variant="h5">Raised On</Typography>
            </ThemeProvider>
          </Paper>
        </Grid>
        <Grid item xs={2.5}>
          <Paper elevation={0} className={classes.rpaper} style={{padding: '0 10px 0 0', width: '70px'}}>
            <ThemeProvider theme={theme}>
              {(props.dataOne?.closedDate)?
                <Typography variant="h5"><b>{props.dataOne?.closedDate.split('-')[0]}.{props.dataOne?.closedDate.split('-')[1]}.{props.dataOne?.closedDate.split('-')[2].slice(0,2)}</b>&nbsp;</Typography>
              :
                <Typography variant="h5"><b>{props.dataOne?.closedDate}&nbsp;</b></Typography>
              }
              <Typography variant="h5"><b>{props.dataOne?.closedBy}&nbsp;</b></Typography>
              <Typography variant="h5"><b>{props.dataOne?.raisedBy}&nbsp;</b></Typography>
              {/* <Typography variant="h5"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></Typography> */}
            </ThemeProvider>
          </Paper>
        </Grid>
      </Grid>    
    </>
  )
}

export default DataOne;