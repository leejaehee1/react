import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';


export const Subsystem = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="subsystem" />
            <TextField source="subsystemName" />
            {/* <DateField source="subsystemName" /> */}
        </Datagrid>
    </List>
);

export default Subsystem;