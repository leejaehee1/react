import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';


export const System = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="system" />
            <DateField source="systemName" />
        </Datagrid>
    </List>
);

export default System;