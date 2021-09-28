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

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


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
    const targetData = useRef(data? data : [])
    const [ dbColumns, setDbColumns ] = useState([])
    // const [checkedClickColumns, setCheckedClickColumns] = useState("")

  

    var isEmpty = function(value){ 
        if(  value == null || value == undefined){
            // || ( value != null && typeof value == "object" && !Object.keys(value).length )  
            return true 
        }else{ 
            return false 
        } 
    }
    // const dbColumnvalue = (targetData.current)? Object.keys(Object.values(targetData.current)[0]) : targetData.current;
    const dbColumnvalue = (isEmpty(targetData.current))? [] : Object.keys(Object.values(targetData.current)[0]);

    
    useEffect(() => {
        setDbColumns(()=>dbColumnvalue)
        // if(props.checkExcelToTable){
        //     setCheckTableColumn("")
        // }
    }, [])

    useEffect(() => {
        setCheckTableColumn("")
    }, [props.checkExcelToTable])

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
        // if(checkedClickColumns === e.target.innerHTML) {
            
        // } else {
        //     setCheckedClickColumns(e.target.innerHTML)
        // }
    }

    useEffect(() => {
        props.onTable(checkTableColumn)
        props.onTables(dbColumnvalue)
    }, [checkTableColumn])

    return (
        <>
            <h1>Table Columns</h1>
            {/* {checkTableColumn} */}
            {/* {checkedClickColumns} */}
            <TableContainer className={classes.table} component={Paper}>
                <Table aria-label="select all desserts">
                    <TableHead>
                        <TableRow>
                        <StyledTableCell>DB columns</StyledTableCell>
                        {/* 가상 columns */}
                        <StyledTableCell align="right"></StyledTableCell> 
                        {/* <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {dbColumns.slice(0, 40).map((row) => ( */}
                        {dbColumnvalue.slice(0, 40).map((row) => (
                            <>
                            { row===checkTableColumn?
                                <StyledTableRow hover key={row} onClick={checka} style={{background: "#e0e0e0"}}>
                                    <StyledTableCell component="th" scope="row">
                                        {row}  
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {row==='projectID' || row==='punchID'?
                                                <Chip avatar={<Avatar>PK</Avatar>} label="Check Required" />
                                            :
                                                null
                                        }
                                    </StyledTableCell>
                                </StyledTableRow>
                                :
                                <StyledTableRow hover key={row} onClick={checka} >
                                    <StyledTableCell component="th" scope="row">
                                        {row}  
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {row==='projectID' || row==='punchID'?
                                                <Chip avatar={<Avatar>PK</Avatar>} label="Check Required" />
                                            :
                                                null
                                        }
                                    </StyledTableCell>
                                </StyledTableRow>
                            }
                            </>


                            // <StyledTableRow hover key={row} onClick={checka} style={{background: "#e0e0e0"}}>
                            //     <StyledTableCell component="th" scope="row">
                            //         {row}  
                            //     </StyledTableCell>
                            //     <StyledTableCell align="left">
                            //         {row==='projectID' || row==='punchID'?
                            //                 <Chip avatar={<Avatar>FK</Avatar>} label="Check Required" />
                            //             :
                            //                 null
                            //         }
                            //     </StyledTableCell>
                            // </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableColumns;