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
import FindInPageIcon from '@material-ui/icons/FindInPage';
import WarningIcon from '@material-ui/icons/Warning';


// color

import blueGrey from '@material-ui/core/colors/red';
import ColumnMappingButton from './ColumnMappingButton';


// textField
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input'; 
import InputLabel from '@material-ui/core/InputLabel'; 
import FormHelperText from '@material-ui/core/FormHelperText'; 
import NativeSelect from '@material-ui/core/NativeSelect'; 


// datatime
import DataTime from '../../punchlist/components/detailpages/DataTime';
import {
    MuiPickersUtilsProvider,
    // KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';

// Slider
import Slider from '@material-ui/core/Slider';


// import code data
// import { useGetList } from 'react-admin';
import Status from './inputComponent/Status';
import ProjectID from './inputComponent/ProjectID';
import Category from './inputComponent/Category';
import Discipline from './inputComponent/Discipline';
import Unit from './inputComponent/Unit';
import SystemID from './inputComponent/SystemID';
import Subsystem from './inputComponent/Subsystem';
import Area from './inputComponent/Area';
import Department from './inputComponent/Department';
import Difficulty from './inputComponent/Difficulty';
import ScheduleImpact from './inputComponent/ScheduleImpact';
import CostImpact from './inputComponent/CostImpact';
import ClosedDate from './inputComponent/ClosedDate';

// alert
import { Alert, AlertTitle } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';


// codeMapping
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';


// css
import './styles/GridComponent.css'
import GridComponentStepper from './inputComponent/GridComponentStepper';

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
          margin: theme.spacing(1.5),
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
            const heads=headers.map(head=>({title:head, 
                                            field:head, 
                                            cellStyle: {
                                                // width: 20, 
                                                // maxHWidth: 30, 
                                                whiteSpace: 'nowrap',  // 이거 안넣으면 안된다.
                                                overflow: "hidden"
                                            },}))
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
                let tergetObject = {title: a, 
                                    field: a,
                                    cellStyle: {
                                        // width: 20, 
                                        // maxHWidth: 30, 
                                        whiteSpace: 'nowrap',  // 이거 안넣으면 안된다.
                                        overflow: "hidden"
                                    },}
                targetArray.push(tergetObject)
                compareColumnsData.push(a)
            } else {
                // console.log("없다")
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
        // console.log(10000000000000000000000000001)
        // console.log(data)
        // const baseComparing = Object.values(colDefs).map((ab) => ab.title ? ab.title.toLowerCase() : ab.title);
        let targetArray = []
        const compareColumnsData = []


        // console.log("applyData")    // 변경된 값
        // console.log(applyData)    // 변경된 값
        // console.log("colDef.title")    // 변경된 값
        // console.log(Object.values(colDefs).map((c) => c.title))  // 변경 전값
        const colDefTitle = Object.values(colDefs).map((c) => c.title)

        const updateApplyData = [] // 결국 로직에 포함되지 않음
        for (var i in applyData) {
            // console.log(applyData[i])
            updateApplyData.push(applyData[i] ? applyData[i].toLowerCase() : applyData[i])
        }

        // console.log("updateApplyData") // 변경된 값에서 소문자로 변경된 배열
        // console.log(updateApplyData) // 변경된 값에서 소문자로 변경된 배열

        // delete 로직
        for (const a of applyData) {
            const indexA = applyData.indexOf(a)
            // if (baseComparing.includes( a ? a.toLowerCase() : a)) {
            if (a) {     
                                    // apply 누를 시 적용 되는 부분-------------------------------------------------------------------------------------------
                if (a==="DESCRIPTION #1"){
                    var tergetObject = {title: a, field: a, 
                                        cellStyle: {
                                                    // width: 20, 
                                                    // maxHWidth: 30, 
                                                    whiteSpace: 'nowrap',  // 이거 안넣으면 안된다.
                                                    overflow: "hidden"
                                                },
                                        width: "20%"
                                        }
                    console.log('asdfasfd')
                }else {
                    var tergetObject = {title: a, field: a,
                                        cellStyle: {
                                            width: 20, 
                                            maxHWidth: 30, 
                                            whiteSpace: 'nowrap',  // 이거 안넣으면 안된다.
                                            overflow: "hidden"
                                        },
                                        width: "10%"}
                }
                // let tergetObject = {title: a, field: a}

                targetArray.push(tergetObject)
                compareColumnsData.push(a)
                // 여기 값을 추가하면 안된다. 왜냐하면, 컬럼은 변경되는데, row값이 지워지고, delete가 안먹힌다.
                // update columnsName 로직

                const applyDataF = {}
                const fakeData = data
                // console.log(fakeData[0])
                // 둘의 인덱스가 같으면, 넘어간다.
                // 둘의 인덱스가 다르면, applyData key value를 추가하고,  colDef.title을 제거한다. 
                if (applyData[indexA] !== colDefTitle[indexA]) {
                    // console.log("먹히나 안먹히나먹히나 안먹히나먹히나 안먹히나먹히나 안먹히나먹히나 안먹히나먹히나 안먹히나먹히나 안먹히나먹히나 안먹히나먹히나 안먹히나먹히나 안먹히나")
                    // console.log(applyData[indexA])
                    // console.log(colDefTitle[indexA])

                    // data는 배열이 아니고 객체다.

                    // console.log(data[applyData[indexA]])  ///////////////////// data 가 안 잡힌다..
                    // console.log(data[colDefTitle[indexA]])  ///////////////////////// data가 안 잡힌다.

                    data.map((row) => {
                        row[applyData[indexA]] = row[colDefTitle[indexA]]
                        delete row[colDefTitle[indexA]]
                    })

                }
                // console.log(fakeData[0])
                // setData(fakeData)


                // for (let baseTar of Object.values(colDefs).map((c) => c.title)) {

                //     console.log('conparing!!!!!!zx ')
                //     console.log(baseTar)
                //     console.log(a)
                //     // console.log(data)


                //     if ( !updateApplyData.includes(baseTar.toLowerCase()) ) {
                //         const targetDataF = baseTar;
                //         // 객체 키를 targetDataF로 찾아서 a로 전체 row 당 다 변경을 해준다.

                //         const applyData = {}
                //         const fakeData = data
                //         console.log(fakeData[0])
                //         fakeData.map((row)=> {
                //             for (var key in row) {
                //                 if (key === targetDataF) {
                //                     applyData.a = row[key]
                //                 } else {
                //                     applyData.key = row[key]
                //                 }
                //             }
                //         })
                //         console.log(fakeData[0])
                //         setData(fakeData)
                //     }
                // }



            } else {
                // console.log("없다")
                if (a) {

                    console.log("1")






                }
            }
        }
        console.log(targetArray)
        setColDefs(targetArray)
        updateColDefs.current = targetArray
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
        // console.log("toggleDrawertoggleDrawertoggleDrawertoggleDrawertoggleDrawertoggleDrawertoggleDrawer")
        // console.log(eachRowKeyData)        // 여기가 닫을 때 로직입니다.
        // console.log(eachRowValueData)
        setRightDrawerState(open);
        setCodeMappingChecked(false)
    }

    useEffect(() => {
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
    // }0316
    // console.log(dataStatus)
    // console.log(statusIds)

    // change all projectID
    const [allProjectTargetData, setAllProjectTargetData] = useState("");
    useEffect(()=> {
        // console.log("allProjectTargetData")
        // console.log(allProjectTargetData)
        // console.log(data)
        for (var d in data){
            data[d].projectID = allProjectTargetData
        }
    }, [allProjectTargetData])
 

    const detailUI =  {
        projectID : (  // PK
            <ProjectID static={eachRowData.current["projectID"]} setAllProjectTargetData={setAllProjectTargetData} />
        ),
        punchID : (    // PK
            <div style={{display:'inline-block'}}>
                <span style={{
                    // paddingBottom:'500px'
                    // margin: '10px'
                }}>
                punchID :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                {/* <Input id="my-input" aria-describedby="my-helper-text" defaultValue={eachRowData.current["Area"]} /> */}
                <span style={{float:'right'}}>
                <Input id="punchID" defaultValue={eachRowData.current["punchID"]} />
                </span>
                {/* <FormHelperText id="punchID">We'll never share your email.</FormHelperText> */}
            </div>
        ),
        category : (
            <Category static={eachRowData.current["category"]} />

        ),
        systemID : (
            <SystemID static={eachRowData.current["systemID"]} />
        ),
        subsystem : (
            <Subsystem static={eachRowData.current["subsystem"]} />
        ),
        discipline : (
            <Discipline static={eachRowData.current["discipline"]} />
        ),
        status : ( // 변경 완료
            <Status static={eachRowData.current["status"]} />
        ),
        unit : (
            <Unit static={eachRowData.current["unit"]} />
        ),
        area : ( // 변경 완료
            <Area static={eachRowData.current["area"]} />
        ),
        tagNumber : (
            <div>
                {/* <TextField id="TagNumber-basic" label="TagNumber" defaultValue={eachRowData.current["TagNumber"]} /> */}
                TagNumber &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Input id="my-input" aria-describedby="my-helper-text" defaultValue={eachRowData.current["Area"]} /> */}
                <Input id="tagNumber" defaultValue={eachRowData.current["tagNumber"]} />
                <FormHelperText id="punchID">We'll never share your email.</FormHelperText>
            </div>
        ),
        bulkItem : (
            <div>
                BulkItem &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Input id="my-input" aria-describedby="my-helper-text" defaultValue={eachRowData.current["Area"]} /> */}
                <Input id="bulkItem" defaultValue={eachRowData.current["bulkItem"]} />
            </div>
        ),
        bulkName : (
            <div>
                BulkName &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Input id="my-input" aria-describedby="my-helper-text" defaultValue={eachRowData.current["Area"]} /> */}
                <Input id="bulkName" defaultValue={eachRowData.current["bulkName"]} />
            </div>
        ),
        department : (
            <Department static={eachRowData.current["department"]} />
        ),
        confirmedDate : (
            <ClosedDate static={eachRowData.current["confirmedDate"]} rowName={"ConfirmedDate"} rowIndex={"confirmedDate"} />
        ),
        confirmedBy : (
            <div>
                ConfirmedBy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Input id="my-input" aria-describedby="my-helper-text" defaultValue={eachRowData.current["Area"]} /> */}
                <Input id="confirmedBy" defaultValue={eachRowData.current["confirmedBy"]} />
            </div>
        ),
        closedDate : (
            <ClosedDate static={eachRowData.current["closedDate"]} rowName={"ClosedDate"} rowIndex={"closedDate"}/>
        ),
        closedby : (
            <div>
                Closedby &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Input id="my-input" aria-describedby="my-helper-text" defaultValue={eachRowData.current["Area"]} /> */}
                <Input id="closedby" defaultValue={eachRowData.current["closedby"]} />
            </div>
        ),
        scheduleKey : (
            <div>
                ScheduleKey &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Input id="my-input" aria-describedby="my-helper-text" defaultValue={eachRowData.current["Area"]} /> */}
                <Input id="scheduleKey" defaultValue={eachRowData.current["scheduleKey"]} />
            </div>
        ),
        targetDate : (
            <ClosedDate static={eachRowData.current["targetDate"]} rowName={"TargetDate"} rowIndex={"targetDate"} />
        ),
        completedDate : (
            <ClosedDate static={eachRowData.current["completedDate"]} rowName={"CompletedDate"} rowIndex={"completedDate"} />
        ),
        scheStartDate : (
            <ClosedDate static={eachRowData.current["scheStartDate"]} rowName={"ScheStartDate"} rowIndex={"scheStartDate"} />
        ),
        scheFinishDate : (
            <ClosedDate static={eachRowData.current["scheFinishDate"]} rowName={"ScheFinishDate"} rowIndex={"scheFinishDate"} />
        ),
        confirmedDate : (
            <ClosedDate static={eachRowData.current["confirmedDate"]} rowName={"ConfirmedDate"} rowIndex={"confirmedDate"} />
        ),
        issuedDate : (
            <ClosedDate  static={eachRowData.current["issuedDate"]} rowName={"IssuedDate"} rowIndex={"issuedDate"} />
        ),
        designChgReq : ( // defalt : 0
            <div>
                DesignChgReq &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Input id="my-input" aria-describedby="my-helper-text" defaultValue={eachRowData.current["Area"]} /> */}
                <Input id="designChgReq" defaultValue={eachRowData.current["designChgReq"]} />
            </div>
        ),
        meterialReq : ( // defalt : 0
            <div>
                MeterialReq &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Input id="my-input" aria-describedby="my-helper-text" defaultValue={eachRowData.current["Area"]} /> */}
                <Input id="meterialReq" defaultValue={eachRowData.current["meterialReq"]} />
            </div>
        ),
        issueDescription : (
            <div>
                {/* <InputLabel htmlFor="select">Age</InputLabel> */}
                IssueDescription &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;  <br />
                <TextField
                    id="issueDescription"
                    // label="Multiline"
                    multiline
                    rows={4}
                    defaultValue={eachRowData.current["issueDescription"]}
                    variant="outlined"
                />
            </div>
        ),
        completeComment : (
            <div>
                {/* <InputLabel htmlFor="select">Age</InputLabel> */}
                <span style={{}}>
                    CompleteComment &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;  <br />
                </span>
                <TextField
                    style={{width: '400px', paddingLeft:'20px', paddingTop: '5px'}}
                    id="completeComment"
                    // label="Multiline"
                    multiline
                    rows={4}
                    defaultValue={eachRowData.current["completeComment"]}
                    variant="outlined"
                />
            </div>
        ),
        notAcceptComment : (
            <div>
                {/* <InputLabel htmlFor="select">Age</InputLabel> */}
                NotAcceptComment &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;  <br />
                <TextField
                    id="notAcceptComment"
                    // label="Multiline"
                    multiline
                    rows={4}
                    defaultValue={eachRowData.current["notAcceptComment"]}
                    variant="outlined"
                />
            </div>
        ),
        difficulty : (
            <Difficulty static={eachRowData.current["difficulty"]} />
        ),
        scheduleImpact : (
            <ScheduleImpact static={eachRowData.current["scheduleImpact"]} />
        ),
        costImpact : (
            <CostImpact static={eachRowData.current["costImpact"]} />
        ),
        keyword1 : (
            <>
                <TextField id="keyword1" label="keyword1" defaultValue={eachRowData.current["keyword1"]} />
            </>
        ),
        keyword2 : (
            <>
                <TextField id="keyword2" label="keyword2" defaultValue={eachRowData.current["keyword2"]} />
            </>
        ),
        keyword3 : (
            <>
                <TextField id="keyword3" label="keyword3" defaultValue={eachRowData.current["keyword3"]} />
            </>
        ),
        keyword4 : (
            <>
                <TextField id="keyword4" label="keyword4" defaultValue={eachRowData.current["keyword4"]} />
            </>
        ),
        drawingNo : (
            <div>
                DrawingNo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Input id="my-input" aria-describedby="my-helper-text" defaultValue={eachRowData.current["Area"]} /> */}
                <Input id="drawingNo" defaultValue={eachRowData.current["drawingNo"]} />
            </div>
        ),
        awpCode : (
            <div>
                AWPcode &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Input id="my-input" aria-describedby="my-helper-text" defaultValue={eachRowData.current["Area"]} /> */}
                <Input id="awpCode" defaultValue={eachRowData.current["awpCode"]} />
            </div>
        ),
    }

    const [ selectRowId, setSelectRowId ] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        try {
            // console.dir(event)
            console.dir("-----------------------------------")
            console.dir(event.target.elements)
            console.dir(event.target)
            // console.dir(event.target.elements.area.value) // 각 값들
            // console.dir(event.target.elements[0]["defaultValue"]) // 각 값들
            // console.dir(event.target.elements.punchID.value) // 각 값들
            console.dir(event.target.elements.closedDate.value) // 각 값들
        } catch (e) {
            console.log("삐뽀삐뽀 에러 삐뽀삐뽀")
            // alert("삐뽀삐뽀 에러 삐뽀삐뽀")
        }
        // console.dir(event.target.elements.status.value) // 각 값들
        // console.dir(event.target.elements["Area"]["value"]) // 각 값들
        // console.dir(event.target.elements["PunchID"]["value"]) // 각 값들
        // console.log(selectRowId) // row ID


        // console.dir(data)
        // console.dir(data[0])
        // console.dir(data[0]["Area"])
        // console.dir(updateColDefs.current)

        updateColDefs.current.map((a)=> {
                try {
                    data[selectRowId][a.title] = event.target.elements[a.title]["value"];
                    console.log(a.title, "은 table에 반영되었다.")
                    // console.log(data[selectRowId][a.title]);
                } catch (e) {
                    console.log(a.title, " 의 값에 value가 없다. 컬럼 수정이 필요하다.");
                    // alert(a.title, " 의 값에 value가 없다. 컬럼 수정이 필요하다.");
                }

                // if (a.title === "difficulty") {
                //     console.log("----------------------------------")
                //     console.log("difficulty는 여기서 따로 저장했다.")
                //     console.log(event.target.elements[0]["defaultValue"])
                //     // console.log(event.target.elements[a.title]["value"])
                //     data[selectRowId][a.title] = event.target.elements[0]["defaultValue"]
                // }

                // if (a.title === "scheduleImpact") {
                //     console.log("-----------------------------------")
                //     console.log("scheduleImpact는 여기서 따로 저장했다.")
                //     console.log(event.target.elements[0]["defaultValue"])
                //     // console.log(event.target.elements[a.title]["value"])
                //     data[selectRowId][a.title] = event.target.elements[0]["defaultValue"]
                // }

            }
        )



    }





    const rowData = eachRowKData.map((rData, index) => 
            
            <>
                {/* <p>{rData} : {eachRowVData[index]}</p> */}
                {/* 키워드인 것들만 모아서 useState 배열에 넣어주고, 그 변경값은 바로 아래에 반영해서 다시 for문으로 따로 만든다. */}
                {detailUI[rData]
                ?detailUI[rData]
                :
                <div style={{display:'inline-block'}}>
                    {rData} : <span style={{color:"red"}}> <WarningIcon /> Column not to exist in the database.</span>
                </div>
                }
            </>
            
        )

    // material-table    
    const [selectedRow, setSelectedRow] = useState(null);


    // db columns는 column mapping 적용하면 생긴다. 
    const dbColumns = useRef("")
    const compareDbColumns = (data) => {
        // console.log("data")
        if(data.length){
            // console.log("있다")
            // console.log(data)
            dbColumns.current = data
        } else {
            // console.log("없다")
            // console.log(data)
        }
    }



    // alert
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertImportOpen, setAlertImportOpen] = useState(false);
    const handleVerifyButton = () => {
        // columns checking validation
        // console.log("updateColDefs.current")
        // console.log(updateColDefs.current)
        // console.log("dbColumns.current")
        // console.log(dbColumns.current)

        // excel import validation
        if(updateColDefs.current.length){
            // console.log('s')
        } else {
            // console.log('f')
            // alert => excel import을 넣어주세요
            setAlertImportOpen(true)
            return null
        }


        for (var updataVal of updateColDefs.current) {
            if(dbColumns.current.includes(updataVal.title)){
                // console.log("있다.")
            }else{
                setAlertOpen(true)
                return null
            }
        }
        alert('성공')

        return () => {
            setAlertOpen(false)
        }
    }


    // codeMapping
    const [codeMappingChecked, setCodeMappingChecked] = React.useState(false);

    const handleChangeCodeMapping = () => {
        // console.log(prev)
        setCodeMappingChecked((prev) => !prev);
        
    };

    return (
        <div style={{
                    width: '100vw', 
                    // width: '150vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // padding: '0px -30px 0px -30px',        //위 우 아래 좌
                    margin: '0px -350px',
                    }}>
            <div>
                <React.Fragment key="right">
                    {/* <Button onClick={toggleDrawer(true)}>TOPPunchList</Button> */}
                    <Drawer anchor="right" open={rightDrawerState} onClose={toggleDrawer(false)}>
                        <div
                            className={clsx(classes.list, {
                                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                            })}
                            role="presentation"

                        >
                            <br />
                            <ListItem 
                                // button 
                                key="Inbox"
                            >
                                <ListItemIcon> <InboxIcon /></ListItemIcon>
                                <ListItemText primary="Update Row" />
                                <button className="updateRowColumnCodeData"><FindInPageIcon/>CodeMapping</button>

                                {/* codeMapping page */}
                                <FormControlLabel
                                    control={<Switch checked={codeMappingChecked} onChange={handleChangeCodeMapping} />}
                                    label="Show"
                                />
                            
                            </ListItem>
                                <div className={classes.container}>
                                    <Collapse in={codeMappingChecked}><br /><br />
                                    <Paper elevation={0} className={classes.paper}>
                                        {/* <svg className={classes.svg}>
                                        <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                                        </svg> */}
                                        <GridComponentStepper />
                                    </Paper>
                                    </Collapse>
                                    {/* <Collapse in={codeMappingChecked} collapsedSize={40}>
                                    <Paper elevation={4} className={classes.paper}>
                                        <svg className={classes.svg}>
                                        <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                                        </svg>
                                    </Paper>
                                    </Collapse> */}
                                </div>

                            <hr style={{width:'460px'}} />
                            <br />
                            <p>
                                아래에서 안보이는 값들은 columns가 DB columns와 다르기 때문에 보이지 않습니다.

                                {eachRowKData}
                            </p>
                            


                            <form className={classes.root}  onSubmit={handleSubmit}>
                                {rowData}
                                <button className="updateRowButton" type="submit">submit</button>
                            </form>
                            <Divider />
                        </div>
                    </Drawer>
                </React.Fragment>
            </div>
            <MaterialTable 
                title="Punchlist data" 
                data={data} 
                columns={colDefs} 

                onRowClick={(event, rowData)=> {
                    // 클릭 시 배경
                    setSelectedRow(rowData.punchID)
                    console.dir(rowData)

                    setRightDrawerState(true)
                    // console.log(1)
                    // console.log(rowData) // 빈값이 안들어온다.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    // console.log(rowData) // {Area: "Algeria RDPP", PunchID: "PC-2-00-MB-MBP-E-01-001", IssuedDate: 43069.375601851854, IssueDescription: "Le support de base du transformateur de 15 kVa dan… panel was bended and fixation bolt was corroded ", Discipline: "Elec", …}
                    // console.log(2)
                    //  빈컬럼 추가하는 로직이 필요  //  excelChangedArray
                    // console.dir(event)
                    // console.dir(rowData.tableData.id)
                    setSelectRowId(rowData.tableData.id)


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
                    // console.log(htmlKetArray)
                    // console.log(htmlValueArray)
                    eachRowKeyData.current = htmlKetArray
                    eachRowValueData.current = htmlValueArray
                    setEachRowKData(eachRowKeyData.current)
                    setEachRowVData(eachRowValueData.current)
                }}
                options={{
                    // rowStyle: rowData => ({  // 렉폭팔
                    //     backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                    //   }),
                    // rowStyle: (rowData) => {
                    //     return {
                    //         backgroundColor: (selectedRow === rowData.tableData.id)? '#EEE' : '#FFF',
                    //     }
                    // },
                    paginationType: "stepped",
                    columnsButton:true,
                    // https://material-table.com/#/docs/features/styling
                    headerStyle: {
                        backgroundColor: '#616161',
                        width: '10px',
                        height: '5px',
                        // whiteSpace: 'nowrap',
                        // textAlign: 'left',
                        // flexDirection: 'row',
                        // overflow: 'hidden',
                        // textOverflow: 'ellipsis',
                        // paddingLeft: 5,
                        // paddingRight: 5,
                        // backgroundColor: "#607d8b",
                        // backgroundColor: "#263238",
                        fontWeight: 'bold',
                        color: "white",
                      },
                    tableLayout: 'fixed',
                }}
                components={{
                    Toolbar: props => (
                      <div>
                        <Collapse in={alertOpen}>
                            <Alert severity="error" onClose={() => {setAlertOpen(false)}}>Please check Column Mapping.</Alert>
                        </Collapse>
                        <Collapse in={alertImportOpen}>
                            <Alert severity="error" onClose={() => {setAlertImportOpen(false)}}>Please check Excel Import.</Alert>
                        </Collapse>
                        <div style={{padding:'0', width:'100%'}}>
                        {/* <MTableToolbar {...props} /> */}
                        <Box display="flex" p={1} bgcolor="background.paper">
                            <Box p={0} flexGrow={1} >
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
                            <Box pt={0.5}>
                                {/* <Button>
                                    <SettingsIcon fontSize="large" />
                                </Button> */}
                                &nbsp;&nbsp;&nbsp;
                                <ColumnMappingButton 
                                    excelColumns={columnsData} 
                                    onexcelChangedColumns={onexcelChangedColumns} 
                                    onApply={onApply} 
                                    compareDbColumns={compareDbColumns}
                                />

                                &nbsp;&nbsp;&nbsp;
                                <Button className={classes.baseButton}  variant="outlined" onClick={handleVerifyButton}
                                    style={{
                                        textTransform: 'none'    // upper case button => lower case button
                                    }}
                                >
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