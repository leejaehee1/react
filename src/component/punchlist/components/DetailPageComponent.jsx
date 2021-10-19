import React, {useState, useRef} from 'react';
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
import ViewDrawingButton from './detailpages/ViewDrawingButton';
// import Button from '@material-ui/core/Button';

import'./styles/DetailPageComponent.css'

import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingTop: 10
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


  const [targetDate, setTargetDate] = useState('');
  const [designChgReq, setDesignChgReq] = useState('');
  const [materialReq, setMaterialReq] = useState('');
  const [scheduleImpact, setScheduleImpact] = useState('');
  const [costImpact, setCostImpact] = useState('');
  const [keyword1, setKeyword1] = useState('');
  const [keyword2, setKeyword2] = useState('');
  const [keyword3, setKeyword3] = useState('');
  const [keyword4, setKeyword4] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [completeComment, setCompleteComment] = useState('');


  const handleDetailUpdate= () => {
    alert('asdfasdf')
    const formData = new FormData();
    const data = {}
    if (targetDate==='' || targetDate===false){}else{
      data.targetDate = targetDate
      formData.append("targetDate", targetDate);
    }
    if (designChgReq==='' || designChgReq===false){}else{
      data.designChgReq = designChgReq
      formData.append("designChgReq", designChgReq);
    }
    if (materialReq==='' || materialReq===false){}else{
      data.materialReq = materialReq
      formData.append("materialReq", materialReq);
    }
    if (scheduleImpact==='' || scheduleImpact===false){}else{
      data.scheduleImpact = scheduleImpact
      formData.append("scheduleImpact", scheduleImpact);
    }
    if (costImpact==='' || costImpact===false){}else{
      data.costImpact = costImpact
      formData.append("costImpact", costImpact);
    }
    if (keyword1==='' || keyword1===false || keyword1===undefined){}else{
      data.keyword1 = keyword1
      formData.append("keyword1", keyword1);
    }
    if (keyword2==='' || keyword2===false || keyword2===undefined){}else{
      data.keyword2 = keyword2
      formData.append("keyword2", keyword2);
    }
    if (keyword3==='' || keyword3===false || keyword3===undefined){}else{
      data.keyword3 = keyword3
      formData.append("keyword3", keyword3);
    }
    if (keyword4==='' || keyword4===false || keyword4===undefined){}else{
      data.keyword4 = keyword4
      formData.append("keyword4", keyword4);
    }
    if (issueDescription==='' || issueDescription===false){}else{
      data.issueDescription = issueDescription
      formData.append("issueDescription", issueDescription);
    }
    if (completeComment==='' || completeComment===false){}else{
      data.completeComment = completeComment
      formData.append("completeComment", completeComment);
    }
    formData.append("punchID", props.downDetailData?.punchID);

    const url = 'http://localhost:5000/punchlist/updateDetail';
    console.log(data)
    axios.post(url, formData, {
      headers: {
          'Content-Type' : 'multipart/form-data'
      }
    })
    .then(res => {
        console.log(res);
        // refresh()
        alert("저장 완료");
    })
    .catch(err => {
        console.log(err);
    });

  }

  // useState(() => {
  //   props.setAbleUpdateDetailFlag(true)
  // }, [props?.downDetailData])

  return (
    <div className={classes.root} style={{overflow: 'auto', height: '700px'}}>
      {/* {JSON.stringify(props.downDetailData)} */}
      <Paper style={{padding: '15px'}}>
        <Typography variant="subtitle1" gutterBottom>
            {/* Material-UI Grid: */}
        </Typography>

      {/* {JSON.stringify(props.downDetailData?.punchID)} <br />
        DataTime: {JSON.stringify(targetDate)} <br />
        designChgReq: {JSON.stringify(designChgReq)} <br />
        materialReq: {JSON.stringify(materialReq)} <br />
        scheduleImpact: {JSON.stringify(scheduleImpact)} <br />
        costImpact: {JSON.stringify(costImpact)} <br />
        keyword1: {JSON.stringify(keyword1)} <br />
        keyword2: {JSON.stringify(keyword2)} <br />
        keyword3: {JSON.stringify(keyword3)} <br />
        keyword4: {JSON.stringify(keyword4)} <br />
        issueDescription: {JSON.stringify(issueDescription)} <br />
        completeComment: {JSON.stringify(completeComment)} <br /> */}
        <DataOne dataOne={props.downDetailData}  />


        <DataTime dataOne={props.downDetailData} disable={props?.ableUpdateDetailFlag} setTargetDate={setTargetDate} />

        <div style={{backgroundColor:'#f5f5f5', paddingLeft:'10px', marginTop:'2px', paddingRight:'10px', marginBottom:'-20px'}}>
          {/* <Divider className={classes.divider} /> */}
          <DataCheckBox disable={props?.ableUpdateDetailFlag} dataOne={props.downDetailData} setDesignChgReq={setDesignChgReq} setMaterialReq={setMaterialReq} />

          {/* difficulty */}
          {/* <DataSlider dataName="Difficulty" dataOne={props.downDetailData?.difficulty} /> */}

          {/* schedule impact */}
          <DataSlider disable={props?.ableUpdateDetailFlag} dataName="Schedule Impact" dataOne={props.downDetailData?.scheduleImpact} comName="scheduleImpact" setScheduleImpact={setScheduleImpact} />

          {/* cost Impact316 */}
          <DataSlider disable={props?.ableUpdateDetailFlag} dataName="Cost Impact" dataOne={props.downDetailData?.costImpact} comName="costImpact" setCostImpact={setCostImpact} />
        </div>

        <br />
        <Divider className={classes.divider} />

        <DataChipsArray 
          keyOne={props.downDetailData?.keyword1} 
          keyTwo={props.downDetailData?.keyword2} 
          KeyThree={props.downDetailData?.keyword3}
          KeyFour={props.downDetailData?.keyword4}
          setKeyword1={setKeyword1}
          setKeyword2={setKeyword2}
          setKeyword3={setKeyword3}
          setKeyword4={setKeyword4}
          disable={props?.ableUpdateDetailFlag}
        />
        {/* {props.downDetailData?.keyword1}
        {props.downDetailData?.keyword2}
        {props.downDetailData?.keyword3}
        {props.downDetailData?.keyword4} */}

        <Divider className={classes.divider} />

        <DataDescription disable={props?.ableUpdateDetailFlag} dataOne={props.downDetailData?.issueDescription} columnName="Issue Description" comName='issueDescription' setIssueDescription={setIssueDescription} />

        <DataDescription disable={props?.ableUpdateDetailFlag} dataOne={props.downDetailData?.completeComment} columnName="Complete Description" comName='completeComment' setCompleteComment={setCompleteComment} />

        <Divider className={classes.divider} />

        {/* modal */}
        <DataImage rowData={props.downDetailData} />
        
        
        
        
        <ViewDrawingButton dataOne={props.downDetailData} />


        <Divider className={classes.divider} />


        <Grid container spacing={3}>
            <Grid item xs={6}>
            {/* <Paper className={classes.paper}>
              Cancel
            </Paper> */}
            <button className="detailPageCancelButton">Cancel</button>
            </Grid>
            <Grid item xs={6}>
            {/* <Paper className={classes.paper}>
              Save
            </Paper> */}
            <button className="detailPageSaveButton" onClick={handleDetailUpdate}>Save</button>
            </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default DetailPageComponent;