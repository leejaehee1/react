import React, { useEffect } from 'react';
import {
    Box,
    Menu,
    MenuItem,
    Button,
} from '@material-ui/core';
import CustomBox from './CustomBox';

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

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        // 주어진 버튼 눌렀을 때
        // console.dir(event.currentTarget.textContent)
        setSelectedIndex(index);
        // setEachState(()=>(index+2));
        setEachState(index+2);
        setAnchorEl(null);
    };
    
    const handleClose = () => {
        // 다른 버튼 눌렀을 때
        console.log(1)
        setEachState(selectedIndex+2)
        setAnchorEl(null);
    };

    useEffect(()=> {
        console.log(eachState)

    }, [selectedIndex])
    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" style={{textTransform:"none"}} onClick={handleClickListItem}>

                <CustomBox stateData={eachState} />
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
        </div>
    )
}

export default StateButton;