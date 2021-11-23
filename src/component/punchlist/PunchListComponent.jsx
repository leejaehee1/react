import React, {useEffect, useState} from 'react';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Discipline from "./chart/Discipline";
import PunchStatus from "./chart/PunchStatus";
import Category from "./chart/Category";
import { useAuthenticated } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Alert } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';


//search
import TuneIcon from '@material-ui/icons/Tune';



import { useGetList } from 'react-admin';
import DetailSelector from "./components/DetailSelector";
import DetailPageComponent from "./components/DetailPageComponent";


import PunchBoard from './PunchBoard.jsx';


import "./styles/button.css"
import DetailHistoryComponent from './components/DetailHistoryComponent';
import DashBoardStatus from './chart/DashBoardStatus';

// filter model
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PunchlistFilter from './components/PunchlistFilter';
import PunchlistSearch from './components/PunchlistSearch';


// https://material-ui.com/system/borders/

  

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 5,
        paddingLeft: 0,
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        backgroundColor: '#ECECEC',
        height: '4rem',
    },
    onepaper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        backgroundColor: '#ECECEC',
    },
    lbutton: {
        textAlign: 'center',
        width: '120px',
        color: 'white',
        backgroundColor: '#616161',
        height: '30px',
        textTransform: 'none',
        fontSize: '14px',
        
        // background:'black',
    
    },
    rbutton: {
        //   padding: theme.spacing(1.5),
        // margin: theme.spacing(1),
        // width: theme.spacing(16),
        // height: theme.spacing(16),
        textAlign: 'center',
        width: '120px',
        // color: theme.palette.text.disabled,
        color: 'black',
        backgroundColor: '#bdbdbd',
        height: '30px',
        textTransform: 'none',
        fontSize: '14px',


        // background:'black',
    
    },
}));


