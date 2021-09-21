import React from 'react';
import {
    Box,
} from '@material-ui/core';

const StateButton = () => {

    return (
        <>
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
        </>
    )
}

export default StateButton;