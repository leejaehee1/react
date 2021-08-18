// import React from 'react';

// const PunchListComponent = () => {
//     return (
//         <div>
//         <br />
//         <br />
//         <br />
//         <br />
        
//         <h1>PunchListComponent 페이지 등장</h1>
//         </div>
//     )
// }

// export default PunchListComponent;

import * as React from "react";
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Discipline from "./chart/Discipline";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import { Title } from 'react-admin';
const PunchListComponent = () => {
    // const [show, setShow] = React.useState=(() => {
    //     console.log("rendering test")
    //     return false
    // })
    const [show, setShow] = React.useState(true)

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

    return (
        <>
            {/* <Card>
                <Title title="Welcome to the administration" />
            <CardContent>Lorem ipsum sic dolor amet...</CardContent>
            </Card> */}
            <br />
            <ButtonGroup size="large" variant="text" color="primary" aria-label="large outlined primary button group">
                <Button onClick={handleDashBoard}>DashBoard</Button>
                <Button onClick={handleStatus}>Status</Button>
                {/* <Button>Three</Button> */}
            </ButtonGroup>
            {/* <button onClick={handleClink}>DashBoard</button>
            <button onClick={handleClink}>Status</button> */}
            {
                show? (
                    <>
                    <Box display="flex" mt="1em"> 
                        <Box bgcolor="palevioletred" flex="4" mr="4em">
                        {/* bgcolor="palevioletred" */}
                            {/* <DealsChart /> */}DashBoard
                        </Box>
                        <Box bgcolor="palevioletred" flex="4" mr="4em">
                            {/* <Welcome /> */}asdfasdf
                        </Box>
                        <Box flex="4">
                            <p>Discipline</p>
                            <Discipline />
                        </Box>
                    </Box>
                    </>
                ) : (
                    <>
                    <Box display="flex" mt="1em"> 
                        <Box bgcolor="success.main" flex="4" mr="4em">
                            {/* <DealsChart /> */}Status
                        </Box>
                        <Box bgcolor="success.main" flex="2" mr="4em">
                            {/* <Welcome /> */}asdfasdf
                        </Box>
                        <Box bgcolor="success.main" flex="4">
                            {/* <Welcome /> */}asdfasdf
                        </Box>
                    </Box>
                    </>
                )
            }
        </>
    )
};

export default PunchListComponent;