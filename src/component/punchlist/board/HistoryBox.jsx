import React, { useEffect } from "react";
import {
    Box,
} from '@material-ui/core';

const HistoryBox = (props) => {
    const [stateValue, setStateValue] = React.useState("")
    const [colorValue, setColorValue] = React.useState("")
    const [allData, setAllData] = React.useState(props.allData)
    // const [buttonHeight, setButtonHeight] = React.useState()
    // // console.log(props.allData)
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
                height={props.heightData}
                display="inline-block"
                textAlign="center"
                lineHeight="36px"
                fontSize="13px"
                // fontWeight="bold"
                verticalAlign="middle"
                color="white"
                borderRadius={3}
                bgcolor={colorValue}
                component="span"
            >{stateValue}</Box>
        </>
    )
}

export default HistoryBox;