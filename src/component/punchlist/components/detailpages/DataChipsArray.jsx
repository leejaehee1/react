import React, { useEffect, useState, useRef } from 'react';
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
  // const [typingKeyword, setTypingKeyword] = useState('');
  const typingKeyword = useRef('');

  let targetData = [
    { key: 0, label: props.keyOne },
    { key: 1, label: props.keyTwo },
    { key: 2, label: props.keyThree },
    { key: 3, label: props.keyFour },
    // { key: 4, label: 'buildin' },
  ];
  const [chipData, setChipData] = React.useState([]);

  const changeInput = (e) => {
    // setTypingKeyword(e.target.value)
    typingKeyword.current = e.target.value
    return ()=> {
    }
  }

  const handleAddTag = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // setTypingKeyword('');
    typingKeyword.current = '';
  };
  
  const handleSaveClose = () => {
    setOpen(false);

    let targetIdx=-1;
    // 0~3 사이에 포함이 되는가? [0, 1, 2, 3] 
    // 있으면 통과 없으면 alert 후에 끝! 추가 불가.
    // => for문으로 0부터 하나씩 뽑는다.
    let chipKeys = chipData.map((d)=> d.key)
    // console.log(chipKeys)
    // console.log(Object.values(chipData))
    for (var i of [0, 1, 2, 3]){
      // console.log('aaaaaaaaaaaaaaaaaaaaaaaa')
      // console.log(i)
      if(chipKeys.includes(i)){
        // console.log('포함');
        // datachip하나씩 돌리다가 key부분이 같다면 label을 찾아보자.
        chipData.map((rD) => {
          // if(rD){}
          // console.log(rD)
          if(rD['key']===i){
            // console.log('1차들어옴')
            if(rD['label']){}else{
              // console.log('드렁옴??')
              if (targetIdx===-1){
                targetIdx = i;
              }
              // break;
            }
          }
        });
        // break;
      } else {
        // console.log('불포함');
        targetIdx = i;
        break
      }
    }

    console.log('targetIdx')
    console.log(targetIdx)


    var flag = false
    var flagData;
    let newArr = chipData.map((value, index)=> {
      if (Number(index) === Number(targetIdx)) {
        if (value.key===Number(index)) {
          return {...value, label:typingKeyword.current}
        } else {
          flag = true
          flagData = {key:index, label:typingKeyword.current}
          return 
        }
      } else {
        return value
      }
    })
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
        {/* {JSON.stringify(chipData)} */}
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
        {/* <DialogTitle id="form-dialog-title">Create a new keyword</DialogTitle> */}
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
            label="Create a new Keyword"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveClose} color="primary">
            add
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
