import React, {useEffect, useState} from 'react';
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


// https://material-ui.com/system/borders/
const defaultProps = {
    // bgcolor: 'background.paper',
    bgcolor: '#ECECEC',
    // textAlign: 'center',
    // marginleft: 5,
    m: 0,
    // border: 1,
    style: { width: '100%', height: '16rem' },
  };

  

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
        // color: theme.palette.text.disabled,
        color: 'white',
        backgroundColor: '#616161',
        // background:'black',
    
    },
    rbutton: {
        //   padding: theme.spacing(1.5),
        // margin: theme.spacing(1),
        // width: theme.spacing(16),
        // height: theme.spacing(16),
        textAlign: 'center',
        // color: theme.palette.text.disabled,
        color: 'black',
        backgroundColor: '#bdbdbd',
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
    const [inputData, setInputData] = React.useState(data)
    const [inputIds, setInputIds] = React.useState(ids)
    const [boardData, setboardData] = useState("init Data")
    // console.log(1)
    // console.log(1)
    // console.log(1)
    // console.log(1)
    // console.log("data")
    // console.log(data)
    // console.log("inputData")
    // console.log(inputData)
    if (!data) return null;
    if (!ids) return null;
    return (
        <React.Fragment>
            <br />
            <ButtonGroup className={classes.root} size="large" variant="text" color="primary" aria-label="large outlined primary button group">
                <Button className={classes.lbutton} onClick={handleDashBoard}>DashBoard</Button>
                <Button className={classes.rbutton} onClick={handleStatus}>Status</Button>
                {/* <Button>Three</Button> */}
            </ButtonGroup>
            { stateShow?(
                show? (
                    <>
                    {/* <Box bgcolor="primary.main" color="red" borderColor="red" {...defaultProps}> */}
                    <Box borderColor="#e0e0e0" {...defaultProps}>
                        <Box display="flex" > 
                            <Box flex="4" p={0} m="1em">
                            {/* bgcolor="palevioletred" */}
                                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Punch Status</h3>
                                <PunchStatus 
                                    allData={data}
                                 />
                            </Box>
                            <Box flex="3" p={0} m="1em">
                                <h3>Category</h3>
                                <Category 
                                    allData={data}
                                />
                            </Box>
                            <Box flex="5" p={0} m="1em">
                                <h3>&nbsp;&nbsp;&nbsp;Discipline</h3>
                                <Discipline 
                                    allData={data}
                                />
                            </Box>
                        </Box>
                    </Box>
                    </>
                ) : (
                    <>
                    <Box 
                    // boxShadow={5} 
                    borderColor="#ECECEC" {...defaultProps}>
                        <Box display="flex" 
                            // width="75rem"
                            width="100%"
                            // height="18rem"
                            height="18rem"
                        // mt="1em"
                        > 
                            <Box textAlign="center" flex="1" m="2em">
                                <h3>Previous</h3>
                                <Grid item xs={12}>
                                    <Paper elevation={0} className={classes.onepaper}>
                                        <h4>전일 Remain</h4>
                                        <p>40</p>
                                    </Paper>
                                </Grid>
                            </Box>
                            <Box textAlign="center" flex="4" m="2em">
                                <h3>Current Status</h3>
                                <Grid container spacing={1}>
                                    <Grid item xs={3}>
                                        <Paper className={classes.paper} >
                                            <h4>금일까지 Issue</h4>
                                            <p>40</p>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Paper className={classes.paper}>
                                            <h4>금일 Issue</h4>
                                            <p>40</p>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Paper className={classes.paper}>
                                            <h4>전일까지 Close</h4>
                                            <p>40</p>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Paper className={classes.paper}>
                                            <h4>금일 Close</h4>
                                            <p>40</p>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Paper className={classes.paper}>
                                            <h4>총 Issue Punch 누계</h4>
                                            <p>40</p>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Paper className={classes.paper}>
                                            <h4>총 Close Punch 누계</h4>
                                            <p>40</p>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box textAlign="center" flex="1" m="2em">
                                <h3>Remain</h3>
                                <Grid item xs={12}>
                                    <Paper className={classes.onepaper}>
                                        <h4>금일 Remain</h4>
                                        <p>40</p>
                                    </Paper>
                                </Grid>
                            </Box>
                            <Box textAlign="center" flex="1" m="2em">
                                <h3 style={{margin: "0rem"}}>Progress Tracking</h3>
                                <Grid container spacing={0}>
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper} >
                                            <h4>Trend</h4>
                                            <p>6 clear Day</p>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper}>
                                            <h4>Schedule 달성분석</h4>
                                            <p>달성가능/달성불가</p>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                    </>
                )) : (<></>)
            }
            {/* <p>다음글</p> */}
            <div style={{ textAlign: "center" }}>
                { stateShow?
                (
                    <Button onClick={handleStateOpen} variant="outlined" style={{ padding: "0", width: "10rem", height: "2rem" }}><ArrowDropUpIcon fontSize="large" /></Button>
                ) : (
                    <Button onClick={handleStateClose} variant="outlined" style={{ padding: "0", width: "10rem", height: "2rem" }}><ArrowDropDownIcon fontSize="large" /></Button>
                )
                }
            </div>
            {/* <ArrowDropUpIcon fontSize="large" />
            <ArrowDropDownIcon fontSize="large" /> */}

            <Box display="flex" mt="2em">
                <Box flex="3" mr="1em">
                    <button className="beforeAll">
                        <p className="title">All</p>
                        <p>1002</p>
                    </button>
                    <button className="beforeOpened">
                        <p className="title">Opened</p>
                        <p>1002</p>
                    </button>
                    <button className="beforeReadyForReview">
                        <p className="title">Ready for Review</p>
                        <p>1002</p>
                    </button>
                    <button className="beforeRequestedForClose">
                        <p className="title">Requested for Close</p>
                        <p>1002</p>
                    </button>
                    <button className="beforeNotAccepted">
                        <p className="title">Not Accepted</p>
                        <p>1002</p>
                    </button>
                    <button className="beforeClosed">
                        <p className="title">Closed</p>
                        <p>1002</p>
                    </button>
                    
                    {/* <Resource 
                        name="list" 
                        list={Punchs} 
                        abc="abc"
                        // boardData={boardData} 
                    /> */}
                    <PunchBoard boardData={data} boardIds={ids} />
                </Box>
                <Box flex="2" display="flex">
                    <Box flex="1" mr="1em">
                        <DetailComponent />
                        <DetailSelector />
                        <DetailPageComponent />
                    </Box>
                </Box>
            </Box>

        </React.Fragment>
    )
};

export default PunchListComponent;