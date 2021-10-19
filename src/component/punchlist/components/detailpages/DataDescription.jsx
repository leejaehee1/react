import React, { useEffect, useState } from "react";
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

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
    // color: theme.palette.text.secondary,
  },
  lpaper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    // whiteSpace: 'nowrap',
    // marginBottom: theme.spacing(1),
    margin: theme.spacing(0.5),
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



function DataDescription(props) {
  const classes = useStyles();

  const [textAreaValue, setTextAreaValue] = useState('');
  const handleTextarea = (e) => {
    // console.log(e.target.value);
    setTextAreaValue(e.target.value)
    if (props.comName==='issueDescription'){
      props.setIssueDescription(e.target.value)
    } else if(props.comName==='completeComment'){
      props.setCompleteComment(e.target.value)
    };
  }

  useEffect(()=> {
    if (props.comName==='issueDescription'){
      props.setIssueDescription('')
    } else if(props.comName==='completeComment'){
      props.setCompleteComment('')
    };
    setTextAreaValue(props.dataOne)
  }, [props.dataOne])

  return (
    <>
      <br />
      {/* <h5>Issue Description</h5> */}
      <ThemeProvider theme={theme}>
        <Typography variant="h5">{props.columnName}</Typography>
      </ThemeProvider>
      {/* <Paper variant="outlined" className={classes.lpaper} square>
        {props.dataOne}
      </Paper> */}

      <TextField
                    style={{width: '350px', paddingLeft:'20px', paddingTop: '5px'}}
                    id="issueDescription"
                    // label="Multiline"
                    onChange={handleTextarea}
                    multiline
                    rows={4}
                    // color='gray'
                    color="default"
                    value={textAreaValue}
                    variant="outlined"
                    disabled={props.disable}
                />
        
      <br />


    </>   
  )
}

export default DataDescription;