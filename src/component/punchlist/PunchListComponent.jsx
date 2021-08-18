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
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
export default () => (
    <Card>
        <Title title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
);