const PunchListComponent = () => {
    const classes = useStyles();
    useAuthenticated()
    // const [show, setShow] = React.useState=(() => {
    //     console.log("rendering test")
    //     return false
    // })





    const [show, setShow] = React.useState(true)
    const [stateShow, setStateShow] = React.useState(true)

    // function handleClink() {
    //     setShow((prev) => !prev)
    //     console.log("찍힘")
    //     console.log(show)
    // }

    function handleDashBoard() {
        setShow(true);
    }

    function handleStatus() {
        setShow(false);
    }

    function handleStateOpen() {
        setStateShow(false);
    }

    function handleStateClose() {
        setStateShow(true);
    }



    
    
    const { data, ids } = useGetList('list', );
    // const [boardData] = useState([])
    
    const [buttonOne, setButtonOne] = useState(true);
    const [buttonTwo, setButtonTwo] = useState(false);
    const [buttonThr, setButtonThr] = useState(false);
    const [buttonFour, setButtonFour] = useState(false);
    const [buttonFive, setButtonFive] = useState(false);
    const [buttonSix, setButtonSix] = useState(false);
    
    
    const boardAllData = data;
    const allIndex = ids.filter(id=> (data[id].status !== '1' 
    && data[id].projectID===window.localStorage.getItem('projectName')
    ));
    const allOpenedIdx = ids.filter(id=> (data[id].status === '2' 
    && data[id].projectID===window.localStorage.getItem('projectName')
    ));
    const allReadyForReviewIdx = ids.filter(id=> (data[id].status === '3' && data[id].projectID===window.localStorage.getItem('projectName')));
    const allRequestedForCloseIdx = ids.filter(id=> (data[id].status === '4' && data[id].projectID===window.localStorage.getItem('projectName')));
    const allNotAcceptedIdx = ids.filter(id=> (data[id].status === '5' && data[id].projectID===window.localStorage.getItem('projectName')));
    const allClosedIdx = ids.filter(id=> (data[id].status === '6' && data[id].projectID===window.localStorage.getItem('projectName')));
    
    const [boardIndexData, setBoardIndexData] = useState(allIndex)
    const [upPunchBoardData, setUpPunchBoardData] = useState(0)


    // const firstTarget = () => {
    //     setButtonOne(true);
    //     setButtonTwo(false);
    //     setButtonThr(false);
    //     setButtonFour(false);
    //     setButtonFive(false);
    //     setButtonSix(false);
    //     setBoardIndexData(allIndex);
    // }
    // useEffect(()=> {
    //     firstTarget()
    // }, [])

    const changeState = (e) => {
        let targetClass = e.target.parentNode.classList.value;

        switch (targetClass) {
            case 'afterAll':
                break;
            case 'beforeAll':
                if(!buttonOne) {
                    setButtonOne(true);
                    setButtonTwo(false);
                    setButtonThr(false);
                    setButtonFour(false);
                    setButtonFive(false);
                    setButtonSix(false);
                    setBoardIndexData(allIndex);
                }
                break;
            case 'afterOpened':
                break;
            case 'beforeOpened':
                if(!buttonTwo) {
                    setButtonOne(false);
                    setButtonTwo(true);
                    setButtonThr(false);
                    setButtonFour(false);
                    setButtonFive(false);
                    setButtonSix(false);
                    setBoardIndexData(allOpenedIdx);
                }
                break;
            case 'afterReadyForReview':
                break;
            case 'beforeReadyForReview':
                if(!buttonThr) {
                    setButtonOne(false);
                    setButtonTwo(false);
                    setButtonThr(true);
                    setButtonFour(false);
                    setButtonFive(false);
                    setButtonSix(false);
                    setBoardIndexData(allReadyForReviewIdx);
                }
                break;
            case 'afterRequestedForClose':
                break;
            case 'beforeRequestedForClose':
                if(!buttonFour) {
                    setButtonOne(false);
                    setButtonTwo(false);
                    setButtonThr(false);
                    setButtonFour(true);
                    setButtonFive(false);
                    setButtonSix(false);
                    setBoardIndexData(allRequestedForCloseIdx);
                }
                break;
            case 'afterNotAccepted':
                break;
            case 'beforeNotAccepted':
                if(!buttonFive) {
                    setButtonOne(false);
                    setButtonTwo(false);
                    setButtonThr(false);
                    setButtonFour(false);
                    setButtonFive(true);
                    setButtonSix(false);
                    setBoardIndexData(allNotAcceptedIdx);
                }
                break;
            case 'afterClosed':
                break;
            case 'beforeClosed':
                if(!buttonSix) {
                    setButtonOne(false);
                    setButtonTwo(false);
                    setButtonThr(false);
                    setButtonFour(false);
                    setButtonFive(false);
                    setButtonSix(true);
                    setBoardIndexData(allClosedIdx);
                }
                break;
            // default:
            //     alert('occuring default')

            
        }
    }

    

    // useEffect(()=> {
    //     console.log(upPunchBoardData)
    // },[upPunchBoardData])

    const [issueShow, setIssueShow] = useState(true)
    const [historyShow, setHistoryShow] = useState(false)


    const [allCheckBox, setAllCheckBox] = useState(false)
    // const [otherCheckBox, setOtherCheckBox] = useState(false)
    const changeAllCheckbox = (e) => {
        // console.log(e.target.checked)
        // console.log(e.target.value)
        setAllCheckBox(e.target.checked)
    }

    // useEffect(()=> {
    //     setOtherCheckBox(otherCheckBox)
    //     // console.log(allCheckBox)
    // },[allCheckBox])

    // filter Model 
    const [filterOpen, setFilterOpen] = useState(false);
    
    const handleFilterOpen = () => {
        // console.log('들어온다.')
        setFilterOpen(true);
    }
    
    const handleFilterClose = () => {
        setFilterOpen(false);
    }
    

    
    // filter logic
    const [dataForFilter, setDataForFilter] = useState();
    useEffect(()=>{
        
        // setButtonOne(true);
        setButtonOne(false);
        setButtonTwo(false);
        setButtonThr(false);
        setButtonFour(false);
        setButtonFive(false);
        setButtonSix(false);
        
        console.log(dataForFilter);

        let keywordA;
        let areaF;
        let categoryF;
        let disciplineF;
        let drawingF;
        let issuedByF;
        let projectIDF;
        let tagNumberF;
        let unitF;
        let costImpactF;
        let difficultyF;
        let scheduleImpactF;
        let keywordF;
        keywordA = dataForFilter?.keyword.map(v => v.content)
        // console.log(keywordA)

        // let stepA = ids.filter(id => data[id].area === dataForFilter?.area);
        // const allIndex = ids.filter(id=> data[id].status !== '1');

        if(dataForFilter?.area.length){
            // console.log('area')
            areaF = ids.filter(id => data[id].area === dataForFilter?.area);
            // console.log(areaF.length)
        }else{
            areaF = ids
        }
        if(dataForFilter?.category.length){
            // console.log('category')
            categoryF = areaF.filter(id => data[id].category === dataForFilter?.category);
            // console.log(categoryF.length)
        }else {
            categoryF = areaF
        }
        if(dataForFilter?.discipline.length){
            console.log('discipline')
            disciplineF = categoryF.filter(id => data[id].discipline === dataForFilter?.discipline);
            console.log(disciplineF.length)
        }else {
            disciplineF = categoryF
        }
        if(dataForFilter?.drawing.length){
            // console.log('drawing')
            // var drawingF = disciplineF.filter(id => data[id].drawing === dataForFilter?.drawing); //     you must change Drawing Filter  
            drawingF = disciplineF
        }else {
            drawingF = disciplineF
        }
        if(dataForFilter?.issuedBy.length){
            issuedByF = drawingF.filter(id => data[id].issuedBy === dataForFilter?.issuedBy);
        }else {
            issuedByF = drawingF
        }
        if(dataForFilter?.projectID.length){
            projectIDF = issuedByF.filter(id => data[id].projectID === dataForFilter?.projectID);
        }else {
            projectIDF = issuedByF
        }
        if(dataForFilter?.tagNumber.length){
            tagNumberF = projectIDF.filter(id => data[id].tagNumber === dataForFilter?.tagNumber);
        }else {
            tagNumberF = projectIDF
        }
        if(dataForFilter?.unit.length){
            unitF = tagNumberF.filter(id => data[id].unit === dataForFilter?.unit);
        }else {
            unitF = tagNumberF
        }
        if(dataForFilter?.costImpactA.length && dataForFilter?.costImpactB.length){
            console.log('costImpact')
            costImpactF = unitF.filter(id => (parseInt(dataForFilter?.costImpactB) <= parseInt(data[id].costImpact)) 
                                                    && (parseInt(data[id].costImpact) <= parseInt(dataForFilter?.costImpactA))
                    );
        }else {
            costImpactF = unitF
        }
        if(dataForFilter?.difficultyA.length && dataForFilter?.difficultyB.length){
            console.log('difficulty')
            difficultyF = costImpactF.filter(id => (parseInt(dataForFilter?.difficultyB) <= parseInt(data[id].difficulty)) 
                                                        && (parseInt(data[id].difficulty) <= parseInt(dataForFilter?.difficultyA))
                                            );
        }else {
            difficultyF = costImpactF
        }
        if(dataForFilter?.scheduleImpactA.length && dataForFilter?.scheduleImpactB.length){
            console.log('scheduleImpact')
            scheduleImpactF = difficultyF.filter(id => (parseInt(dataForFilter?.scheduleImpactB) <= parseInt(data[id].scheduleImpact)) 
                                                            && (parseInt(data[id].scheduleImpact) <= parseInt(dataForFilter?.scheduleImpactA))
                                                );
        }else {
            scheduleImpactF = difficultyF
        }
        if(keywordA?.length){
            console.log('keywordA')
            console.log(keywordA)
            keywordF = scheduleImpactF.filter(id => (
                                                        keywordA.includes(data[id].keyword1) 
                                                     || keywordA.includes(data[id].keyword2) 
                                                     || keywordA.includes(data[id].keyword3)
                                                     || keywordA.includes(data[id].keyword4) 
                                                     ));
        }else {
            keywordF = scheduleImpactF
        }

        // console.log(stepA)
        // console.log(12)
        // console.log(34)

        // console.log("keywordF")
        if (keywordF.length ===0 && dataForFilter){
            setAlertButton(true)
        }
        setBoardIndexData(keywordF);
    }, [dataForFilter, data, ids])

    
    // search logic
    // const searchText= useRef("");
    const [searchText, setSearchText]= useState("");

    useEffect(() => {
        setButtonOne(false);
        setButtonTwo(false);
        setButtonThr(false);
        setButtonFour(false);
        setButtonFive(false);
        setButtonSix(false);
    
        var searchD = ids.filter(id => (
                                        (searchText?searchText.toLowerCase():searchText)===(data[id].keyword1?data[id].keyword1.toLowerCase():data[id].keyword1)
                                        || (searchText?searchText.toLowerCase():searchText)===(data[id].keyword2?data[id].keyword2.toLowerCase():data[id].keyword2)
                                        || (searchText?searchText.toLowerCase():searchText)===(data[id].keyword3?data[id].keyword3.toLowerCase():data[id].keyword3)
                                        || (searchText?searchText.toLowerCase():searchText)===(data[id].keyword4?data[id].keyword4.toLowerCase():data[id].keyword4)
                                        ));
        if(!searchD.length && searchText.length){
            setAlertFilterButton(true)
            // console.log(2)
        } else {
            // console.log(3)
        }
        setBoardIndexData(searchD);
    }, [searchText, data, ids])


    const [alertButton, setAlertButton] = useState(false)
    const [alertFilterButton, setAlertFilterButton] = useState(false)
    // const

    const [ableUpdateDetailFlag, setAbleUpdateDetailFlag] = useState(true);


    useEffect(()=> {
        setAbleUpdateDetailFlag(true)
    }, [upPunchBoardData])

    if (!Object.keys(boardAllData).length) {
        return null
    }

    // console.log('----------')
    // console.log(boardAllData)
    // console.log(Object.keys(boardAllData).length)
    // console.log(boardIndexData.length)
    // if (!boardIndexData.length) return null;
    return (
        <React.Fragment>
            <Collapse in={alertButton}>
                <Alert severity="error" onClose={() => {setAlertButton(false)}}>Cannot find data by filter</Alert>
            </Collapse>
            <Collapse in={alertFilterButton}>
                <Alert severity="error" onClose={() => {setAlertFilterButton(false)}}>Cannot find keyword by filter</Alert>
            </Collapse>
            <div className={classes.root} size="large" variant="text" color="primary" aria-label="large outlined primary button group">
            {/* <div> */}
            {show?(
            <>
                <button className="stateChartSelectButton" onClick={handleDashBoard}>DashBoard</button>
                <button className="stateStatusSelectButton" onClick={handleStatus}>Status</button>
            </>
            ):(
            <>
                <button className="stateStatusSelectButton" onClick={handleDashBoard}>DashBoard</button>
                <button className="stateChartSelectButton" onClick={handleStatus}>Status</button>
            </>
            )}
            {/* </div> */}
                {/* <Button>Three</Button> */}
            </div>
            { stateShow?(
                show? (
                    <>
                    <div 
                         borderColor="#e0e0e0" 
                        style={{backgroundColor:'#ECECEC', 
                                margin:'0px', 
                                width:'100%', 
                                height:'180px'
                            }}
                    >
                        <Box display="flex" > 
                            <Box flex="4" p={0} m="1em">
                            {/* bgcolor="palevioletred" */}
                                {/* <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Punch Status</h3> */}
                                <PunchStatus 
                                    allData={boardAllData}
                                    // show={show}
                                 />
                            </Box>
                            <Box flex="4" p={0} m="1em">
                                {/* <h3>Category</h3> */}
                                <Category 
                                    allData={boardAllData}
                                    // show={show}
                                />
                            </Box>
                            <Box flex="4" p={0} m="1em">
                                {/* <h3>&nbsp;&nbsp;&nbsp;Discipline</h3> */}
                                <Discipline 
                                    allData={boardAllData}
                                />
                            </Box>
                        </Box>
                    </div>
                    </>
                ) : (
                    <>
                    <Box 
                    // boxShadow={5} 
                    // borderColor="#ECECEC" 
                    style={{
                        // backgroundColor:'#ECECEC', 
                        margin:'0px', width:'100%', 
                    height:'180px'}}>
                        <DashBoardStatus />
                    </Box>
                    </>
                )) : (<></>)
            }
            {/* <p>다음글</p> */}
            <div style={{display:'flex'}}>
                <div style={{width:'45%'}}></div>
                <div style={{ textAlign: "center", width:'10%', height: '15px' }}>
                    { stateShow?
                        (
                            <Button onClick={handleStateOpen} variant="outlined" style={{ padding: "0", width: "10rem", height: "1.5rem" }}><ArrowDropUpIcon fontSize="large" /></Button>
                        ) : (
                            <Button onClick={handleStateClose} variant="outlined" style={{ padding: "0", width: "10rem", height: "1.5rem" }}><ArrowDropDownIcon fontSize="large" /></Button>
                        )
                    }
                </div>
                <div style={{
                    width:'45%', textAlign: "right", verticalAlign:'center',
                            // position:'absolute', left:'73%', 
                            padding:'5px', height: '30px' 
                            }}>
                    {/* <Button onClick={handleFilterOpen}> */}
                        <TuneIcon onClick={handleFilterOpen} fontSize="large" style={{ paddingTop: "5px", height: "100%", cursor:'pointer' }} />
                    {/* </Button> */}
            {/* SimpleDialog about TuneIcon */}
            
                    <Dialog onClose={handleFilterClose} aria-labelledby="simple-dialog-title" open={filterOpen}>
                        <DialogTitle id="simple-dialog-title" style={{display:"flex", justifyContent:'center'}}>Filter Conditions</DialogTitle>
                        <PunchlistFilter 
                            boardAllData={boardAllData} 
                            setFilterOpen={setFilterOpen}
                            setDataForFilter={setDataForFilter}
                        />
                    </Dialog>
                    {/* <input type="text" name="scheduleImpactA" className="filterInput" style={{width: "40px"}} onChange={handleChange} /> */}
                    <PunchlistSearch setSearchText={setSearchText} />
                    {/* <input style={{width: "150px", textAlign: "left"}} className="searchFilterInput" type="text" value={searchText} onChange={handeleSearchFilter} />
                    <SearchIcon fontSize="large" style={{ paddingTop: "10px", paddingBottom:'-5px' , height: "30px", margin:'0px' }} onClick={handleSearchClick} /> */}
                </div>
            </div>
            <Box display="flex" mt="2em">
                <Box flex="3" mr="1em">
                    <div style={{display:'flex', width:'790px', justifyContent:'space-between'}}>

                        <div style={{width:'40px', margin:'0px'}}>
                            <FormControlLabel
                                style={{marginLeft:'5px', marginBottom: '-10px'}}
                                control={<Checkbox size="small" color="default" onClick={changeAllCheckbox} />}
                                // label={<FormatAlignJustifyIcon fontSize="small" />}
                                labelPlacement="top"
                            />
                        </div>
                        {buttonOne? 
                        <button className="afterAll" onMouseDown={changeState}>
                            <p className="title">All</p>
                            <p>{allIndex.length}</p>
                        </button>
                        :
                        <button className="beforeAll" onMouseDown={changeState}>
                            <p className="title">All</p>
                            <p>{allIndex.length}</p>
                        </button>
                        }

                        {buttonTwo?
                        <button className="afterOpened" onMouseDown={changeState}>
                            <p className="title">Opened</p>
                            <p>{allOpenedIdx.length}</p>
                        </button>
                        :
                        <button className="beforeOpened" onMouseDown={changeState}>
                            <p className="title">Opened</p>
                            <p>{allOpenedIdx.length}</p>
                        </button>
                        }
                        {buttonThr?
                            <button className="afterReadyForReview" onMouseDown={changeState}>
                                <p className="title">Ready for Review</p>
                                <p>{allReadyForReviewIdx.length}</p>
                            </button>
                        :
                            <button className="beforeReadyForReview" onMouseDown={changeState}>
                                <p className="title">Ready for Review</p>
                                <p>{allReadyForReviewIdx.length}</p>
                            </button>
                        }
                        {buttonFour?
                            <button className="afterRequestedForClose" onMouseDown={changeState}>
                                <p className="title">Requested for Close</p>
                                <p>{allRequestedForCloseIdx.length}</p>
                            </button>
                        :
                            <button className="beforeRequestedForClose" onMouseDown={changeState}>
                                <p className="title">Requested for Close</p>
                                <p>{allRequestedForCloseIdx.length}</p>
                            </button>
                        }

                        {buttonFive?
                            <button className="afterNotAccepted" onMouseDown={changeState}>
                                <p className="title">Not Accepted</p>
                                <p>{allNotAcceptedIdx.length}</p>
                            </button>
                        :
                            <button className="beforeNotAccepted" onMouseDown={changeState}>
                                <p className="title">Not Accepted</p>
                                <p>{allNotAcceptedIdx.length}</p>
                            </button>
                        }

                        {buttonSix?
                            <button className="afterClosed" onMouseDown={changeState}>
                                <p className="title">Closed</p>
                                <p>{allClosedIdx.length}</p>
                            </button>
                        :
                            <button className="beforeClosed" onMouseDown={changeState}>
                                <p className="title">Closed</p>
                                <p>{allClosedIdx.length}</p>
                            </button>
                        }
                    </div>
                    

                    {/* {JSON.stringify(ids)}
                    {JSON.stringify(boardIndexData.length)}
                    {JSON.stringify(boardIndexData)}
                    {JSON.stringify(allIndex)}
                    {JSON.stringify(boardIndexData.length?boardIndexData:allIndex)} */}
                    {JSON.stringify(boardIndexData)}
                    {/* {JSON.stringify(boardAllDataC)} */}
                    {JSON.stringify(allIndex)}
                    <PunchBoard 
                        boardData={boardAllData} 
                        boardIds={boardIndexData} 
                        // boardIds={boardIndexData.length?boardIndexData:allIndex} 
                        setUpPunchBoardData={setUpPunchBoardData}
                        otherCheckBox={allCheckBox}
                        setAbleUpdateDetailFlag = {setAbleUpdateDetailFlag}
                    />
                </Box>
                <Box flex="2" display="flex">
                    <Box flex="1" mr="1em">
                        {/* <DetailComponent /> */}
                        <DetailSelector 
                            boardData={boardAllData} 
                            setIssueShow={setIssueShow} 
                            setHistoryShow={setHistoryShow} 

                            downDetailData={
                                boardAllData[upPunchBoardData]
                                ?boardAllData[upPunchBoardData]
                                :boardAllData[allIndex[0]]}
                        />
                        {issueShow?
                            <DetailPageComponent 
                                ableUpdateDetailFlag={ableUpdateDetailFlag}
                                setAbleUpdateDetailFlag={setAbleUpdateDetailFlag}
                                downDetailData={
                                    boardAllData[upPunchBoardData]
                                    ?boardAllData[upPunchBoardData]
                                    :boardAllData[allIndex[0]]}
                                    upPunchBoardData={upPunchBoardData}
                            />
                        :
                            null
                        }
                        {historyShow?
                            <>
                                <DetailHistoryComponent
                                    downDetailData={
                                        boardAllData[upPunchBoardData]
                                        ?boardAllData[upPunchBoardData]
                                        :boardAllData[allIndex[0]]}
                                    beforeFilterData={boardAllData}
                                />
                            </>
                        :
                            null
                        }
                    </Box>
                </Box>
            </Box>

        </React.Fragment>
    )
};

export default PunchListComponent;