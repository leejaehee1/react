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
  
const GetStepContent = ({activeStep}) => {
    const classes = useStyles();
    const [column, setColumn] = React.useState('');

    const handleChange = (event) => {
        setColumn(event.target.value);
      };
    // console.dir(activeStep)

    switch (activeStep) {
      case 0:
        return (
            <>
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
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            </>
            );
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown stepIndex';
    }
}

const GridComponentStepper = () => {
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
                    <div style={{textAlign:"center"}}>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                    </div>
                    <br />
                    <Button onClick={handleReset}>Reset</Button>
                </div>
                ) : (
                <div>
                    <div style={{textAlign:"center"}}>
                        <Typography className={classes.instructions}>
                            {/* {getStepContent(activeStep)} */}
                            <GetStepContent activeStep={activeStep} />
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