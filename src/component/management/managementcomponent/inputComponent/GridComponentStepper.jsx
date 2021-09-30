import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// form
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

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

const GetStepContent = (props) => {
    const classes = useStyles();
    const [column, setColumn] = React.useState('');

    const handleChange = (event) => {
        setColumn(event.target.value);
        console.log(event.target.value)
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
                What data will be changed?<br />
                <TextField id="outlined-basic" label="Existing data" style={{minWidth:"400px"}} variant="outlined" />
            </div>
        )
      case 2:
        // return 'This is the bit I really care about!';
        return (
            <div style={{height:'100px'}}>
                {/* 'What is an ad group anyways?'<br /> */}
                What data do you want to change?<br />
                <TextField id="outlined-basic" label="Data to change" style={{minWidth:"400px"}} variant="outlined" />
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
                {props.selectedColumns}
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
                            <GetStepContent activeStep={activeStep} selectedColumns={props.selectedColumns} />
                        </Typography>
                    </div>
                    <br />
                    <div>
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
                </div>
                )}
            </div>
            <br />
            <br />

        </div>
    );
}

export default GridComponentStepper;