import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


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
  // const classes = useStyles();

  // const [textAreaValue, setTextAreaValue] = useState(props.daltaOne);
  const handleTextarea = (e) => {
    // // console.log(e.target.value);
    // setTextAreaValue(e.target.value)l
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
    // setTextAreaValue(props.dataOne)

    // return ()=> (setTextAreaValue(null))
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
      {(props.disable)? 
        <TextField
            style={{width: '350px', paddingLeft:'20px', paddingTop: '5px'}}
            id="issueDescription"
            // label="Multiline"
            onChange={handleTextarea}
            multiline
            rows={4}
            // color='gray'
            color="default"
            value={props.dataOne ? props.dataOne: " "}
            variant="outlined"
            disabled={props.disable}
        />
      :
      <TextField
          style={{width: '350px', paddingLeft:'20px', paddingTop: '5px'}}
          id="issueDescription"
          // label="Multiline"
          onChange={handleTextarea}
          multiline
          rows={4}
          // color='gray'
          color="default"
          value={props.daltaOne}
          variant="outlined"
          disabled={props.disable}
      />
      }

        
      <br />


    </>   
  )
}

export default DataDescription;