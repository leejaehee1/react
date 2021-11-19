import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';


export const Department = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="department" />
            <TextField source="deptName" />
            <TextField source="shortName" />
            {/* <DateField source="endDate" /> */}

        </Datagrid>
    </List>
);

export default Department;