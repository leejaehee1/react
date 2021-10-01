import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useGetList} from 'react-admin';

// form
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input'; 


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
import Difficulty from './Difficulty';
import ScheduleImpact from './ScheduleImpact';
import CostImpact from './CostImpact';
import ClosedDate from './ClosedDate';

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

    useEffect(()=> {
        console.log(2);
        // console.log(upData);
        props.setUpUpdata(upData)
    }, [upData])

    if (props.baseColumn === "projectID") {
        return (<>
            <ProjectID setUpdata={setUpdata} />
            {/* return (<>projectID</>) */}
        </>)
    } else if (props.baseColumn === "status") {
        return (<><Status /></>)
    } else if (props.baseColumn === "discipline") {
        return (<><Discipline /></>)
    } else if (props.baseColumn === "category") {
        return (<><Category /></>)
    } 
    // else if (column === "authority") {
    //     return (<></>)
    // } 
    else if (props.baseColumn === "status") {
        return (<><Status /></>)
    } else if (props.baseColumn === "department") {
        return (<><Department /></>)
    } else if (props.baseColumn === "systemID") {
        return (<><SystemID /></>)
    } else if (props.baseColumn === "subsystem") {
        return (<><Subsystem /></>)
    } else if (props.baseColumn === "unit") {
        return (<><Unit /></>)
    } else if (props.baseColumn === "area") {
        return (<Area />)
    } else if (props.baseColumn === "drawingNo") {
        return (<></>)
    } else {
        return (
             <TextField id="outlined-basic" label="Input text" style={{minWidth:"100px", marginLeft:"-120px"}} variant="outlined" />
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
    const baseColumnAfter = React.useRef(""); // 3 step after
    //   const { dataa, ids } = useGetList('list', );
      
    const selectedRowDataSet = new Set()
    
    useEffect(()=>{
        baseColumn.current = column
        for (var r of props.data){
            // console.log(r[column])
            selectedRowDataSet.add(r[column]?r[column]:"(undefined)")
        }
        setInputRowDataBefore([...selectedRowDataSet])
        // console.log(selectedRowDataSet)
    }, [column])
    
    useEffect(()=> {
        console.log("upUpData")
        console.log(upUpData)
        console.log("inputRowData")
        console.log(inputRowData)
        console.log("column")
        console.log(column)
    }, [upUpData])

    const handleChange = (event) => {
        setColumn(event.target.value);
        // console.log(event.target.value)
      };
      const handleChangeTwo = (event) => {
        setInputRowData(event.target.value);
        // console.log(event.target.value)
      };
    // console.dir(activeStep)
    // console.log(props.selectedColumns)
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

    // console.log(props.selectedColumns)

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
                {/* {props.selectedColumns} */}
                {activeStep === steps.length ? (
                <div>
                    <div style={{textAlign:"center", height:"100px"}} >
                        <Typography className={classes.instructions}>All steps completed</Typography>
                    </div>
                    <br />
                    <Button onClick={handleReset}>Reset</Button>
                </div>
                ) : (
                <div>
                    <div style={{textAlign:"center", height:"100px"}}>
                        <Typography className={classes.instructions}>
                            {/* {getStepContent(activeStep)} */}
                            <GetStepContent activeStep={activeStep} selectedColumns={props.selectedColumns} data={props.data}  />
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

export default GridComponentStepper;