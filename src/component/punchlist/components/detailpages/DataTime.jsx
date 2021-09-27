import React from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


// 추가
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { PROPERTY_TYPES } from '@babel/types';
// css
// import { createMuiTheme } from "@material-ui/core";
// import { DateTimePicker } from "@material-ui/pickers";


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
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  lpaper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  rpaper: {
    padding: theme.spacing(0),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(0),
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



const defaultMaterialTheme = createTheme({
  typography: {
    htmlFontSize: 20,
  },
});


function DataTime(props) {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    // const [selectedDate, setSelectedDate] = React.useState(new Date('2021-07-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    return (
        <>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={3}>
            {/* elevation={0} */}
              <Paper elevation={0} className={classes.lpaper}>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5">Target Date</Typography>
                </ThemeProvider>
              </Paper>
            </Grid>
            <Grid item xs={9} spacing={-2}>
              <Paper elevation={0} className={classes.rpaper}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  {/* // https://material-ui-pickers.dev/api/DatePicker */}
                  <ThemeProvider theme={defaultMaterialTheme}>
                    <KeyboardDatePicker
                      disableToolbar
                      // variant="inline"
                      format="yyyy/MM/dd"
                      //inputVariant="filled"  // outlined // standard
                      // margin="normal"
                      id="date-picker-inline"
                      // label="Date picker inline"
                      value={props.dataOne?.targetDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </ThemeProvider>
                </MuiPickersUtilsProvider>
              </Paper>
            </Grid>
          </Grid>
        </>
    )
}

export default DataTime;