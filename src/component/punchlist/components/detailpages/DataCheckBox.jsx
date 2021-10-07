import React, { useEffect, useRef, useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 15
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(0),
  },
  paper: {
    padding: theme.spacing(1.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  lpaper: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  rpaper: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(0),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(0),
    marginTop: theme.spacing(0),
  },
  udivider: {
    margin: theme.spacing(0, 0, -1, 0),
  },
  ddivider: {
    margin: theme.spacing(-1, 0, 0, 0),
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



const DataCheckBox = (props) => {
  const [checked, setChecked] = useState();
  const [checkedMaterial, setCheckedMaterial] = useState();
  const classes = useStyles();
  let a = props.dataOne?.designChgReq
  let b = props.dataOne?.materialReq

  useEffect(()=> {
    setChecked(a)
    setCheckedMaterial(b)
  }, [props])
  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // }

  const handleDetailBox = (e) => {
    setChecked((pre)=>(Math.abs(pre-1)))
  }

  const handleDetailMaterial = ()=> {
    setCheckedMaterial((pre)=> (Math.abs(!pre)))
  }

  return (
    <div style={{marginLeft: '-5px'}}>

      {/* <br /> */}
        {/* <Divider className={classes.udivider} /> */}
      {/* <br /> */}
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={5}>
        {/* elevation={0} */}
          <Paper elevation={0} className={classes.lpaper}>
            
            <ThemeProvider theme={theme}>
              <Typography variant="h5">&nbsp;Design Check Required</Typography>
            </ThemeProvider>
          </Paper>
        </Grid>
        <Grid item xs={1} style={{marginRight:'5px', marginLeft: '-20px'}}>
          <Paper elevation={0} className={classes.rpaper}>
            <Checkbox
              // defaultChecked
              onChange={handleDetailBox}
              checked={parseInt(checked)}
              color="default"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={0} className={classes.lpaper}>
            <ThemeProvider theme={theme}>
              <Typography variant="h5">Material Check Required</Typography>
            </ThemeProvider>
          </Paper>
        </Grid>
        <Grid item xs={1} style={{marginLeft:'-13px'}}>
          <Paper elevation={0} className={classes.rpaper}>
            <Checkbox
              onChange={handleDetailMaterial}
              checked={parseInt(checkedMaterial)}
              color="default"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* <br /> */}
        {/* <Divider className={classes.ddivider} /> */}
      {/* <br /> */}
    </div>
  )
}

export default DataCheckBox;