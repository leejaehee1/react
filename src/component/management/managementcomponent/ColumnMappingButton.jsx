import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TableColumns from './TableColumns';
import ExcelColumns from './ExcelColumns';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import './styles/excelcolumns.css'

//alert
import { Alert, AlertTitle } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  baseButton: {
      color: '#607d8b',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    // width: 400,
    // height: 600,
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


const ColumnMappingButton = (props) => {
  const classes = useStyles();
  const [excelHook, setexcelHook] = React.useState(props.excelColumns);
  const [sqlHook, setSqlHook] = React.useState("");
  const [sqlHooks, setSqlHooks] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const [modalFlag, setModalFlag] = React.useState(true)
  const [excelChangedHook, setExcelChangedHook] = React.useState("")


  const [checkExcelToTable, setCheckExcelToTable] = React.useState(false)

  //alert
  const [alertOpen, setAlertOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
    setModalFlag(false)
    return () => {
    // console.log("open :"+open)
    // console.log("modalFlag :"+modalFlag)
  }
  };

  const handleClose = () => {
    setOpen(false);
    setModalFlag(true)
    setAlertOpen(false);
    // console.log(open)
    // console.log(modalFlag)
  };

  const handleCloseApply = () => {
    console.log(excelChangedHook)
    if (!excelChangedHook.includes('projectID') || !excelChangedHook.includes('punchID')){
      // alert('PK 포함 안되어 있다. 아무 반응 없다.');
      setAlertOpen(true)
      return null
    }
    setOpen(false);
    setModalFlag(true);
    setAlertOpen(false);
    // console.log(open)
    // console.log(modalFlag)
    // console.log("ApplyApplyApplyApplyApplyApplyApplyApplyApplyApplyApplyApplyApplyApplyApplyApplyApplyApplyApply")
    // console.log(excelChangedHook)
    props.onApply(excelChangedHook)
    
  };

  useEffect(() => {

    // console.log("excelChangedHook")
    // console.log(excelChangedHook)
    // if (modalFlag) {
    //   console.log("끌때 들어와라")
    //   props.onexcelChangedColumns(excelChangedHook)
    //   console.log(excelChangedHook)
    // }
    props.onexcelChangedColumns(excelChangedHook)
  }, [modalFlag, excelChangedHook])

  const updateColumn = (tableColumn) => {
    setSqlHook(tableColumn)
  }

  const updateColumns = (tableColumns) => {
    setSqlHooks(tableColumns)
  }

  useEffect(()=> {
    props.compareDbColumns(sqlHooks)
  }, [sqlHooks])

  const changeColumn = (excelChangedup) => {
    setExcelChangedHook(excelChangedup)
    // console.log("changedcolumn111111111111111111111111")
    // console.log("excelChangedup")
    // console.log(excelChangedup)
    // if (modalFlag) {
    //   console.log("changedcolumn3333333333333333333333")
    // }
    props.onexcelChangedColumns(excelChangedup)
    // setExcelChangedHook(excelChangedup)

  }


  return (
    <>
      <Button className={classes.baseButton} variant="outlined" style={{textTransform: 'none'}} onClick={handleClickOpen}>
        <b>Column Mapping</b>
      </Button>
      <Dialog 
        onClose={handleClose} 
        aria-labelledby="customized-dialog-title" 
        open={open}
        fullWidth={true} 
        maxWidth="lg"     // xs, sm, md, lg, xl
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Column Mapping
        </DialogTitle>
        <DialogContent dividers>
        <Collapse in={alertOpen}>
          <Alert severity="error" onClose={() => {setAlertOpen(false)}}>This is an error alert — check Primary-Key columns!</Alert>
          {/* <Alert severity="warning">This is a warning alert — check it out!</Alert> */}
          {/* <Alert severity="info">This is an info alert — check it out!</Alert> */}
          {/* <Alert severity="success">This is a    alert — check it out!</Alert> */}
          {/* <Alert onClose={() => {setAlertOpen(false)}}>This is a success alert — check it out!</Alert> */}
        </Collapse>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={0}>
                {/* <Typography gutterBottom>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </Typography>
                <Typography gutterBottom>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </Typography> */}
                <ExcelColumns 
                    excelColumns={excelHook} 
                    sqlHook={sqlHook} 
                    sqlHooks={sqlHooks} 
                    onLogic={changeColumn} 
                    setCheckExcelToTable={setCheckExcelToTable} 
                    // setAlertOpen={setAlertOpen}
                />
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper} elevation={0}>
                <KeyboardBackspaceIcon style={{ fontSize: 80 }} />
              </Paper>
            </Grid>
            <Grid item xs={4} elevation={0}>
              <Paper className={classes.paper} elevation={0}>
                {/* <Typography gutterBottom>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </Typography> */}
                <TableColumns onTable={updateColumn} onTables={updateColumns} checkExcelToTable={checkExcelToTable} /> 
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button autoFocus onClick={handleCloseApply} color="primary">
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ColumnMappingButton;