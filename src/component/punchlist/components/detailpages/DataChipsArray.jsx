import React from 'react';
import { makeStyles, createTheme, ThemeProvider  } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

import Typography from '@material-ui/core/Typography';

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

export default function DataChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Punch Keyword' },
    { key: 1, label: 'hydro' },
    { key: 2, label: 'cable-list' },
    { key: 3, label: 'piping-tablelist' },
    { key: 4, label: 'buildin' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h5">Keyword</Typography>
      </ThemeProvider>
      <Paper elevation={0} component="ul" className={classes.root}>
        {chipData.map((data) => {
          let icon;

          if (data.label === 'Punch Keyword') {
            icon = <TagFacesIcon />;
          }

          return (
            <li key={data.key}>
              <Chip
                variant="outlined"
                size="small"
                icon={icon}
                label={data.label}
              //   onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                onDelete={handleDelete(data)}
                className={classes.chip}
              />
            </li>
          );
        })}
      </Paper>
    </>
  );
}
