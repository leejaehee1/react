import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 15
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(0),
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  lpaper: {
    padding: theme.spacing(0),
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
    marginTop: theme.spacing(0),
  },
  udivider: {
    margin: theme.spacing(0, 0, -1, 0),
  },
  ddivider: {
    margin: theme.spacing(-1, 0, 0, 0),
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



const DataCheckBox = () => {
  const [checked, setChecked] = useState(true);
  const classes = useStyles();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }

  return (
    <div>

      <br />
        <Divider className={classes.udivider} />
      <br />
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={3}>
        {/* elevation={0} */}
          <Paper elevation={0} className={classes.lpaper}>
            <ThemeProvider theme={theme}>
              <Typography variant="h5">DesignChgReq</Typography>
            </ThemeProvider>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={0} className={classes.rpaper}>
            <Checkbox
              defaultChecked
              color="default"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={0} className={classes.lpaper}>
            <ThemeProvider theme={theme}>
              <Typography variant="h5">MaterialReq</Typography>
            </ThemeProvider>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={0} className={classes.rpaper}>
            <Checkbox
              defaultChecked
              color="default"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
          </Paper>
        </Grid>
      </Grid>

      <br />
        <Divider className={classes.ddivider} />
      <br />
    </div>
  )
}

export default DataCheckBox;