import React, { useEffect, useRef, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useGetList } from 'react-admin';
import { PROPERTY_TYPES } from '@babel/types';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //   '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.action.hover,
    //   },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 300,
      maxHeight: 500,
      height: "25%"
    //   maxHeight: 500,
    },
  });

const TableColumns = (props) => {
    const classes = useStyles();
    
    const [checkTableColumn, setCheckTableColumn] = React.useState("")

    const { data, ids } = useGetList('list', );
    // const [ targetData, setTargetData ] = useState(data)
    const targetData = useRef(data)
    const [ dbColumns, setDbColumns ] = useState([])


    var isEmpty = function(value){ 
        if(  value == null || value == undefined){
            // || ( value != null && typeof value == "object" && !Object.keys(value).length )  
            return true 
        }else{ 
            return false 
        } 
    }
    // const dbColumnvalue = (targetData.current)? Object.keys(Object.values(targetData.current)[0]) : targetData.current;
    const dbColumnvalue = (isEmpty(targetData.current))? targetData.current : Object.keys(Object.values(targetData.current)[0]);

    
    useEffect(() => {
        setDbColumns(()=>dbColumnvalue)
    }, [])

    useEffect(()=> {
        targetData.current = data
        setDbColumns(() => {
            if (data) {
                Object.keys(Object.values(dbColumnvalue)[0])
            }
        })
    }, [data, targetData])

    function checka(e) {
        setCheckTableColumn(() => {
            return e.target.innerHTML
        })
    }

    useEffect(() => {
        props.onTable(checkTableColumn)
    }, [checkTableColumn])

    return (
        <>
            <h1>Table Columns</h1>
            <TableContainer className={classes.table} component={Paper}>
                <Table aria-label="select all desserts">
                    <TableHead>
                        <TableRow>
                        <StyledTableCell>DB columns</StyledTableCell>
                        {/* <StyledTableCell align="right">Calories</StyledTableCell> */}
                        {/* <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {dbColumns.slice(0, 40).map((row) => ( */}
                        {dbColumnvalue.slice(0, 40).map((row) => (
                            <StyledTableRow hover key={row} onClick={checka}>
                                <StyledTableCell component="th" scope="row">
                                {row}
                                </StyledTableCell>
                                {/* <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableColumns;