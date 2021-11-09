import React, { useEffect, useRef, useState } from 'react';
import {
    Box,
    Menu,
    MenuItem,
    Button,
} from '@material-ui/core';
import CustomBox from './CustomBox';

import {useUpdate, useRefresh, useRedirect} from 'react-admin';
import axios from 'axios';


import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

// css
import './styles/StateButton.css'

// loading
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    backgroundColor: 'rgba( 200, 200, 200, 0.07 )',
    // opacity: '0.5',
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const options = [
    'Opened',
    'Ready for Review',
    'Requested for Close',
    'Not Accepted',
    'Closed',
  ];

const StateButton = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(props.eachState);
    const [eachState, setEachState] = React.useState(props.eachState);
    // const [updataPK, setDataPK] = React.useState(props.allData.punchID)
    const updataPK = props?.allData?.punchID;
    const updataUpPK = props?.allData;
    const [update, { loading }] = useUpdate();
    const selectStatusIndex = useRef()

    const refresh = useRefresh();
    const redirect = useRedirect();

    const [loadingIcon, setLoadingIcon] = useState(false);
    let localUsername = window.localStorage.getItem('username')


    //sendEmail
    const punchListIssuedBy = useRef();
    const punchListProjectID = useRef();
    const [apiUsers, setApiUsers] = useState();
    const [apiProjectUsers, setApiProjectUsers] = useState();

    const handleClickListItem = (event) => {
        // props.eachRowId
        // // console.log(props.allData['projectID'])
        setAnchorEl(event.currentTarget);
    };
    
    const handleMenuItemClick = (event, index) => {
        setLoadingIcon(true)
        selectStatusIndex.current = index;
        // 주어진 버튼 눌렀을 때
        // console.dir(event.currentTarget.textContent)
        // setSelectedIndex(index);
        // setEachState(index+2);  // 이거하면 useEffect의 update 로직으로 간다.
        // // console.log(index===3)
        // // console.log(apiUsers)
        // // console.log(apiProjectUsers)
        // // console.log(props.allData)
        punchListIssuedBy.current = props.allData['issuedBy']
        punchListProjectID.current = props.allData['projectID']
        // // console.log(punchListIssuedBy.current)
        // // console.log(punchListProjectID.current)
        if (index===3 ){
            setAnchorEl(null);
            setOpenModal(true)
            
        }else if(index===4){
            let targetUsersSendEmail = [];
            for(var apiProjectUser of apiProjectUsers){
                if(apiProjectUser['projectID']===punchListProjectID.current){
                    targetUsersSendEmail.push(apiProjectUser['userID'])
                }
            }
            targetUsersSendEmail.push(punchListIssuedBy.current)
            // // console.log(targetUsersSendEmail)
            let targetUsersSendEmailSet = new Set(targetUsersSendEmail)
            // // console.log(targetUsersSendEmailSet)
            let targetUsersSendEmailSetArrays = Array.from(targetUsersSendEmailSet)
            // // console.log(targetUsersSendEmailSetArrays)

            let targetSendEmail = []
            for (var targetUsersSendEmailSetArray of targetUsersSendEmailSetArrays){
                for (var apiUser of apiUsers){
                if(apiUser['userID']===targetUsersSendEmailSetArray){
                    targetSendEmail.push(apiUser['email'])
                }}
            }
            // // console.log(targetSendEmail)
            let postData = {
                data:targetSendEmail,
                punchID: props.allData['punchID'],
                issuedDate: props.allData['issuedDate'],
                closedDate: props.allData['closedDate'],
                issueDescription: props.allData['issueDescription']
            }
            // // console.log(postData)
            const urlMail = 'http://54.180.147.184:5000/punchlist/mail';

            // console.log(postData)


            // turn off send mail under three line
            // axios.post(urlMail, postData)
            //     .then((res)=> console.log('success sendEmail'))
            //     .catch(err => console.log(err))

            // setEachState(index);
            update('list', 
                {a:updataPK},   // id
                {
                    status : index+2,
                    issuedBy : localUsername
                }, // data
                updataUpPK,
                {
                    onSuccess: ()=> {
                        
                        // // console.log('들어왔다능')
                        // // console.log('들어왔다능1')
                        // setEachState(index);
                        // setAnchorEl(null);
                        // refresh()
                        // redirect('/');


                        refresh()
                        setAnchorEl(null);
                        setOpenModal(false);
                        setEachState(index);
                            // setEachState(index+2)
                            // setAnchorEl(null);
                        },
                }
            )
        }else {
            update('list', 
                {a:updataPK},   // id
                {
                    status : index+2,
                    issuedBy : localUsername
                }, // data
                updataUpPK,
                {
                    onSuccess: ()=> {
                        
                        // setEachState(index);
                        // setAnchorEl(null);
                        // refresh()
                        // redirect('/');

                        refresh()
                        setAnchorEl(null);
                        setOpenModal(false);
                        setEachState(index);

                    },
                })
                
            }
            
        setLoadingIcon(false)
    };
    
    const handleClose = () => {
        // 다른 버튼 눌렀을 때
        // setEachState(selectedIndex+2)
        setAnchorEl(null);
    };

    
    // const urlProjectID = 'http://54.180.147.184:5000/punchlist/project/?range=[0, 24]';
    // const urlDiscipline = 'http://54.180.147.184:5000/punchlist/discipline/?range=[0, 24]';
    // const urlCategory = 'http://54.180.147.184:5000/punchlist/category/?range=[0, 24]';
    // const urlUnit = 'http://54.180.147.184:5000/punchlist/unit/?range=[0, 24]';
    // const urlArea = 'http://54.180.147.184:5000/punchlist/area/?range=[0, 24]';
    // const urlDrawing = 'http://54.180.147.184:5000/punchlist/drawing/?range=[0, 24]';
    const urlProjectUser = 'http://54.180.147.184:5000/punchlist/projectuser/?range=[0, 24]';
    const urlUserCode = 'http://54.180.147.184:5000/punchlist/usercode/?range=[0, 24]';

    // const [apiUsers, setApiUsers] = useState();
    // const [apiProjectUsers, setApiProjectUsers] = useState();
    
    // sending mail
    useEffect(()=> {
        axios.get(urlProjectUser)
        .then((res)=> setApiProjectUsers(res.data.result))
        .catch(err => console.log(err))
        axios.get(urlUserCode)
        .then((res)=> setApiUsers(res.data.result))
        .catch(err => console.log(err))

    }, [])

    
    // not Accepted Dialog
    const [openModal, setOpenModal] = useState(false);
    const [modalTextArea, setModalTextArea] = useState("")
    const handelModalTextArea = (e) => {
        // // console.log(e.target.value)
        setModalTextArea(e.target.value)
    }
    const handleModal = () => {
        setOpenModal(false);
    }

    const handelModalCancelButton = (e) => {
        // e.stopPropagation()
        // if (e.target !== e.currentTarget) return;
        // // console.log(11)
        setAnchorEl(null);
        setOpenModal(false);
        // e.preventDefault()
        // if (e.stopPropagation) e.stopPropagation();
        // if (e.stopImmediatePropagation) e.stopImmediatePropagation();

    }
    const handelModalApplyButton = (e) => {
        // e.stopImmediatePropagation()
        // e.stopPropagation()
        // // console.log(22)
        // setOpenModal(false);

        update('listAccept', 
                {a:updataPK},   // id
                {status : 5, notAcceptedComment:modalTextArea, notAcceptedBy: 'testUser', issuedBy : localUsername}, // data
                updataUpPK,
                {
                    onSuccess: ()=> {
                        
                        refresh()
                        setAnchorEl(null);
                        setOpenModal(false);
                        // redirect('/admin');
                        // redirect('/');
                        setEachState(5);
                        // setSelectedIndex(3);
                        // // console.log('들어왔다능1')
                        // setEachState(index+2)
                        // // console.log('들어왔다능2')
                        // setAnchorEl(null);
                        setLoadingIcon(false)
                        },
        })
        
        return false
    }

    return (
        <div>
            <Backdrop className={classes.backdrop} open={loadingIcon} onClick={handleClose}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Button aria-controls="simple-menu" aria-haspopup="true" style={{textTransform:"none"}} onClick={handleClickListItem}>

                <CustomBox stateData={eachState} allData={props.allData} />
                {/* {eachState} */}
            </Button>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                // keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {options.map((option, index) => (
                <MenuItem
                    key={option}
                    // disabled={index === props.eachState}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                >
                    {/* <Box
                        width="90px"
                        height={28}
                        display="inline-block"
                        textAlign="center"
                        lineHeight="28px"
                        verticalAlign="middle"
                        color="white"
                        borderRadius={3}
                        bgcolor='#e88b7d'
                        component="span"
                    >Open</Box> */}
                    {option} 
                    {/* {index} */}
                </MenuItem>
                ))}
            </Menu>
            <Dialog onClose={handleModal} aria-labelledby="simple-dialog-title" open={openModal}>
                <div style={{width:"400px", height:"180px", textAlign:'center' }}>
                    <DialogTitle id="simple-dialog-title" style={{display:"flex", justifyContent:'center', fontSize:'10px'}}>Comment fo Not Accepted</DialogTitle>
                    <TextField
                        id="outlined-multiline-static"
                        // label="Multiline"
                        multiline
                        rows={4}
                        // defaultValue="Default Value"
                        variant="outlined"
                        style={{width:"350px"}}
                        onChange={handelModalTextArea}

                    />
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <button className="notAcceptedCommentCancelButton" onMouseDown={handelModalCancelButton}>Cancel</button>
                    <button className="notAcceptedCommentApplyButton" onMouseDown={handelModalApplyButton}>Apply</button>
                </div>

            </Dialog>
        </div>
    )
}

export default StateButton;