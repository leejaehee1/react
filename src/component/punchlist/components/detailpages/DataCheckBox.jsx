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
  const [checked, setChecked] = useState('');
  const [checkedMaterial, setCheckedMaterial] = useState('');
  const classes = useStyles();
  let a = props.dataOne?.designChgReq
  let b = props.dataOne?.materialReq


  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // }
  useEffect(()=> {
    return ()=>{
      setChecked('')
      setCheckedMaterial('')
      props.setDesignChgReq(false);
      props.setMaterialReq(false);
      console.log('2333333333333333333333333e')
    }
  }, [props.dataOne])

  const handleDetailBox = (e) => {
    var designCheck;
    setChecked((pre)=>{
      if (String(checked).length){
        designCheck = Math.abs(pre-1);
      }else{
        designCheck = Math.abs(parseInt(a)-1);
      }
      props.setDesignChgReq(designCheck);
      return (designCheck)
    })
  }

  const handleDetailMaterial = ()=> {
    var materialCheck;
    setCheckedMaterial((pre)=> { 
      if (String(checkedMaterial).length){
        materialCheck = Math.abs(pre-1);
      } else{
        materialCheck = Math.abs(parseInt(b)-1);
      }
      props.setMaterialReq(materialCheck);
      return (materialCheck)
    })
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
              <Typography variant="h5">&nbsp;Design Check Req</Typography>
            </ThemeProvider>
          </Paper>
        </Grid>
        <Grid item xs={1} style={{marginRight:'5px', marginLeft: '-20px'}}>
            {/* {JSON.stringify(checked)}
            {JSON.stringify(Boolean(String(checked)))}aa */}
          <Paper elevation={0} className={classes.rpaper}>
            {(String(checked))?
            <Checkbox
              // defaultChecked
              disabled={props.disable}
              onMouseDown={handleDetailBox}
              checked={checked}
              color="default"
              // inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
            :
            <>
            <Checkbox
              // defaultChecked
              disabled={props.disable}
              onMouseDown={handleDetailBox}
              checked={parseInt(props.dataOne?.designChgReq)}
              color="default"
              // inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
            </>
            }
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={0} className={classes.lpaper}>
            <ThemeProvider theme={theme}>
              <Typography variant="h5">Material Check Req</Typography>
            </ThemeProvider>
          </Paper>
        </Grid>
        <Grid item xs={1} style={{marginLeft:'-13px'}}>
          <Paper elevation={0} className={classes.rpaper}>
            {(String(checkedMaterial))?
            <Checkbox
              disabled={props.disable}
              onChange={handleDetailMaterial}
              checked={parseInt(checkedMaterial)}
              color="default"
              // inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
            :
            <Checkbox
              disabled={props.disable}s
              onChange={handleDetailMaterial}
              checked={parseInt(props.dataOne?.materialReq)}
              color="default"
              // inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
            }
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