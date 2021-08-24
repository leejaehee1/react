import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

// slider
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';




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

function DataSlider() {
  const classes = useStyles();

  function onChange(e, v) {
    console.log(e) // event
    console.log(v) // 숫자
  }

  return (
    <>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={4}>
        <Paper elevation={0} className={classes.lpaper}>
          <ThemeProvider theme={theme}>
            <Typography variant="h5">Difficulty</Typography>
          </ThemeProvider>
        </Paper>
        </Grid>
        <Grid item xs={8}>
        <Paper elevation={0} className={classes.rpaper}>
          <Slider
            // ValueLabelComponent={ValueLabelComponent}
            // ValueLabelComponent={
            //   <Tooltip open={true} enterTouchDelay={0} placement="top" title="slider">
            //     {/* {children} */}
            //     <button>adsf</button>
            //   </Tooltip>
            // }
            aria-label="custom thumb label"
            color="primary"
            // color="secondary"
            defaultValue={20}
            // onChange={onChange}
            track="normal"//"inverted"//"normal"// 
            valueLabelDisplay="auto"
          />
        </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper elevation={0} className={classes.lpaper}>
          <ThemeProvider theme={theme}>
            <Typography variant="h5">Schedule Impact</Typography>
          </ThemeProvider>
        </Paper>
        </Grid>
        <Grid item xs={8}>
        <Paper elevation={0} className={classes.rpaper}>
          <Slider
            aria-label="custom thumb label"
            color="primary"
            defaultValue={90}
            track="normal"//"inverted"//"normal"// 
            valueLabelDisplay="auto"
          />
        </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper elevation={0} className={classes.lpaper}>
          <ThemeProvider theme={theme}>
            <Typography variant="h5">Cost Impact</Typography>
          </ThemeProvider>
        </Paper>
        </Grid>
        <Grid item xs={8}>
        <Paper elevation={0} className={classes.rpaper}>
          <Slider
            aria-label="custom thumb label"
            color="primary"
            // color="secondary"
            defaultValue={60}
            // onChange={onChange}
            track="normal"//"inverted"//"normal"// 
            valueLabelDisplay="auto"
          />
        </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default DataSlider;