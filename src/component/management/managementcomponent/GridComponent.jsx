import React, {useEffect, useRef, useState} from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import XLSX from 'xlsx';
import Box from '@material-ui/core/Box';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

// color

import blueGrey from '@material-ui/core/colors/red';
import ColumnMappingButton from './ColumnMappingButton';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    rightButton: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 2,
        color: '#607d8b',
        borderColor: '#607d8b',
        height: 48,
        padding: '0 30px',
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    baseButton: {
        // width: 14    0,
        color: '#607d8b',
    },
    list: {
        width: 500,
    },
    fullList: {
        width: 'auto',
    },
  }));

const buttonColor = blueGrey[400]
const EXTENSIONS=['xlsx', 'xls', 'csv'] // 'xlsx', 'xls', 'csv' 세가지 파일만 들어가게 한다.
const GridComponent = () => {
    const classes = useStyles();


    const [colDefs, setColDefs] = useState([])
    const [data, setData] = useState()
    const excelChangedArray = useRef()
    const targetArrayRef = useRef()
    const updateColDefs = useRef()

    const getExention = (file) => {
        const parts=file.name.split('.')
        const extension = parts[parts.length-1]
        return EXTENSIONS.includes(extension)
    }

    const convertToJson=(headers, data)=>{
        const rows=[]
        data.forEach(row => {
            let rowData={}
            row.forEach((element, index)=>{
                rowData[headers[index]]=element
            })
            rows.push(rowData)
        });
        return rows
    }

    const importExcel=(e)=>{
        const file = e.target.files[0]

        const reader=new FileReader()
        reader.onload=(event)=> {    // onload는 비동기 때문에 적어주는 거다
            //parse data
            const bstr=event.target.result
            const workBook=XLSX.read(bstr, {type:"binary"})
            
            //get first sheet
            const workSheetName = workBook.SheetNames[0]
            const workSheet = workBook.Sheets[workSheetName]
            
            // convert to array
            const fileData = XLSX.utils.sheet_to_json(workSheet, {header:1})
                        
            const headers=fileData[0]  // columns만 추출
            const heads=headers.map(head=>({title:head, field:head}))
            setColDefs(heads)
            updateColDefs.current = heads
            

            // removing header
            fileData.splice(0, 1) // 엑셀 표에서 columns 제거.
            setData(convertToJson(headers,fileData)) 
        }

        if(file){
            if(getExention(file)){
                reader.readAsBinaryString(file)
            } else {
                alert("Invalid file input, selectExcel, CSV file")
            }
        }else{
            setData([])
            setColDefs([])
        }
    }

    function titleSelector(value) {
        return value.title
    }

    var isEmpty = function(value){ 
        if(  value == null || value == undefined){
            return true 
        }else{ 
            return false 
        } 
    };

    const [columnsData, setColumnsData] = useState()
        
    const onexcelChangedColumns = (excelChangedColumns) => {
        if (excelChangedColumns) {
            let a = excelChangedColumns
            excelChangedArray.current = a
            changeColDefs()
            setColDefs((updateColDefs.current===colDefs)?colDefs : targetArrayRef.current)
        }
    }
    
    useEffect(()=> {
        updateColDefs.current = colDefs
        setColumnsData(Object.values(colDefs).map((a) => a.title))
        excelChangedArray.current = Object.values(colDefs).map((a) => a.title)
    }, [colDefs])

    const changeColDefs = () => {
        const baseComparing = Object.values(colDefs).map((a) => a.title);
        let targetArray = []
        const compareColumnsData = []
        for (const a of excelChangedArray.current) {
            if (baseComparing.includes(a)) {
                let tergetObject = {title: a, field: a}
                targetArray.push(tergetObject)
                compareColumnsData.push(a)
            } else {
                console.log("없다")
            }
        }
        if (targetArray) {
            targetArrayRef.current = targetArray
        }
        setColDefs((targetArrayRef.current)? targetArrayRef.current : colDefs)
        return ()=> {

        }
    }


    const onApply = (applyData) => {
        const baseComparing = Object.values(colDefs).map((a) => a.title);
        let targetArray = []
        const compareColumnsData = []
        for (const a of applyData) {
            if (baseComparing.includes(a)) {
                let tergetObject = {title: a, field: a}
                targetArray.push(tergetObject)
                compareColumnsData.push(a)
            } else {
                console.log("없다")
            }
        }
        setColDefs(targetArray)

    }

    // drawer
    const [rightDrawerState, setRightDrawerState] = useState(false)
    const [anchor, setAnchor] =useState(false)
    // const [eachRowData, setEachRowData] = useState(["빈배열"])
    const eachRowData = useRef([])
    const [eachRowKData, setEachRowKData] = useState(["안넣으면k map error", "2번째k 리스트", "3번째kd 리스트"])
    const [eachRowVData, setEachRowVData] = useState(["안넣으면v map error", "2번째v 리스트", "3번째v 리스트"])
    const eachRowKeyData = useRef([])
    // const [eachRowValueData, setEachRowValueData] = useState([])
    const eachRowValueData = useRef([])

    const toggleDrawer = (open) => (event) => {
        // // if (event.type ==='keydown' && (event.key ==='Tab' || event.key === 'Shift')) {
        // //     return;
        // // }
        // console.log("adfasdf-------------------------------------------")
        // console.log(open)
        // console.log(event.target)
        // console.log(eachRowKeyData)
        console.log("toggleDrawertoggleDrawertoggleDrawertoggleDrawertoggleDrawertoggleDrawertoggleDrawer")
        console.log(eachRowKeyData)        // 여기가 닫을 때 로직입니다.
        console.log(eachRowValueData)
        setRightDrawerState(open);
    }

    useEffect(() => {
        console.log("98912319283612361923691823981")
    },[eachRowKeyData, eachRowValueData, eachRowData])

    // const drawerDataLogin = () => {
    //     let htmlKetArray = []
    //     var htmlValueArray = []
    //     for(var key in eachRowData){
    //         htmlKetArray.push(key)
    //         htmlValueArray.push(eachRowData[key])
    //     }
    //     console.log(htmlKetArray)
    //     console.log(htmlValueArray)
    //     setEachRowKeyData(()=>htmlKetArray)
    //     setEachRowValueData(()=>htmlValueArray)
    // }

    const detailUI = {
        Area : (
            <>
                <p>1 Area가 들어갔어요</p>
            </>
        ),
        PunchID : (
            <>
                <p>11 PunchId가 들어갔어요</p>
            </>
        ),
        idddd : (
            <>
                <p>111</p>
            </>
        )
    }

    const rowData = eachRowKData.map((rData, index) => 
            <div>
            <p>{rData} : {eachRowVData[index]}</p>
            {detailUI[rData]}
            </div>
        )
    return (
        <div style={{ maxWidth: '100%' }}>
            <div>
                <React.Fragment key="right">
                    <Button onClick={toggleDrawer(true)}>TOPPunchList</Button>
                    <Drawer anchor="right" open={rightDrawerState} onClose={toggleDrawer(false)}>
                        {/* {list(anchor)} */}
                        <div
                            className={clsx(classes.list, {
                                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                            })}
                            role="presentation"
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            <ListItem button key="Inbox">
                                <ListItemIcon> <InboxIcon /></ListItemIcon>
                                <ListItemText primary="Update Row" />
                            </ListItem>
                            {/* <p>{eachRowKeyData.current}</p>
                            <p>{eachRowValueData.current}</p> */}
                            <div>
                            {/* {eachRowKeyData.current}<br /> */}
                            {/* {eachRowKeyData.current[0]}<br /> */}
                            {/* {excelChangedArray.current} */}
                            {/* {eachRowKeyData.current.length}<br /> */}
                            {/* {eachRowValueData.current[0]}<br /> */}
                            {/* {eachRowValueData.current[1]}<br /> */}
                            {/* {eachRowValueData.current[2]}<br /> */}
                            {/* {eachRowValueData.current[3]}<br /> */}
                            {/* {eachRowValueData.current[4]}<br /> */}
                            {/* {eachRowValueData.current[5]}<br /> */}
                            {/* {eachRowValueData.current[6]}<br /> */}
                            {/* {eachRowValueData.current[7]}<br /> */}
                            {/* {eachRowValueData.current[8]}<br /> */}
                            {/* {eachRowValueData.current[9]}<br /> */}
                            {/* {eachRowValueData.current[10]}<br /> // 빈값이 안들어온다........... */}
                            {/* {(eachRowValueData.current[10])? "a":"b"}<br /> */}
                            {/* {(eachRowValueData.current[11]==="")? "a":"b"}<br /> */}
                            {/* {(eachRowValueData.current[1]==="")? "a":"b"}<br /> */}
                            {/* {(eachRowValueData.current[11]==="")? "a":"b"}<br /> */}
                            {rowData}<br />aaaaaaaaaaaaaaaaaaaaaaa
                            {/* {eachRowKData.map((fData, index) => {
                                console.log(index)
                                console.log(fData)
                                return (
                                    <p key={index}>{fData}a</p>

                                )
                            } */}
                                
                            )
                        }
                            {eachRowValueData.current}
                            </div>
                            <Divider />
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                        </div>
                    </Drawer>
                </React.Fragment>
            </div>
            <MaterialTable 
                title="Punchlist data" 
                data={data} 
                // columns={colDefs} 
                columns={updateColDefs.current} 
                onRowClick={(event, rowData)=> {
                    setRightDrawerState(true)
                    // console.log(1)
                    // console.log(rowData) // 빈값이 안들어온다.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    // console.log(rowData) // {Area: "Algeria RDPP", PunchID: "PC-2-00-MB-MBP-E-01-001", IssuedDate: 43069.375601851854, IssueDescription: "Le support de base du transformateur de 15 kVa dan… panel was bended and fixation bolt was corroded ", Discipline: "Elec", …}
                    // console.log(2)
                    //  빈컬럼 추가하는 로직이 필요  //  excelChangedArray
                    
                    const targetData = {}

                    // console.log(33)
                    // console.log(Object.keys(rowData))  // excel NaN값을 제외한 전체 값
                    // console.log(excelChangedArray.current) // 화면상 보여지는 전체 columns
                    
                    const updatedData = Object.keys(rowData)  // excel NaN값을 제외한 전체 값
                    for (let columnName in excelChangedArray.current) { // index값이 나간다.
                        if (excelChangedArray.current[columnName]) {
                            // console.log(updatedData)
                            // console.log(excelChangedArray.current[columnName])

                            if (updatedData.includes(excelChangedArray.current[columnName])) {
                                // console.log("그대로 넣어준다.")
                                targetData[excelChangedArray.current[columnName]] = rowData[excelChangedArray.current[columnName]]
                            } else {
                                // console.log("빈값으로 넣어준다.")
                                targetData[excelChangedArray.current[columnName]] = ""
                            }
                        }
                    }
                    
                    // console.dir(targetData)
                    // console.dir(targetData)


                    eachRowData.current = targetData
                    
                    let htmlKetArray = []
                    var htmlValueArray = []


                    for(var key in eachRowData.current){
                        // console.log(3)
                        htmlKetArray.push(key)
                        htmlValueArray.push(eachRowData.current[key])
                    }
                    // console.log(4)
                    // console.log("MaterialTable MaterialTable MaterialTable MaterialTable MaterialTable MaterialTable MaterialTable ")
                    // console.log(htmlKetArray)
                    // console.log(htmlValueArray)
                    // console.log(5)
                    eachRowKeyData.current = htmlKetArray
                    eachRowValueData.current = htmlValueArray
                    // console.log("111111111111111111111111111111111111111111111111111111111111111111")
                    // console.log(eachRowKeyData.current)
                    // console.log(eachRowValueData.current)
                    setEachRowKData(eachRowKeyData.current)
                    setEachRowVData(eachRowValueData.current)
                    // console.log(6)
                    // console.log(eachRowValueData.current[8])
                    // console.log(eachRowValueData.current[9])
                    // console.log(eachRowValueData.current[10])
                    // console.log(eachRowValueData.current[11])
                    // console.log(eachRowValueData.current[12])
                }}
                // onRowClick={toggleDrawer(true)}
                // onRowClick={toggleA()}
                // columns={dummyData} 
                options={{
                    paginationType: "stepped",
                    columnsButton:true,
                    // https://material-table.com/#/docs/features/styling
                    headerStyle: {
                        width: 26,
                        // whiteSpace: 'nowrap',
                        // textAlign: 'left',
                        // flexDirection: 'row',
                        // overflow: 'hidden',
                        // textOverflow: 'ellipsis',
                        // paddingLeft: 5,
                        // paddingRight: 5,
                        // backgroundColor: "#607d8b",
                        backgroundColor: "#263238",
                        fontWeight: 'bold',
                        color: "white",
                      },
                }}
                components={{
                    Toolbar: props => (
                      <div>
                        <div style={{padding:0, width:'100%'}}>
                        {/* <MTableToolbar {...props} /> */}
                        <Box display="flex" p={1} bgcolor="background.paper">
                            <Box p={1} flexGrow={1} >
                                <label htmlFor="upload-photo">
                                    <input
                                        style={{ display: 'none' }}
                                        id="upload-photo"      // 이거 안넣으면 안됨
                                        name="upload-photo"
                                        type="file"
                                        onChange={importExcel}
                                    />
                                    <Button   style={{textTransform: 'none'}}
                                        className={classes.margin}
                                        size="small"  // medium  large
                                        component="span"    // 이거 안넣으면 안됨 
                                        variant="contained"
                                        color="default" 
                                        startIcon={<CloudUploadIcon />}
                                        
                                        >
                                        import
                                    </Button>
                                </label>                   
                                &nbsp;&nbsp;&nbsp;&nbsp;<span> Remove or change columns before clicking verify data button.</span>

                                {/* <Chip avatar={<Avatar>M</Avatar>} label="Sheet 01" style={{marginRight: 10}} />
                                <Chip avatar={<Avatar>M</Avatar>} label="Sheet 02" style={{marginRight: 10}} />
                                <Chip avatar={<Avatar>M</Avatar>} label="Sheet 03" style={{marginRight: 10}} /> */}
                            </Box>
                            <Box p={1}>
                                {/* <Button>
                                    <SettingsIcon fontSize="large" />
                                </Button> */}
                                &nbsp;&nbsp;&nbsp;
                                <ColumnMappingButton excelColumns={columnsData} onexcelChangedColumns={onexcelChangedColumns} onApply={onApply} />

                                &nbsp;&nbsp;&nbsp;
                                <Button className={classes.baseButton}  variant="outlined" style={{textTransform: 'none'}} >
                                    <b>Verify Data</b>
                                </Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button className={classes.baseButton} 
                                    variant="outlined" 
                                    style={{textTransform: 'none'}}
                                >
                                    <b>Save</b>
                                </Button>
                                
                                
                            </Box>
                        </Box>
                        </div>
                      </div>
                    )   
                  }}
            />
        </div>
    )
}

export default GridComponent;