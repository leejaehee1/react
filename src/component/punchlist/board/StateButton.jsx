import React from 'react';
import {
    Box,
    Menu,
    MenuItem,
    Button,
} from '@material-ui/core';

const options = [
    'Show some love to Material-UI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content',
  ];

const StateButton = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

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
                <Box
                    button
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