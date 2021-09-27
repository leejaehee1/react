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
  // if (!props.object || !props.array || props.array.length ===0) return null;
  // if (!props.object || Object.keys(props).length ===0) return null;
  if (props == undefined) return null;
  console.log(!props.object)
  console.log(props.array)
  // const detailData = () => props.dataOne
  // let detailIssuedDate = () => detailData["issuedDate"]
  // let detailIssuedDate = 'aaaaaaaaaaaaa'
  // try{
  //   let detailIssuedDate = detailData["issuedDate"]
  // } catch (e) {
  //   return null
  // }
  // console.log(props.dataOne.status)
  // console.log(props.dataOne.projectID)
  // if (!Object.keys(props.dataOne).length) return null;
  // console.log(props.dataOne.issuedDate)
  // console.log(detailIssuedDate)
  // console.log(detailData)
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
              <Typography variant="h5"><b>{props.dataOne?.issuedDate}</b></Typography>
              <Typography variant="h5"><b>John Smith</b></Typography>
              <Typography variant="h5"><b>2021.07.26</b></Typography>
              <Typography variant="h5"><b>Abdul Habib</b></Typography>
            </ThemeProvider>
          </Paper>
        </Grid>

        {/* <Divider orientation="vertical" flexItem /> */}
        
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
    </>
  )
}

export default DataOne;