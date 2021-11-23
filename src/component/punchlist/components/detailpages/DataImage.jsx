import React from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
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


function DataImage(props) {
  const classes = useStyles();
  // // console.log(props.rowData)
  // // console.log(props.rowData?.punchID)
  // // console.log(props.rowData?.punchID)
  // photos 기준으로 punchStep를 기준으로 1과 2를 나눠 준다. 
  // 그리고 RecipeReviewCard 내부에서 seq를 순차적으로 이미지를 넣어준다.
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper elevation={0} className={classes.lpaper}>
          <ThemeProvider theme={theme}>
            <Typography variant="h5">Issued</Typography>
          </ThemeProvider>
          <RecipeReviewCard imageName="Issued Image" punchStep="1" rowData={props.rowData} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0} className={classes.lpaper}>
          <ThemeProvider theme={theme}>
            <Typography variant="h5">Completed</Typography>
          </ThemeProvider>
          <RecipeReviewCard imageName="Completed Image" punchStep="2" rowData={props.rowData} />
          </Paper>
        </Grid>
      </Grid>


      {/* <div style={{display:'flex', width:'850px', justifyContent:'center'}}>
          <img src={`http://localhost:5000/drawings/pdfs/${imageNameDB}.png`} alt="" width="800px" height="500px" />
      </div> */}


    </>
  )
}

export default DataImage;