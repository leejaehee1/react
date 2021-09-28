import React, { useEffect, useRef, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { PROPERTY_TYPES } from '@babel/types';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';



import { useGetList } from 'react-admin';

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
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const useStyles = makeStyles({
    table: {
      minWidth: 400,
      maxWidth: 600,
      maxHeight: 500,
    },
  });


const ExcelColumns = (props) => {
    const classes = useStyles();
    // console.log("--------------------------------------------------------")
    // console.log(props)  // {excelColumns: Array(17), sqlHook: "unit"}
    // excel 클릭한거 useState에 넣기
    // sqlHook이랑 excel click 둘다 값이 있으면, excel columns에 넣기. 이때 가상 배열 하나 (excel 값들어올 때마다 추가) 만들어 두자
    const [excelColumnArray, setExcelColumnArray] = React.useState(props.excelColumns)
    const [sqlColumnData, setSqlColumnData] = React.useState(props.sqlHook)
    const [sqlColumnDatas, setSqlColumnDatas] = React.useState(props.sqlHooks)
    const dummyArray = new Array(props.excelColumns.length)
    const [beChangeArray, setBeChangeArray] = React.useState(dummyArray)
    const [targetId, setTargetId] = React.useState(false)
    const [deleteId, setDeletId] = React.useState(false)
    const dummyDeleteArray = new Array(props.excelColumns.length)
    const [deleteArray, setDeletArray] = React.useState(dummyDeleteArray.fill(true))
    // const [excelChangedInit, setExcelChangedInit] = React.useState(props.excelColumns)
    const excelChangedInit = useRef(props.excelColumns)

    console.log(sqlColumnDatas)
    console.log(props.sqlHooks)


    function deleteCheck(e) {
        setDeletId(() => {
            return e.target.id
        })
    }

    function idCheck(e) {
        setTargetId(() => {
            return e.target.id
        })
    }
    // Jira TEST
    
    const accdd = () => {
        // console.log("excelChangedInit.current111111111111111111111")
        // console.log(excelChangedInit.current)
        // console.log(beChangeArray)
        // beChangeArray.map((b, index) => {
        //     if (b) {
        //         excelChangedInit.current[index] = b
        //     }
        // })
        props.onLogic(excelChangedInit.current)
    }


    useEffect(() => {
        const deleteIdData = deleteArray
        deleteIdData[deleteId] = !deleteIdData[deleteId]
        setDeletArray(() => 
            deleteIdData
        )
        setDeletId(false)
 
    }, [deleteId])

    useEffect(() => {         //////////////////////////////////////////////
        if (excelChangedInit){
            const b = props.excelColumns.map((v, i) => 
            {if (deleteArray[i]) {
                if (beChangeArray[i]) {
                    return beChangeArray[i]
                } else {
                    return v
                }
            } else {
                // return v
            }
            // console.log(1111111111111111111111111111111)
        }
        )
            // console.log(b)
            excelChangedInit.current=b
        }
        accdd()
        // return () => {
        //     // setExcelChangedInit(excelChangedInit)
        // }
    }, [deleteId, targetId])

    useEffect(() => {
        setExcelColumnArray(props.excelColumns)
        // setSqlColumnData(sqlHook)
        if ( sqlColumnData &&  targetId ) {
            
            const inputData = beChangeArray
            inputData[targetId] = sqlColumnData
            setBeChangeArray(inputData)
            setTargetId(false)
            setSqlColumnData(false)

            
        }
    }, [targetId, sqlColumnData])


    useEffect(() => {
        setSqlColumnData(props.sqlHook)
    }, [props.sqlHook])

    // const { data, ids } = useGetList('list', );
    // const targetData = useRef(data? data : [])
    // const dbColumnvalue = (isEmpty(targetData.current))? [] : Object.keys(Object.values(targetData.current)[0]);


    const [originalFlag, setOriginalFlag] = useState(false)
    const handleOriginal = (props) => {
        // setOriginalFlag(false)
        console.log(props.row)
        // if (sqlColumnDatas.includes(props.row)) {
    // }
        return 
            <>
            안나와?
            </>
        
    }

    return (
        <>
            <h1>Excel Columns</h1>
            <p>{"deleteId  :  " + deleteId}</p>
            <p>{"targetId  :  " + targetId}</p>
            <p>{"sqlHook  :  " + props.sqlHook}</p>
            <p>{"sqlColumnData  :  " + sqlColumnData}</p>
            <p>{"deleteArray  :  " + deleteArray}</p>
            <p>{"beChangeArray  :  " + beChangeArray}</p>
            <p>{"excelChangedInit  :  " + excelChangedInit.current}</p>
            <TableContainer className={classes.table} component={Paper}>
                <Table aria-label="select all desserts">
                    <TableHead>
                        <TableRow>
                        <StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Original</StyledTableCell>
                        <StyledTableCell align="middle">Delete</StyledTableCell>
                        <StyledTableCell align="middle">Be Changed</StyledTableCell>
                        {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {excelColumnArray.map((row, id) => (
                            <StyledTableRow hover key={row}>
                                <StyledTableCell component="th" scope="row">
                                    {/* <handleOriginal rowData={row} />
                                    <handleOriginal /> */}
                                {/* {row.name} */}
                                {row}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {(props.sqlHooks.includes(row))? <DoneOutlineIcon />:"(columns변경)" }
                                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<DoneOutlineIcon /> */}
                                
                                </StyledTableCell>
                                <StyledTableCell align="middle" id={id}>
                                    {/* <DeleteIcon style={{ fontSize: 25 }} /><DeleteOutlineIcon style={{ fontSize: 25 }} /> */}
                                    <IconButton aria-label="delete" onClick={deleteCheck} id={id}>
                                        {(deleteArray[id]) ? 
                                                <DeleteOutlineIcon onClick={deleteCheck} id={id} style={{ fontSize: 25 }} /> 
                                            : 
                                                <DeleteIcon onClick={deleteCheck} id={id} style={{ fontSize: 25 }} 
                                        /> }
                                        {/* <DeleteIcon /> */}
                                    </IconButton>
                                </StyledTableCell>
                                <StyledTableCell align="right" onClick={idCheck} id={id}>{beChangeArray[id]}</StyledTableCell>
                                {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}



export default ExcelColumns;