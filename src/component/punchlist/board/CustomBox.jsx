import React, { useEffect } from "react";
import {
    Box,
} from '@material-ui/core';

const CustomBox = (props) => {
    const [stateValue, setStateValue] = React.useState("")
    const [colorValue, setColorValue] = React.useState("")

    useEffect(()=> {
        if (props.stateData==="1") {
            setStateValue("Draft")
            setColorValue("#b27765")
        } else if (props.stateData=="2") {
            setStateValue("Opened")
            setColorValue('#b28e59')
        } else if (props.stateData=="3") {
            setStateValue("Ready Review")
            setColorValue('#4e342e')
        } else if (props.stateData=="4") {
            setStateValue("Req for Close")
            setColorValue('#7d6d99')
        } else if (props.stateData=="5") {
            setStateValue("Not Accepted")
            setColorValue('#739574')
        } else if (props.stateData=="6") {
            setStateValue("Closed")
            setColorValue('#648dae')
        }
    }, [props.stateData])

    return (
        <>
            <Box
                button
                width="110px"
                height={28}
                display="inline-block"
                textAlign="center"
                lineHeight="28px"
                verticalAlign="middle"
                color="white"
                borderRadius={3}
                bgcolor={colorValue}
                component="span"
            >{stateValue}</Box>
        </>
    )
}

export default CustomBox;