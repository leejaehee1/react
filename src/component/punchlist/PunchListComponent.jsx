import React, {useEffect, useState, useRef} from 'react';
// import * as React from "react";
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Discipline from "./chart/Discipline";
import PunchStatus from "./chart/PunchStatus";
import Category from "./chart/Category";
import { useAuthenticated } from 'react-admin';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import PageviewIcon from '@material-ui/icons/Pageview';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import ViewStreamTwoToneIcon from '@material-ui/icons/ViewStreamTwoTone';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';


// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import { Title } from 'react-admin';



import { Admin, Resource, useGetList } from 'react-admin';
import { PostList } from "../../posts";
import DetailComponent from "./components/DetailComponent";
import DetailSelector from "./components/DetailSelector";
import DetailPageComponent from "./components/DetailPageComponent";
import Punchs from "./Punchs.jsx";


import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PunchBoard from './PunchBoard.jsx';


import "./styles/button.css"
import DetailHistoryComponent from './components/DetailHistoryComponent';
import DashBoardStatus from './chart/DashBoardStatus';


// https://material-ui.com/system/borders/

  

const useStyles = makeStyles((theme) => ({
    root: {
        // padding: 10,
        marginTop: 5,
        paddingLeft: 0,
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        backgroundColor: '#ECECEC',
        height: '4rem',
        // color: theme.palette.text.secondary,
    },
    onepaper: {
        // padding: theme.spacing(0),
        padding: theme.spacing(3),
        // width: '5rem',
        textAlign: 'center',
        backgroundColor: '#ECECEC',
        // padding: theme.spacing(1),
        // textAlign: 'right',
        // color: theme.palette.text.secondary,
        // whiteSpace: 'nowrap',
        // marginBottom: theme.spacing(1),
        // color: theme.palette.text.secondary,
    },
    lbutton: {
        //   padding: theme.spacing(1.5),
        // margin: theme.spacing(1),
        // width: theme.spacing(16),
        // height: theme.spacing(16),
        textAlign: 'center',
        width: '120px',
        // color: theme.palette.text.disabled,
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

    // const { data } = useGetList('list', );
    // const inputData = React.useRef(data)
    
    const resetState = () => {
        setStateShow(true)
    }
    
    
    const { data, ids, loading, error } = useGetList('list', );
    
    // console.log(data)
    // if (loading) { return <p>Loading...</p>; }
    
    // const inputData = useRef(boardAllData)
    // const [inputIds, setInputIds] = React.useState(ids)
    const [boardData, setBoardData] = useState([])
    const [boardIndexData, setBoardIndexData] = useState([])
    
    const [buttonOne, setButtonOne] = useState(true);
    const [buttonTwo, setButtonTwo] = useState(false);
    const [buttonThr, setButtonThr] = useState(false);
    const [buttonFour, setButtonFour] = useState(false);
    const [buttonFive, setButtonFive] = useState(false);
    const [buttonSix, setButtonSix] = useState(false);
    

    const boardAllData = data;
    const allIndex = ids.filter(id=> data[id].status !== '1');;
    const allOpenedIdx = ids.filter(id=> data[id].status === '2');
    const allReadyForReviewIdx = ids.filter(id=> data[id].status === '3');
    const allRequestedForCloseIdx = ids.filter(id=> data[id].status === '4');
    const allNotAcceptedIdx = ids.filter(id=> data[id].status === '5');
    const allClosedIdx = ids.filter(id=> data[id].status === '6');
    
    const [upPunchBoardData, setUpPunchBoardData] = useState(0)

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
    const [otherCheckBox, setOtherCheckBox] = useState(false)
    const changeAllCheckbox = (e) => {
        // console.log(e.target.checked)
        // console.log(e.target.value)
        setAllCheckBox(e.target.checked)
    }

    useEffect(()=> {
        setOtherCheckBox(otherCheckBox)
        // console.log(allCheckBox)
    },[allCheckBox])
    
    return (
        <React.Fragment>
            <ButtonGroup className={classes.root} size="large" variant="text" color="primary" aria-label="large outlined primary button group">
                <Button className={classes.lbutton} onClick={handleDashBoard}>DashBoard</Button>
                <Button className={classes.rbutton} onClick={handleStatus}>Status</Button>
                {/* <Button>Three</Button> */}
            </ButtonGroup>
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
                                    allData={boardData.length?boardData:boardAllData}
                                    // show={show}
                                    // boardData={boardData.length?boardData:boardAllData} 
                                    // boardIds={boardIndexData.length?boardIndexData:allIndex} 
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
            <div style={{ textAlign: "center", height: '15px' }}>
                { stateShow?
                    (
                        <Button onClick={handleStateOpen} variant="outlined" style={{ padding: "0", width: "10rem", height: "1.5rem" }}><ArrowDropUpIcon fontSize="large" /></Button>
                    ) : (
                        <Button onClick={handleStateClose} variant="outlined" style={{ padding: "0", width: "10rem", height: "1.5rem" }}><ArrowDropDownIcon fontSize="large" /></Button>
                    )
                }
            </div>
            {/* <ArrowDropUpIcon fontSize="large" />
            <ArrowDropDownIcon fontSize="large" /> */}

            <Box display="flex" mt="2em">
                <Box flex="3" mr="1em">
                    <div style={{display:'flex', width:'790px', justifyContent:'space-between'}}>
                        {/* <Checkbox
                            size="small"
                            color="default"
                            labelPlacement="top"
                            onClick={e => {
                                // e.stopPropagation();
                                // console.log(e.target)
                                // console.log(id)
                                // onToggleItem(id);
                            }}
                        /> */}
                        <div style={{width:'40px', margin:'0px'}}>
                            <FormControlLabel
                                // value="top"
                                style={{marginLeft:'5px', marginBottom: '-10px'}}
                                control={<Checkbox size="small" color="default" onClick={changeAllCheckbox} />}
                                // label={<BeenhereIcon fontSize="small" />}
                                // label={<PageviewIcon fontSize="small" />}
                                // label={<ViewStreamTwoToneIcon fontSize="small" />}
                                label={<FormatAlignJustifyIcon fontSize="small" />}
                                labelPlacement="top"
                            />
                        </div>
                        {buttonOne? 
                        <button className="afterAll" onClick={changeState}>
                            <p className="title">All</p>
                            <p>{allIndex.length}</p>
                        </button>
                        :
                        <button className="beforeAll" onClick={changeState}>
                            <p className="title">All</p>
                            <p>{allIndex.length}</p>
                        </button>
                        }

                        {buttonTwo?
                        <button className="afterOpened" onClick={changeState}>
                            <p className="title">Opened</p>
                            <p>{allOpenedIdx.length}</p>
                        </button>
                        :
                        <button className="beforeOpened" onClick={changeState}>
                            <p className="title">Opened</p>
                            <p>{allOpenedIdx.length}</p>
                        </button>
                        }
                        {buttonThr?
                            <button className="afterReadyForReview" onClick={changeState}>
                                <p className="title">Ready for Review</p>
                                <p>{allReadyForReviewIdx.length}</p>
                            </button>
                        :
                            <button className="beforeReadyForReview" onClick={changeState}>
                                <p className="title">Ready for Review</p>
                                <p>{allReadyForReviewIdx.length}</p>
                            </button>
                        }
                        {buttonFour?
                            <button className="afterRequestedForClose" onClick={changeState}>
                                <p className="title">Requested for Close</p>
                                <p>{allRequestedForCloseIdx.length}</p>
                            </button>
                        :
                            <button className="beforeRequestedForClose" onClick={changeState}>
                                <p className="title">Requested for Close</p>
                                <p>{allRequestedForCloseIdx.length}</p>
                            </button>
                        }

                        {buttonFive?
                            <button className="afterNotAccepted" onClick={changeState}>
                                <p className="title">Not Accepted</p>
                                <p>{allNotAcceptedIdx.length}</p>
                            </button>
                        :
                            <button className="beforeNotAccepted" onClick={changeState}>
                                <p className="title">Not Accepted</p>
                                <p>{allNotAcceptedIdx.length}</p>
                            </button>
                        }

                        {buttonSix?
                            <button className="afterClosed" onClick={changeState}>
                                <p className="title">Closed</p>
                                <p>{allClosedIdx.length}</p>
                            </button>
                        :
                            <button className="beforeClosed" onClick={changeState}>
                                <p className="title">Closed</p>
                                <p>{allClosedIdx.length}</p>
                            </button>
                        }
                    </div>
                    
                    {/* <Resource 
                        name="list" 
                        list={Punchs} 
                        abc="abc"
                        // boardData={boardData} 
                    /> */}
                    <PunchBoard 
                        boardData={boardData.length?boardData:boardAllData} 
                        boardIds={boardIndexData.length?boardIndexData:allIndex} 
                        setUpPunchBoardData={setUpPunchBoardData}
                        otherCheckBox={allCheckBox}
                    />
                </Box>
                <Box flex="2" display="flex">
                    <Box flex="1" mr="1em">
                        {/* <DetailComponent /> */}
                        <DetailSelector setIssueShow={setIssueShow} setHistoryShow={setHistoryShow} />
                        {issueShow?
                            <DetailPageComponent 
                                downDetailData={
                                    boardAllData[upPunchBoardData]
                                    ?boardAllData[upPunchBoardData]
                                    :boardAllData[allIndex[0]]}
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