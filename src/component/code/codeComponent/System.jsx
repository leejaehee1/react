import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';


export const Systems = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="systemID" />
            <TextField source="systemName" />


            
        </Datagrid>
    </List>
);

export default Systems; 