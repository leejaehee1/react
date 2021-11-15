import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';


export const Progress = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="projectID" />
            <TextField source="predDate" />
            <TextField source="RemainYday" />
            <TextField source="IssuedYday" />
            <TextField source="IssuedToday" />
            <TextField source="IssuedTotal" />
            <TextField source="ClosedYday" />
            <TextField source="ClosedToday" />
            <TextField source="ClosedTotal" />
            <TextField source="RemainToday" />
            <TextField source="Pending" />
            <TextField source="trendIssued" />
            <TextField source="trendCompleted" />
            <TextField source="trendClosed" />
            <TextField source="predict" />
        </Datagrid>
    </List>
);

export default Progress;