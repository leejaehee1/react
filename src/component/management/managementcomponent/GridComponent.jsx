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


// textField
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input'; 
import InputLabel from '@material-ui/core/InputLabel'; 
import FormHelperText from '@material-ui/core/FormHelperText'; 
import NativeSelect from '@material-ui/core/NativeSelect'; 


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
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '50ch',
        },
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

    const detailUI =  {
        ProjectID : (  // PK
            <div> 
                ProjectID :&nbsp;&nbsp;&nbsp;
                {/* <Input id="my-input" aria-describedby="my-helper-text" defaultValue={eachRowData.current["Area"]} /> */}
                <Input id="ProjectID" defaultValue={eachRowData.current["ProjectID"]} />
                <FormHelperText id="ProjectID">We'll never share your email.</FormHelperText>
            </div>
        ),
        PunchID : (    // PK
            <div>
                PunchID :&nbsp;&nbsp;&nbsp;
                {/* <Input id="my-input" aria-describedby="my-helper-text" defaultValue={eachRowData.current["Area"]} /> */}
                <Input id="PunchID" defaultValue={eachRowData.current["PunchID"]} />
                <FormHelperText id="PunchID">We'll never share your email.</FormHelperText>
            </div>
        ),
        Category : (
            <div>
                {/* <InputLabel htmlFor="select">Age</InputLabel> */}
                Category : &nbsp;&nbsp;&nbsp;&nbsp; 
                <NativeSelect id="select">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </NativeSelect>
                &nbsp;&nbsp;&nbsp;
                {/* <Input id="Category-basic" label="Category" defaultValue={eachRowData.current["Category"]} /> */}
                <Input id="Category" defaultValue="Complete before Pressure Test" />
                <TextField
                    id="outlined-multiline-static"
                    // label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="outlined"
                />
            </div>
        ),
        System : (
            <div>
                System : &nbsp;&nbsp;&nbsp;&nbsp; 
                <NativeSelect id="select">
                    <option value="UA">UA</option>
                    <option value="UB">UB</option>
                    <option value="UC">UC</option>
                    <option value="UE">UE</option>
                    <option value="UG">UG</option>
                    <option value="UH">UH</option>
                    <option value="UI">UI</option>
                    <option value="UK">UK</option>
                    <option value="UL">UL</option>
                    <option value="UP">UP</option>
                    <option value="UQ">UQ</option>
                    <option value="UM">UM</option>
                    <option value="UR">UR</option>
                    <option value="US">US</option>
                    <option value="UT">UT</option>
                    <option value="UX">UX</option>
                    <option value="UY">UY</option>
                    <option value="UZ">UZ</option>
                </NativeSelect>
                &nbsp;&nbsp;&nbsp;
                <Input id="System" defaultValue="Structures for power transmission and auxiliary power supply" />
            </div>
        ),
        Subsystem : (
            <div>
                Subsystem : &nbsp;&nbsp;&nbsp;&nbsp; 
                <NativeSelect id="select">
                    <option value="UEN">UEN</option>
                    <option value="UGD">UGD</option>
                    <option value="UGB">UGB</option>
                    <option value="UHY-1">UHY-1</option>
                    <option value="UHY-2">UHY-2</option>
                    <option value="UHY-3">UHY-3</option>
                    <option value="UHY-4">UHY-4</option>
                    <option value="UHY-5">UHY-5</option>
                    <option value="UHY-6">UHY-6</option>
                    <option value="UHY-7">UHY-7</option>
                    <option value="UHY-8">UHY-8</option>
                    <option value="ULA">ULA</option>
                    <option value="ULX">ULX</option>
                    <option value="UMC">UMC</option>
                    <option value="URD">URD</option>
                    <option value="UST-1">UST-1</option>
                    <option value="UST-2">UST-2</option>
                    <option value="USG">USG</option>
                    <option value="USX">USX</option>
                    <option value="UST">UST</option>
                    <option value="UTG-1">UTG-1</option>
                    <option value="UTG-2">UTG-2</option>
                    <option value="UTF">UTF</option>
                    <option value="UTK">UTK</option>
                    <option value="UTG">UTG</option>
                    <option value="UXA">UXA</option>
                    <option value="UYC">UYC</option>
                    <option value="UYD">UYD</option>
                    <option value="UYE">UYE</option>
                    <option value="UYF">UYF</option>
                    <option value="UZD">UZD</option>
                    <option value="UAH">UAH</option>
                    <option value="UBB">UBB</option>
                    <option value="UBG">UBG</option>
                    <option value="UEH">UEH</option>
                    <option value="UEL">UEL</option>
                    <option value="UEM-1">UEM-1</option>
                    <option value="UEM-2">UEM-2</option>
                    <option value="UEM-3">UEM-3</option>
                    <option value="UEM-4">UEM-4</option>
                    <option value="UEM-5">UEM-5</option>
                    <option value="UEM-6">UEM-6</option>
                    <option value="UEM-7">UEM-7</option>
                    <option value="UEM-8">UEM-8</option>
                    <option value="UEM-9">UEM-9</option>
                    <option value="UGF">UGF</option>
                    <option value="UGH-1">UGH-1</option>
                    <option value="UGH-2">UGH-2</option>
                    <option value="UHA-1">UHA-1</option>
                    <option value="UHA-2">UHA-2</option>
                    <option value="UHY-1">UHY-1</option>
                    <option value="UHY-2">UHY-2</option>
                    <option value="UHY-3">UHY-3</option>
                    <option value="UHY-4">UHY-4</option>
                    <option value="UHY-5">UHY-5</option>
                    <option value="UHY-6">UHY-6</option>
                    <option value="UHY-7">UHY-7</option>
                    <option value="UHY-8">UHY-8</option>
                    <option value="UPN-1">UPN-1</option>
                    <option value="UPN-2">UPN-2</option>
                    <option value="UQN-1">UQN-1</option>
                    <option value="UQN-2">UQN-2</option>
                    <option value="USR-1">USR-1</option>
                    <option value="USR-2">USR-2</option>
                    <option value="USR-3">USR-3</option>
                    <option value="USR-4">USR-4</option>
                    <option value="USZ">USZ</option>
                    <option value="UZA-1">UZA-1</option>
                    <option value="UZA-2">UZA-2</option>
                    <option value="UZJ-1">UZJ-1</option>
                    <option value="UZJ-2">UZJ-2</option>
                    <option value="UZR">UZR</option>
                    <option value="UZX">UZX</option>
                </NativeSelect>
                &nbsp;&nbsp;&nbsp;
                <Input id="Subsystem" defaultValue="Structures for power transmission and auxiliary power supply" />
            </div>
        ),
        Discipline : (
            <>
                <TextField id="Discipline-basic" label="Discipline" defaultValue={eachRowData.current["Discipline"]} />
            </>
        ),
        Status : (
            <>
                <TextField id="Status-basic" label="Status" defaultValue={eachRowData.current["Status"]} />
            </>
        ),
        Unit : (
            <>
                <TextField id="Unit-basic" label="Unit" defaultValue={eachRowData.current["Unit"]} />
            </>
        ),
        Area : (
            <div>
                {/* Area   :   <Input id="Area-basic" label="Area" defaultValue={eachRowData.current["Area"]} /> */}
                {/* <InputLabel htmlFor="my-input">Email address</InputLabel> */}
                Area :&nbsp;&nbsp;&nbsp;
                {/* <Input id="my-input" aria-describedby="my-helper-text" defaultValue={eachRowData.current["Area"]} /> */}
                <Input id="Area" defaultValue={eachRowData.current["Area"]} />
                <FormHelperText id="Area">We'll never share your email.</FormHelperText>
            </div>
        ),
        TagNumber : (
            <>
                <TextField id="TagNumber-basic" label="TagNumber" defaultValue={eachRowData.current["TagNumber"]} />
            </>
        ),
        BulkItem : (
            <>
                <TextField id="BulkItem-basic" label="BulkItem" defaultValue={eachRowData.current["BulkItem"]} />
            </>
        ),
        BulkName : (
            <>
                <TextField id="BulkName-basic" label="BulkName" defaultValue={eachRowData.current["BulkName"]} />
            </>
        ),
        ConfirmedDate : (
            <>
                <TextField id="ConfirmedDate-basic" label="ConfirmedDate" defaultValue={eachRowData.current["ConfirmedDate"]} />
            </>
        ),
        ConfirmedBy : (
            <>
                <TextField id="ConfirmedBy-basic" label="ConfirmedBy" defaultValue={eachRowData.current["ConfirmedBy"]} />
            </>
        ),
        ClosedDate : (
            <>
                <TextField id="ClosedDate-basic" label="ClosedDate" defaultValue={eachRowData.current["ClosedDate"]} />
            </>
        ),
        Closedby : (
            <>
                <TextField id="Closedby-basic" label="Closedby" defaultValue={eachRowData.current["Closedby"]} />
            </>
        ),
        ScheduleKey : (
            <>
                <TextField id="ScheduleKey-basic" label="ScheduleKey" defaultValue={eachRowData.current["ScheduleKey"]} />
            </>
        ),
        ScheStartDate : (
            <>
                <TextField id="ScheStartDate-basic" label="ScheStartDate" defaultValue={eachRowData.current["ScheStartDate"]} />
            </>
        ),
        ScheFinishDate : (
            <>
                <TextField id="ScheFinishDate-basic" label="ScheFinishDate" defaultValue={eachRowData.current["ScheFinishDate"]} />
            </>
        ),
        DesignChgReq : (
            <>
                <TextField id="DesignChgReq-basic" label="DesignChgReq" defaultValue={eachRowData.current["DesignChgReq"]} />
            </>
        ),
        MeterialReq : (
            <>
                <TextField id="MeterialReq-basic" label="MeterialReq" defaultValue={eachRowData.current["MeterialReq"]} />
            </>
        ),
        IssueDescription : (
            <>
                <TextField id="IssueDescription-basic" label="IssueDescription" defaultValue={eachRowData.current["IssueDescription"]} />
            </>
        ),
        CompleteComment : (
            <>
                <TextField id="CompleteComment-basic" label="CompleteComment" defaultValue={eachRowData.current["CompleteComment"]} />
            </>
        ),
        NotAcceptComment : (
            <>
                <TextField id="NotAcceptComment-basic" label="NotAcceptComment" defaultValue={eachRowData.current["NotAcceptComment"]} />
            </>
        ),
        Difficulty : (
            <>
                <TextField id="Difficulty-basic" label="Difficulty" defaultValue={eachRowData.current["Difficulty"]} />
            </>
        ),
        ScheduleImpact : (
            <>
                <TextField id="ScheduleImpact-basic" label="ScheduleImpact" defaultValue={eachRowData.current["ScheduleImpact"]} />
            </>
        ),
        CostImpact : (
            <>
                <TextField id="CostImpact-basic" label="CostImpact" defaultValue={eachRowData.current["CostImpact"]} />
            </>
        ),
        Keyword1 : (
            <>
                <TextField id="Keyword1-basic" label="Keyword1" defaultValue={eachRowData.current["Keyword1"]} />
            </>
        ),
        Keyword2 : (
            <>
                <TextField id="Keyword2-basic" label="Keyword2" defaultValue={eachRowData.current["Keyword2"]} />
            </>
        ),
        Keyword3 : (
            <>
                <TextField id="Keyword3-basic" label="Keyword3" defaultValue={eachRowData.current["Keyword3"]} />
            </>
        ),
        Keyword4 : (
            <>
                <TextField id="Keyword4-basic" label="Keyword4" defaultValue={eachRowData.current["Keyword4"]} />
            </>
        ),
        DrawingNo : (
            <>
                <TextField id="DrawingNo-basic" label="DrawingNo" defaultValue={eachRowData.current["DrawingNo"]} />
            </>
        ),
        AWPcode : (
            <>
                <TextField id="AWPcode-basic" label="AWPcode" defaultValue={eachRowData.current["AWPcode"]} />
            </>
        ),
    }

    const handleSubmit = (event) => {
        console.dir(event)
        console.dir(event.target.elements.Area.value)
    }
    const rowData = eachRowKData.map((rData, index) => 
            
            <>
            {/* <p>{rData} : {eachRowVData[index]}</p> */}
            {detailUI[rData]}
            </>
            
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
                            // onClick={toggleDrawer(false)}
                            // onKeyDown={toggleDrawer(false)}
                        >
                            <ListItem button key="Inbox">
                                <ListItemIcon> <InboxIcon /></ListItemIcon>
                                <ListItemText primary="Update Row" />
                            </ListItem>
                            <form className={classes.root}  onSubmit={handleSubmit}>
                                {rowData}
                                <button type="submit">submit</button>
                            </form>
                            <Divider />
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
                    eachRowData.current = targetData        
                    let htmlKetArray = []
                    var htmlValueArray = []
                    for(var key in eachRowData.current){
                        // console.log(3)
                        htmlKetArray.push(key)
                        htmlValueArray.push(eachRowData.current[key])
                    }
                    eachRowKeyData.current = htmlKetArray
                    eachRowValueData.current = htmlValueArray
                    setEachRowKData(eachRowKeyData.current)
                    setEachRowVData(eachRowValueData.current)
                }}
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