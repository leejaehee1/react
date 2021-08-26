import React from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import RecipeReviewCard from './RecipeReviewCard';


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


function DataImage() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper elevation={0} className={classes.lpaper}>
          <ThemeProvider theme={theme}>
            <Typography variant="h5">Issued</Typography>
          </ThemeProvider>
          <RecipeReviewCard />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0} className={classes.lpaper}>
          <ThemeProvider theme={theme}>
            <Typography variant="h5">Completed</Typography>
          </ThemeProvider>
          <RecipeReviewCard />
          </Paper>
        </Grid>
      </Grid>



      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>View Drawing</Paper>
          {/* <RecipeReviewCard /> */}
        </Grid>
      </Grid>
    </>
  )
}

export default DataImage;