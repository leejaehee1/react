import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';


export const Unit = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="unit" />
            <TextField source="unitName" />
        </Datagrid>
    </List>
);

export default Unit;