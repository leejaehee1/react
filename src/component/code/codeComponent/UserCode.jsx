import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';


export const UserCode = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="userID" />
            {/* <TextField source="password" /> */}
            <TextField source="userName" />
            <TextField source="email" />
            <TextField source="company" />
            <TextField source="authority" />
            <TextField source="personalID" />
            <TextField source="department" />
            <TextField source="active" />
        </Datagrid>
    </List>
);

export default UserCode;