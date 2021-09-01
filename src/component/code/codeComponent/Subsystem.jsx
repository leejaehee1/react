import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';


export const Subsystem = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="subsystem" />
            <DateField source="subsystemName" />
        </Datagrid>
    </List>
);

export default Subsystem;