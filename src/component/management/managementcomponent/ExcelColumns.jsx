import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

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

const ExcelColumns = ({excelColumns, sqlHook}) => {
    const classes = useStyles();
    // console.log("--------------------------------------------------------")
    // console.log(props)  // {excelColumns: Array(17), sqlHook: "unit"}
    // excel 클릭한거 useState에 넣기
    // sqlHook이랑 excel click 둘다 값이 있으면, excel columns에 넣기. 이때 가상 배열 하나 (excel 값들어올 때마다 추가) 만들어 두자
    const [excelColumnArray, setExcelColumnArray] = React.useState(excelColumns)
    const [sqlColumnData, setSqlColumnData] = React.useState(sqlHook)
    const dummyArray = new Array(excelColumns.length)
    const [beChangeArray, setBeChangeArray] = React.useState(dummyArray)
    const [targetId, setTargetId] = React.useState(false)
    const [deleteArray, setDeletArray] = React.useState(1)


    function deleteCheck(e) {
        // console.dir(e)
        // console.dir(deleteArray)
        const deleteIndex = e.target.id
        // console.dir(deleteIndex)
        setDeletArray(() => {
            return deleteIndex
        })
        console.log(deleteArray)
    }

    function idCheck(e) {
        // console.log("눌러짐")
        // const excelIndex = e.target.id
        setTargetId(() => {
            return e.target.id
        })
        // console.log(e.target.id)
        console.log(targetId)
    }

    useEffect(() => {
        setExcelColumnArray(excelColumns)
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
        setSqlColumnData(sqlHook)
    }, [sqlHook])

    return (
        <>
            <h1>Excel Columns</h1>
            <p>{"deleteArray  :  " + deleteArray}</p>
            <p>{"targetId  :  " + targetId}</p>
            <p>{"sqlHook  :  " + sqlHook}</p>
            <p>{"sqlColumnData  :  " + sqlColumnData}</p>
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
                                {/* {row.name} */}
                                {row}
                                </StyledTableCell>
                                <StyledTableCell align="middle" onClick={deleteCheck} id={id}><DeleteIcon style={{ fontSize: 25 }} /></StyledTableCell>
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