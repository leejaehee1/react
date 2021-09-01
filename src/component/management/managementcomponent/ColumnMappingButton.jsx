import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  baseButton: {
      color: '#607d8b',
  }
}));

const ColumnMappingButton = () => {
  const classes = useStyles();
  return (
    <>
      <Button className={classes.baseButton} variant="outlined" style={{textTransform: 'none'}} >
        <b>Column Mapping</b>
      </Button>
    </>
  )
}

export default ColumnMappingButton;