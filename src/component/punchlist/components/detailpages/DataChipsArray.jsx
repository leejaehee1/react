import React, { useEffect } from 'react';
import { makeStyles, createTheme, ThemeProvider  } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


import Typography from '@material-ui/core/Typography';
import { PinDropSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(-2),
    marginTop: 3,
    marginBottom: -1,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const theme = createTheme({
  typography: {
    htmlFontSize: 33,
  },
})

export default function DataChipsArray(props) {
  const classes = useStyles();
  let targetData = [
    { key: 0, label: props.keyOne },
    { key: 1, label: props.keyTwo },
    { key: 2, label: props.keyThree },
    { key: 3, label: props.keyFour },
    // { key: 4, label: 'buildin' },
  ];
  const [chipData, setChipData] = React.useState([
    { key: 0, label: props.keyOne },
    { key: 1, label: 'cable-list' },
    { key: 2, label: props.keyOne },
    { key: 3, label: 'piping-tablelist' },
    // { key: 4, label: 'buildin' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  useEffect(()=> {
    // console.log(22)
    setChipData(targetData)
  }, [props])
  let icon = <AddCircleOutlineIcon />
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h5">Keyword</Typography>
      </ThemeProvider>
      <Paper elevation={0} component="ul" className={classes.root}>
        {chipData.map((data) => {

          // if (data.label === 'Punch Keyword') {
          //   icon = <TagFacesIcon />;
          // }
          
          if (data.label) {
            return (
              <li key={data.key}>
                <Chip
                  // variant="outlined"
                  size="small"
                  // icon={icon}
                  label={data.label}
                //   onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                  onDelete={handleDelete(data)}
                  className={classes.chip}
                />
              </li>
            );
          }

        })}
        <AddCircleOutlineIcon fontSize="small" style={{marginTop:'6px', marginLeft:'5px'}} />
        {/* <Chip
                  // variant="outlined"
                  size="small"
                  icon={icon}
                  // label='asdf'
                //   onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                  className={classes.chip}
                /> */}
      </Paper>
    </>
  );
}
