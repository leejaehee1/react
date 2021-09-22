import React, { useEffect } from 'react';
import {
    Box,
    Menu,
    MenuItem,
    Button,
} from '@material-ui/core';
import CustomBox from './CustomBox';

const options = [
    'Show some love to Material-UI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content',
  ];

const StateButton = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [eachState, setEachState] = React.useState(props.eachState);

    // useEffect(()=> {
    //     if (eachState==="1") {
    //         setEachState("Draft")
    //     } else if (eachState=="2") {
    //         setEachState("Opened")
    //     } else if (eachState=="3") {
    //         setEachState("Ready Review")
    //     } else if (eachState=="4") {
    //         setEachState("Req for Close")
    //     } else if (eachState=="5") {
    //         setEachState("Not Accepted")
    //     } else if (eachState=="6") {
    //         setEachState("Closed")
    //     }
    // }, [])
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickListItem}>
                
                {/* <Box
                    // button
                    width="110px"
                    height={28}
                    display="inline-block"
                    textAlign="center"
                    lineHeight="28px"
                    verticalAlign="middle"
                    color="white"
                    borderRadius={3}
                    bgcolor='#e88b7d'
                    component="span"
                >{eachState}</Box> */}
                <CustomBox stateData={eachState} />
                {/* Open Menu */}
            </Button>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {options.map((option, index) => (
                <MenuItem
                    key={option}
                    disabled={index === 0}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                >
                    <Box
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
                    >Open</Box>
                    {option}
                </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default StateButton;