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
import PunchStatus from "./chart/PunchStatus";
import Category from "./chart/Category";
import { useAuthenticated } from 'react-admin';

// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import { Title } from 'react-admin';



import { Admin, Resource } from 'react-admin';
import { PostList } from "../../posts";
import DetailComponent from "./components/DetailComponent";
import DetailSelector from "./components/DetailSelector";
import DetailPageComponent from "./components/DetailPageComponent";
import { Punchs } from "./Punchs";


// https://material-ui.com/system/borders/
const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    style: { width: '75rem', height: '20rem' },
  };



const PunchListComponent = () => {
    useAuthenticated()
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
        <React.Fragment>
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
                    <Box borderColor="primary.main" {...defaultProps}>
                    <Box display="flex" mt="1em"> 
                        <Box flex="3" m="2em">
                        {/* bgcolor="palevioletred" */}
                            <h3>Punch Status</h3>
                            <PunchStatus />
                        </Box>
                        {/* <Box flex="3" m="2em">
                            <h3>Category</h3>
                            <Category />
                        </Box> */}
                        <Box flex="5" m="2em">
                            <h3>Discipline</h3>
                            <Discipline />
                        </Box>
                    </Box>
                    </Box>
                    </>
                ) : (
                    <>
                    <Box borderColor="grey.500" {...defaultProps}>
                    <Box display="flex" mt="1em"> 
                        <Box bgcolor="success.main" flex="4" m="4em">
                            {/* <DealsChart /> */}Status
                        </Box>
                        <Box bgcolor="success.main" flex="2" m="4em">
                            {/* <Welcome /> */}asdfasdf
                        </Box>
                        <Box bgcolor="success.main" flex="4" m="4em">
                            {/* <Welcome /> */}asdfasdf
                        </Box>
                    </Box>
                    </Box>
                    </>
                )
            }
            {/* <p>다음글</p> */}

            <Box display="flex" mt="2em">
                <Box flex="3" mr="1em">
                    <Resource name="list" list={Punchs} />
                </Box>
                <Box flex="2" display="flex">
                    <Box flex="1" mr="1em">
                        <DetailComponent />
                        <DetailSelector />
                        <DetailPageComponent />
                    </Box>
                </Box>
            </Box>

        </React.Fragment>
    )
};

export default PunchListComponent;