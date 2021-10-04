import React from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      justifyContent: 'space-between',
      paddingTop: 10
    },
    paper: {
      padding: theme.spacing(1.5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

    divider: {
      margin: theme.spacing(2, 0),
    },
  }));

const DetailHistoryComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper style={{padding: '15px'}}>
                <p>History Data Logic</p>
            </Paper>
        </div>
    )
}

export default DetailHistoryComponent;