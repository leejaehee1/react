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

    return (
        <>
            {/* <Card>
                <Title title="Welcome to the administration" />
            <CardContent>Lorem ipsum sic dolor amet...</CardContent>
            </Card> */}
            <Box display="flex" mt="3em"> 
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
    )
};

export default PunchListComponent;