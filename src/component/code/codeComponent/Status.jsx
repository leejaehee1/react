import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';


export const Status = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="status" />
            <TextField source="statusName" />
            <TextField source="shortName" />
            <TextField source="authority" />
            <TextField source="remarks" />
            {/* <DateField source="endDate" /> */}

        </Datagrid>
    </List>
);

export default Status;