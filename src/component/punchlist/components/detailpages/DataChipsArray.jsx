import React, { useEffect, useState } from 'react';
import { makeStyles, createTheme, ThemeProvider  } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

// open dialog
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Typography from '@material-ui/core/Typography';
import { PinDropSharp } from '@material-ui/icons';
import { isTemplateElement } from '@babel/types';

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
  const [open, setOpen] = useState(false);
  const [typingKeyword, setTypingKeyword] = useState('');

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

  const changeInput = (e) => {
    setTypingKeyword(e.target.value)
    return ()=> {
    }
  }

  const handleAddTag = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTypingKeyword('');
  };
  
  const handleSaveClose = () => {
    setOpen(false);
    let targetLabel;
    for(let a of chipData) {
      if (a.label){
      } else{
        targetLabel = a.key
        break;
      }
    }
    
    let targetKey;
    for(let i in chipData){
      if(chipData[i].key===i){
      }else {
        targetKey = i
        break
      }
    }

    let finalTarget;
    if(targetLabel < targetKey){
      finalTarget = targetLabel
    }else{
      finalTarget = targetKey
    }

    // console.log(targetLabel);
    // console.log(targetKey);
    // console.log('finalTarget');
    // console.log(finalTarget);
    // console.log(chipData)
    // console.log(typingKeyword)
    // console.log(targetKey)
    var flag = false
    let flagData;
    let newArr = chipData.map((value, index)=> {
      console.log('start')
      console.log(index)
      console.log(finalTarget)
      console.log(value.key)
      if (Number(index) === Number(finalTarget)) {
        console.log('들어왔다.')
        if (value.key===index) {
          console.log(11)
          return {...value, label:typingKeyword}
        } else {
          flag = true
          flagData = {key:index, label:typingKeyword}
          console.log(22)
          return 
        }
      } else {
        return value
      }
    })
    console.log(newArr)
    console.log(flagData)
    setChipData(newArr)
    if (flag){
      setChipData([...chipData, flagData])
      flag = false
    }

  }



  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    // console.log(chipData)
  };

  useEffect(()=> {
    // console.log(22)
    setChipData(targetData)
  }, [props])
  let icon = <AddCircleOutlineIcon />



  // const handleAddTag = (id: Identifier) => {
  //   const tags: Identifier[] = [...record.tags, id];
  //   update('contacts', record.id, { tags }, record);
  //   setAnchorEl(null);
  // };


  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h5">Keyword</Typography>
      </ThemeProvider>
      <Paper elevation={0} component="ul" className={classes.root}>
        {JSON.stringify(chipData)}
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
        <AddCircleOutlineIcon 
            fontSize="small" 
            style={{marginTop:'6px', marginLeft:'5px', cursor: 'pointer'}} 
            onClick={() => handleAddTag()}
        />
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a new keyword</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            onChange= {changeInput}
            margin="dense"
            id="name"
            label="Keyword"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveClose} color="primary">
            add keyword
          </Button>
        </DialogActions>
      </Dialog>
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
