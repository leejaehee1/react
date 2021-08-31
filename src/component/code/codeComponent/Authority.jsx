
import * as React from "react";
import { List, Datagrid, TextField, EditButton, DateField, SelectField } from 'react-admin';
// import { EditDialog, CreateDialog } from '@react-admin/ra-form-layout';


export const Authority = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="authority" />
            <TextField label="Auth Namee" source="authName" />
            <TextField source="remarks" />
            {/* <EditButton /> */}
        </Datagrid>
    </List>
);

export default Authority;