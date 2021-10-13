import React, { useEffect, useRef, useState } from 'react';
import {
    Box,
    Menu,
    MenuItem,
    Button,
} from '@material-ui/core';
import CustomBox from './CustomBox';

import {useUpdate, useRefresh, useRedirect} from 'react-admin';


import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

// css
import './styles/StateButton.css'


const options = [
    'Opened',
    'Ready for Review',
    'Requested for Close',
    'Not Accepted',
    'Closed',
  ];

const StateButton = (props) => {
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



    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        selectStatusIndex.current = index;
        // 주어진 버튼 눌렀을 때
        // console.dir(event.currentTarget.textContent)
        // setSelectedIndex(index);
        // setEachState(index+2);  // 이거하면 useEffect의 update 로직으로 간다.
        // console.log(index===3)
        if (index!==3){
            update('list', 
                {a:updataPK},   // id
                {status : index+2}, // data
                updataUpPK,
                {
                    onSuccess: ()=> {
                        // console.log('들어왔다능')
                        refresh()
                        // console.log('들어왔다능1')
                        setAnchorEl(null);
                        // console.log('들어왔다능2')

                        // redirect('/');

                        setEachState(index);
                            // setEachState(index+2)
                            // setAnchorEl(null);
                        },
                    })
        }else {
            // setSelectedIndex(3);
            setAnchorEl(null);
            setOpenModal(true)

        }
        
    };
    
    const handleClose = () => {
        // 다른 버튼 눌렀을 때
        // setEachState(selectedIndex+2)
        setAnchorEl(null);

    };

    
    // not Accepted Dialog
    const [openModal, setOpenModal] = useState(false);
    const [modalTextArea, setModalTextArea] = useState("")
    const handelModalTextArea = (e) => {
        console.log(e.target.value)
        setModalTextArea(e.target.value)
    }
    const handleModal = () => {
        setOpenModal(false);
    }

    const handelModalCancelButton = (e) => {
        // e.stopPropagation()
        // if (e.target !== e.currentTarget) return;
        // console.log(11)
        setAnchorEl(null);
        setOpenModal(false);
        // e.preventDefault()
        // if (e.stopPropagation) e.stopPropagation();
        // if (e.stopImmediatePropagation) e.stopImmediatePropagation();

    }
    const handelModalApplyButton = (e) => {
        // e.stopImmediatePropagation()
        // e.stopPropagation()
        // console.log(22)
        // setOpenModal(false);

        update('listAccept', 
                {a:updataPK},   // id
                {status : 5, notAcceptedComment:modalTextArea, notAcceptedBy: 'testUser'}, // data
                updataUpPK,
                {
                    onSuccess: ()=> {
                        refresh()
                        setAnchorEl(null);
                        setOpenModal(false);
                        console.log('들어왔다능')
                        // redirect('/admin');
                        // redirect('/');
                        setEachState(5);
                        // setSelectedIndex(3);
                        // console.log('들어왔다능1')
                        // setEachState(index+2)
                        // console.log('들어왔다능2')
                        // setAnchorEl(null);
                        },
        })
        
        return false
    }

    return (
        <div>
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