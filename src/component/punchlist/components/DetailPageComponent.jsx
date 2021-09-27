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
import DataDescription from './detailpages/DataDescription';
import DataImage from './detailpages/DataImage';
import ClosedDate from '../../management/managementcomponent/inputComponent/ClosedDate';
// import Button from '@material-ui/core/Button';



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


function DetailPageComponent(props) {
  // console.log("props.downDetailData")
  // console.log(props.downDetailData)
  const classes = useStyles();

  let a = props.downDetailData?.difficulty 
  let b = props.downDetailData?.scheduleImpact 
  return (
    <div className={classes.root}>
      {JSON.stringify(props.downDetailData)}
      {/* {props.downDetailData} */}
      {/* <Paper variant="outlined" square> */}
      <Paper style={{padding: '15px'}}>
        <Typography variant="subtitle1" gutterBottom>
            {/* Material-UI Grid: */}
        </Typography>
        
        <DataOne dataOne={props.downDetailData} />
        <DataCheckBox dataOne={props.downDetailData} />
        <DataTime dataOne={props.downDetailData} />
        <Divider className={classes.divider} />

        {/* difficulty */}
        <DataSlider dataName="Difficulty" dataOne={a} />

        {/* schedule impact */}
        <DataSlider dataName="Schedule Impact" dataOne={3} />

        {/* cost Impact316 */}
        <DataSlider dataName="Cost Impact" dataOne={props.downDetailData?.costImpact} />


        <Divider className={classes.divider} />

        <DataChipsArray />

        <Divider className={classes.divider} />

        <DataDescription dataOne={props.downDetailData?.issueDescription} />

        <DataDescription dataOne={props.downDetailData?.completeComment} />

        <Divider className={classes.divider} />

        <DataImage />

        <Divider className={classes.divider} />

        <Grid container spacing={3}>
            <Grid item xs={6}>
            <Paper className={classes.paper}>
              Cancel
            </Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper className={classes.paper}>
              {/* <Button /> */}
              Save
            </Paper>
            </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default DetailPageComponent;