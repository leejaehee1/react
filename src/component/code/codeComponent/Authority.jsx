import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';


export const Authority = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="authority" />
            <TextField label="Auth Namee" source="authName" />
            <TextField source="remarks" />
        </Datagrid>
    </List>
);

export default Authority;