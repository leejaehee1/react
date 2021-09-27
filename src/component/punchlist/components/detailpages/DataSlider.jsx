// import React, { useState } from 'react';
// import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
// import Divider from '@material-ui/core/Divider';

// slider
// import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
// import Tooltip from '@material-ui/core/Tooltip';

import React from 'react';
import Input from '@material-ui/core/Input';



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
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(-1),
    marginTop: theme.spacing(-1),
  },
  rpaper: {
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
        <Grid item xs={5}>
        <Paper elevation={0} className={classes.rpaper}>
          {/* <Slider
            aria-label="custom thumb label"
            color="primary"
            defaultValue={60}
            track="normal"//"inverted"//"normal"// 
            valueLabelDisplay="auto"
          /> */}
          <Slider
                // id="difficulty"
              value={typeof value === 'number' ? value : parseInt(props.dataOne)}
              onChange={handleSliderChange}
              defaultValue={props.dataOne}
            //   aria-labelledby="input-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
          />
        </Paper>
        </Grid>
        <Grid item xs={3}>
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
          </Grid>
      </Grid>
    </>
  )
}

export default DataSlider;