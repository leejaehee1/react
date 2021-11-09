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

// search Icon
import HttpsIcon from '@material-ui/icons/Https';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import FindInPageIcon from '@material-ui/icons/FindInPage';

import './styles/excelcolumns.css'


//alert
import { Alert, AlertTitle } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';



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
    // // console.log("--------------------------------------------------------")
    // // console.log(props)  // {excelColumns: Array(17), sqlHook: "unit"}
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
    const excelChangedInit = useRef(props.excelColumns)
    const eTargetId = useRef("")
    const [deleteAlertOpen, setDeleteAlertOpen] = useState(false)

    // // console.log(sqlColumnDatas)
    // // console.log(props.sqlHooks)


    // dbcolumns logic
    var isEmpty = function(value){ 
        if(  value == null || value == undefined){
            // || ( value != null && typeof value == "object" && !Object.keys(value).length )  
            return true 
        }else{ 
            return false 
        } 
    }
    const { data, ids } = useGetList('list', );
    const targetData = useRef(data? data : [])
    const dbColumnvalue = (isEmpty(targetData.current))? [] : Object.keys(Object.values(targetData.current)[0]);


    const deleteCheck= (e) => {

        // console.log(e.target.id)
        if (e.target.id) {
            eTargetId.current = e.target.id
            // console.log(1)

        } else {
            // alert('Please Click slowly. Loading...')
            setDeleteAlertOpen(true)
        }

        try{
            let deleteIdData = deleteArray.map((v, i) => {
                // // console.log(i);
                if(i===parseInt(eTargetId.current)){
                    // return !v
                    // // console.log("들어오니")
                    return !v
                }else{
                    return v
                }});
                // // console.log(deleteIdData)
                // // console.log(deleteArray)
                setDeletArray(deleteIdData)
        }catch(e){console.log(deleteArray)}
        // // console.log(deleteArray)
        return () => {
            setDeletId(false);
        }
    }

    function idCheck(e) {
        setTargetId(() => {
            return e.target.id
        })
    }
    // Jira TEST
    
    const accdd = () => {
        // // console.log("excelChangedInit.current111111111111111111111")
        // // console.log(excelChangedInit.current)
        // // console.log(beChangeArray)
        // beChangeArray.map((b, index) => {
        //     if (b) {
        //         excelChangedInit.current[index] = b
        //     }
        // })
        props.onLogic(excelChangedInit.current)
    }


    useEffect(() => {         //////////////////////////////////////////////
        if (excelChangedInit){
            const b = excelChangedInit.current.map((v, i) => 
            {if (deleteArray[i]) {
                if (beChangeArray[i]) {
                    return beChangeArray[i]
                } else {
                    return v
                }
            } else {
                // return v
            }
            // // console.log(1111111111111111111111111111111)
        }
        )
            // // console.log(b)
            excelChangedInit.current=b
        }
        accdd()
        // return () => {
        //     // setExcelChangedInit(excelChangedInit)
        // }
    }, [deleteId, targetId, deleteArray])

    useEffect(() => {
        // setExcelColumnArray(props.excelColumns)
        // setSqlColumnData(sqlHook)
        if ( sqlColumnData &&  targetId ) {
            
            const inputData = beChangeArray
            inputData[targetId] = sqlColumnData
            setBeChangeArray(inputData)
            setTargetId(false)
            setSqlColumnData(false)
            props.setCheckExcelToTable(true)

            
        }
        return () => {
            props.setCheckExcelToTable(false)
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
        // if (sqlColumnDatas.includes(props.row)) {
    // }
        return 
            <>
                안나와?
            </>
        
    }

    // const [alertOpen, setAlertOpen] = useState(true);

    const searchMappingColumns = () => {
        alert("autoMapping을 시작합니다")
        // // console.log(dbColumnvalue)
        // // console.log(excelChangedInit.current)



        let updateSampleData = []
        for (var excelCol of excelChangedInit.current) {
            // // console.log(excelCol.toLowerCase())
            // // console.log(excelCol)
            for (var DbCol of dbColumnvalue) {
                if (excelCol.toLowerCase() === DbCol.toLowerCase()){
                    updateSampleData.push(DbCol);
                    break;
                }else {
                    if(DbCol === dbColumnvalue[dbColumnvalue.length-1]){
                        updateSampleData.push(excelCol);
                        break;
                    }
                }
            }
        }
        // // console.log(excelChangedInit.current)
        excelChangedInit.current = updateSampleData
        // // console.log(excelChangedInit.current)
        accdd()
        setExcelColumnArray(excelChangedInit.current)
        // return () => {
        // }

    }

    return (
        <>  
            <Collapse in={deleteAlertOpen}>
                <Alert severity="error" onClose={() => {setDeleteAlertOpen(false)}}>Please Click slowly. — Loading.....</Alert>
            </Collapse>
            <h1>Excel Columns  &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="excelColumns" onClick={searchMappingColumns}><FindInPageIcon placement="button-start" />AutoMapping</button></h1>
            {/* <Collapse in={alertOpen}>
                <Alert severity="error">This is an error alert — check it out!</Alert>
                <Alert severity="warning">This is a warning alert — check it out!</Alert>
                <Alert severity="info">This is an info alert — check it out!</Alert>
                <Alert severity="success">This is a    alert — check it out!</Alert>
                <Alert onClose={() => {setAlertOpen(false)}}>This is a success alert — check it out!</Alert>
            </Collapse> */}
            {/* <p>{"deleteId  :  " + deleteId}</p>
            <p>{"targetId  :  " + targetId}</p>
            <p>{"sqlHook  :  " + props.sqlHook}</p>
            <p>{"sqlColumnData  :  " + sqlColumnData}</p>
            <p>{"deleteArray  :  " + deleteArray}</p>
            <p>{"beChangeArray  :  " + beChangeArray}</p> */}
            {/* <p>{"excelChangedInit  :  " + excelChangedInit.current}</p> */}
            {/* <p>{"excelColumnArray  :  " + excelColumnArray}</p> */}
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

                    {/* import HttpsIcon from '@material-ui/icons/Https';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'; */}
                        {excelColumnArray.map((row, id) => (
                            <>
                                {id===parseInt(targetId)?
                                        <StyledTableRow hover key={row} style={{background: "#e0e0e0"}}>
                                            <StyledTableCell component="th" scope="row">
                                                {/* <handleOriginal rowData={row} />
                                                <handleOriginal /> */}
                                                {/* {row.name} */}
                                                {row}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                                {(props.sqlHooks.includes(row))? <DoneOutlineIcon />:
                                                    <>
                                                    {/* <HttpsIcon />
                                                    <HighlightOffIcon /> 
                                                    <NotInterestedIcon />
                                                    <RemoveCircleOutlineIcon /> */}
                                                    </>
                                                    }
                                                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<DoneOutlineIcon /> */}
                                            
                                            </StyledTableCell>
                                            <StyledTableCell align="middle" onClickCapture={deleteCheck} id={id}>
                                                {/* <DeleteIcon style={{ fontSize: 25 }} /><DeleteOutlineIcon style={{ fontSize: 25 }} /> */}
                                                <IconButton aria-label="delete" id={id}>
                                                    {(deleteArray[id]) ? 
                                                        <DeleteOutlineIcon id={id} style={{ fontSize: 25 }} /> 
                                                        : 
                                                        <DeleteIcon id={id} style={{ fontSize: 25 }} 
                                                    /> }
                                                    {/* <DeleteIcon /> */}
                                                </IconButton>
                                            </StyledTableCell>
                                            <StyledTableCell align="right" onClick={idCheck} id={id}>
                                                {beChangeArray[id]}
                                            </StyledTableCell>
                                            {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                            <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                                        </StyledTableRow>
                                    :
                                    <StyledTableRow hover key={row} >
                                        <StyledTableCell component="th" scope="row">
                                            {/* <handleOriginal rowData={row} />
                                            <handleOriginal /> */}
                                            {/* {row.name} */}
                                            {row}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                            {(props.sqlHooks.includes(row))? <DoneOutlineIcon />
                                            :
                                                <>
                                                    {/* <HttpsIcon />
                                                    <HighlightOffIcon /> 
                                                    <NotInterestedIcon />
                                                    <RemoveCircleOutlineIcon /> */}
                                                </> 
                                            } 
                                            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<DoneOutlineIcon /> */}
                                        
                                        </StyledTableCell>
                                        <StyledTableCell align="middle" onClickCapture={deleteCheck} id={id}>
                                            {/* <DeleteIcon style={{ fontSize: 25 }} /><DeleteOutlineIcon style={{ fontSize: 25 }} /> */}
                                            <IconButton aria-label="delete" id={id}>
                                                {(deleteArray[id]) ? 
                                                    <DeleteOutlineIcon id={id} style={{ fontSize: 25 }} /> 
                                                    : 
                                                    <DeleteIcon id={id} style={{ fontSize: 25 }} 
                                                /> }
                                                {/* <DeleteIcon /> */}
                                            </IconButton>
                                        </StyledTableCell>
                                        <StyledTableCell align="right" onClick={idCheck} id={id}>
                                            {beChangeArray[id]}
                                        </StyledTableCell>
                                        {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                        <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                                    </StyledTableRow>
                                }
                                
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}



export default ExcelColumns;