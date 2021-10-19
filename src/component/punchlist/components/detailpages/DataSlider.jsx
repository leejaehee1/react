// import React, { useState } from 'react';
// import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';

// import Divider from '@material-ui/core/Divider';

// slider
// import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
// import Tooltip from '@material-ui/core/Tooltip';

import React, {useEffect} from 'react';
import Input from '@material-ui/core/Input';



const iOSBoxShadow ='0 0 0 1.5px rgba(0,0,0,0.5)'
  // '0 3px 10px rgba(0,0,0,0.2),0 4px 8px rgba(0,0,0,0.26),0 0 0 1px rgba(0,0,0,0.5)';

const IOSSlider = withStyles({
  root: {
    // color: '#3880ff',
    color: 'gray',
    height: 2,
    padding: '-3px 0',
  },
  thumb: {
    height: 20,
    width: 10,
    backgroundColor: 'gray',
    // boxShadow: iOSBoxShadow,
    marginTop: -10,
    marginLeft: -7,
    '&:focus, &:hover, &$active': {
      // boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      // '@media (hover: none)': {
      //   boxShadow: iOSBoxShadow,
      // },
    },
  },
  active: {},
  valueLabel: {
    // left: 'calc(-50% + 12px)',
    left: -13,
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);



const marks = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
];

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
    color: theme.palette.text.secondary,
  },
  lpaper: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(-1),
    marginTop: theme.spacing(-1),
  },
  rpaper: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(-2),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(-1),
    marginTop: theme.spacing(-1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const theme = createTheme({
  typography: {
    htmlFontSize: 33,
  },
})

// function ValueLabelComponent(props) {
//   const { children, open, value } = props;

//   return (
//     <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
//       {children}
//     </Tooltip>
//   );
// }

// ValueLabelComponent.propTypes = {
//   children: PropTypes.element.isRequired,
//   open: PropTypes.bool.isRequired,
//   value: PropTypes.number.isRequired,
// };

function DataSlider(props) {
  const classes = useStyles();
  

  // function onChange(e, v) {
  //   console.log(e) // event
  //   console.log(v) // 숫자
  // }
  const [value, setValue] = React.useState(props.dataOne);

  useEffect(()=> {
    setValue(props.dataOne)
    if (props.comName==='scheduleImpact'){
      props.setScheduleImpact(false)
    } else {
      props.setCostImpact(false)
    }
  }, [props.dataOne])
 
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    if (props.comName==='scheduleImpact'){
      props.setScheduleImpact(newValue)
    } else {
      props.setCostImpact(newValue)
    }
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

  // console.log(props?.dataOne)
  // const numValue = props?.dataOne

  return (
    <>
      <Grid container alignItems="center" spacing={6}>
        <Grid item xs={4}>
        <Paper elevation={0} className={classes.lpaper}>
          <ThemeProvider theme={theme}>
            <Typography variant="h5">{props.dataName}</Typography>
          </ThemeProvider>
        </Paper>
        </Grid>
        <Grid item xs={8} style={{marginLeft:'-15px'}}>
          <Paper elevation={0} className={classes.rpaper}>
            <IOSSlider
                  // id="difficulty"
                value={typeof value === 'number' ? value : parseInt(props.dataOne)}
                onChange={handleSliderChange}
                defaultValue={props.dataOne}
                disabled={props.disable}
              //   aria-labelledby="input-slider"
                valueLabelDisplay="auto"
                name={props.comName}
                step={1}
                marks={marks}
                min={1}
                max={5}
            />
          </Paper>
        </Grid>
        {/* <Grid item xs={3}>
            <Input
                id="difficulty"
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
          </Grid> */}
      </Grid>
    </>
  )
}

export default DataSlider;