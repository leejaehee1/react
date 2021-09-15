import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';


const useStyles = makeStyles({
    root: {
      width: 400,
    },
    input: {
      width: 30,
    },
  });


const ScheduleImpact = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.static);
  
    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleInputChange = (event) => {
      setValue(event.target.value === '' ? '' : Number(event.target.value));
    };
  
    const handleBlur = () => {
      if (value < 1) {
        setValue(1);
      } else if (value > 5) {
        setValue(5);
      }
    };

    return (
        <div className={classes.root}>
        {/* <Typography id="input-slider" gutterBottom>
            Department
        </Typography> */}
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            {/* <VolumeUp /> */}
            ScheduleImpact &nbsp;&nbsp;:  &nbsp;&nbsp;&nbsp;&nbsp;
          </Grid>
          <Grid item xs>
            <Slider
                // id="difficulty"
              value={typeof value === 'number' ? value : props.static}
              onChange={handleSliderChange}
              defaultValue={props.static}
            //   aria-labelledby="input-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
            />
          </Grid>
          <Grid item>
            <Input
                id="scheduleImpact"
              className={classes.input}
              value={value}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: 1,
                max: 5,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
        </Grid>
      </div>
    )
}


export default ScheduleImpact;