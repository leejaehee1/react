import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import {useGetList} from 'react-admin';

// form
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input'; 


// import code data
// import { useGetList } from 'react-admin';
import Status from './Status';
import ProjectID from './ProjectID';
import Category from './Category';
import Discipline from './Discipline';
import Unit from './Unit';
import SystemID from './SystemID';
import Subsystem from './Subsystem';
import Area from './Area';
import Department from './Department';
// import Difficulty from './Difficulty';
// import ScheduleImpact from './ScheduleImpact';
// import CostImpact from './CostImpact';
// import ClosedDate from './ClosedDate';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
  }));
  
function getSteps() {
    return ['Select column to update', 'input rowdata', 'Select CodeData'];
}



const DiviedCodeData = (props) => {
    const [upData, setUpdata] = useState("")

    const handleTextField = (e) => {
        setUpdata(e.target.value)
    }

    useEffect(()=> {
        // console.log(2);
        // // console.log(upData);
        props.setUpUpdata(upData)
    }, [upData])

    if (props.baseColumn === "projectID") {
        return (<>
            <ProjectID setUpdata={setUpdata} stepValFlag="stepValFlag" />
            {/* return (<>projectID</>) */}
        </>)
    } else if (props.baseColumn === "status") {
        return (<><Status setUpdata={setUpdata} stepValFlag="stepValFlag" /></>)
    } else if (props.baseColumn === "discipline") {
        return (<><Discipline setUpdata={setUpdata} stepValFlag="stepValFlag" /></>)
    } else if (props.baseColumn === "category") {
        return (<><Category setUpdata={setUpdata} stepValFlag="stepValFlag" /></>)
    } 
    // else if (column === "authority") {
    //     return (<></>)
    // } 
    else if (props.baseColumn === "department") {
        return (<><Department setUpdata={setUpdata} stepValFlag="stepValFlag" /></>)
    } else if (props.baseColumn === "systemID") {
        return (<><SystemID setUpdata={setUpdata} stepValFlag="stepValFlag" /></>)
    } else if (props.baseColumn === "subsystem") {
        return (<><Subsystem setUpdata={setUpdata} stepValFlag="stepValFlag" /></>)
    } else if (props.baseColumn === "unit") {
        return (<><Unit setUpdata={setUpdata} stepValFlag="stepValFlag" /></>)
    } else if (props.baseColumn === "area") {
        return (<Area setUpdata={setUpdata} stepValFlag="stepValFlag" />)
    } else if (props.baseColumn === "drawingNo") {
        return (<></>)
    } else {
        return (
             <TextField onChange={handleTextField} id="outlined-basic" label="Input text" style={{minWidth:"100px", marginLeft:"-120px"}} variant="outlined" />
             )
    }
    return (<></>)
}
  
  const GetStepContent = (props) => {
    const classes = useStyles();
    const [column, setColumn] = React.useState(''); // 1 step
    const [inputRowDataBefore, setInputRowDataBefore] = React.useState(''); // 2 step
    const [inputRowData, setInputRowData] = React.useState(''); // 2 step
    const baseColumn = React.useRef(""); // 3 step before
    const [upUpData, setUpUpdata] = useState(""); // 3 step after
    // const baseColumnAfter = React.useRef(""); // 3 step after
    //   const { dataa, ids } = useGetList('list', );
      
    const selectedRowDataSet = new Set()
    
    useEffect(()=>{
        baseColumn.current = column
        for (var r of props.data){
            // // console.log(r[column])
            selectedRowDataSet.add(r[column]?r[column]:"")
        }
        setInputRowDataBefore([...selectedRowDataSet])
        // // console.log(selectedRowDataSet)
    }, [column])
    
    useEffect(()=> {
        // // console.log("upUpData")
        // // console.log(upUpData)
        // // console.log("inputRowData")
        // // console.log(inputRowData)
        // // console.log("column")
        // // console.log(column)
        var combineData = [column, inputRowData, upUpData]
        props.setUpUpUpDate(combineData)
    }, [upUpData])

    const handleChange = (event) => {
        setColumn(event.target.value);
        // // console.log(event.target.value)
      };
      const handleChangeTwo = (event) => {
        setInputRowData(event.target.value);
        // // console.log(event.target.value)
      };
    // console.dir(activeStep)
    // // console.log(props.selectedColumns)
    switch (props.activeStep) {
      case 0:
        return (
            <div style={{height:'100px'}}>
            {/* 'Select campaign settings...'{a} */}
            Select the column you want to change<br />
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Column</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={column}
                onChange={handleChange}
                label="column"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {props.selectedColumns.map((value) => 
                    <MenuItem value={value}>{value}</MenuItem>
                )}
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
            </FormControl>
            </div>
        );
      case 1:
        return (
            <div style={{height:'100px'}}>
                {/* 'What is an ad group anyways?'<br /> */}
                <div style={{paddingBottom:'13px'}}>
                    What data will be changed at <b>{column}</b> column?
                </div>
                {/* <TextField id="outlined-basic" label="Existing data" style={{minWidth:"400px"}} variant="outlined" /> */}
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">RowData</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={inputRowData}
                    onChange={handleChangeTwo}
                    label="column"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {inputRowDataBefore.map((value, index) => 
                        <MenuItem key={index} value={value}>{value}</MenuItem>
                    )}
                    {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                </FormControl>
            </div>
        )
      case 2:
        // return 'This is the bit I really care about!';
        return (
            <div style={{height:'100px'}}>
                {/* 'What is an ad group anyways?'<br /> */}
                <div style={{paddingBottom:'0px'}}>
                    What data do you want to change at <b>{column}</b> column?
                </div><br />
                <div style={{paddingLeft:'110px'}}>
                    {/* <div style={{width:"20px"}}></div> */}
                {/* <Discipline /> */}
                    <DiviedCodeData baseColumn={baseColumn.current} setUpUpdata={setUpUpdata} />
                </div>
                {/* <TextField id="outlined-basic" label="Data to change" style={{minWidth:"400px"}} variant="outlined" /> */}
            </div>
        )
      default:
        return 'Unknown stepIndex';
    }
}

const GridComponentStepper = (props) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [upUpUpDate, setUpUpUpDate] = React.useState(["", "", ""]);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleOldData = () => {
        if(upUpUpDate[0].length === 0 ){
            // console.log('GridComponentStepper 246 page :데이터 0로직')
        }
        props.setUpdatedOldData(upUpUpDate)
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                <div>
                    <div style={{textAlign:"center", height:"100px"}} >
                        <Typography className={classes.instructions}>
                        <div style={{display:"inline-block",textAlign:"center"}}>
                            <p style={{ width:'400px', margin:"3px", whiteSpace: 'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}><b>Target column</b> : {upUpUpDate[0]}</p>
                        </div>
                        <div style={{display:"inline-block",textAlign:"center"}}>
                            <p style={{ width:'400px', margin:"3px", whiteSpace: 'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}><b>Old Data</b> : {upUpUpDate[1]}</p>
                        </div>
                        <div style={{display:"inline-block",textAlign:"center"}}>
                            <p style={{ width:'400px', margin:"3px", whiteSpace: 'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}><b>New Data</b> : {upUpUpDate[2]}</p>
                        </div>
                        </Typography>
                    </div>
                    <br />
                    <Button onClick={handleReset}>Reset</Button>
                    <Button onClick={handleOldData} color="primary" variant="contained">Apply</Button>
                </div>
                ) : (
                <div>
                    <div style={{textAlign:"center", height:"100px"}}>
                        <Typography className={classes.instructions}>
                            {/* {getStepContent(activeStep)} */}
                            <GetStepContent setUpUpUpDate={setUpUpUpDate} activeStep={activeStep} selectedColumns={props.selectedColumns} data={props.data}  />
                        </Typography>
                    </div>
                    <br />
                    <div style={{display:'flex'}}>
                        <div style={{width:'70%'}}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>                            
                        </div>
                        <div></div>

                    {/* <Button>CodeData</Button> */}
        
                    </div>
                </div>
                )}
            </div>
            <br />
            <br />

        </div>
    );
}

export default React.memo(GridComponentStepper);