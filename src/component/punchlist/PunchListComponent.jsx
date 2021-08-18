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
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import { Title } from 'react-admin';
const PunchListComponent = () => {
    // const [show, setShow] = React.useState=(() => {
    //     console.log("rendering test")
    //     return false
    // })
    const [show, setShow] = React.useState(false)

    function handleClink() {
        setShow((prev) => !prev)
        console.log("찍힘")
        console.log(show)
    }

    return (
        <>
            {/* <Card>
                <Title title="Welcome to the administration" />
            <CardContent>Lorem ipsum sic dolor amet...</CardContent>
            </Card> */}
            <br />
            <button onClick={handleClink}>test1</button>
            <button onClick={handleClink}>test2</button>
            {
                show? (
                    <>
                    <Box display="flex" mt="1em"> 
                        <Box bgcolor="palevioletred" flex="4" mr="4em">
                            {/* <DealsChart /> */}adfasdf
                        </Box>
                        <Box bgcolor="palevioletred" flex="4" mr="4em">
                            {/* <Welcome /> */}asdfasdf
                        </Box>
                        <Box bgcolor="palevioletred" flex="4">
                            {/* <Welcome /> */}asdfasdf
                        </Box>
                    </Box>
                    </>
                ) : (
                    <>
                    <Box display="flex" mt="1em"> 
                        <Box bgcolor="success.main" flex="4" mr="4em">
                            {/* <DealsChart /> */}adfasdf
                        </Box>
                        <Box bgcolor="success.main" flex="4" mr="4em">
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