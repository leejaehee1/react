import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';


export const Systems = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="systemID" />
            <TextField source="systemName" />


            
        </Datagrid>
    </List>
);

export default Systems; 