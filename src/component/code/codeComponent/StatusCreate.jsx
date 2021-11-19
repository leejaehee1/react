import * as React from "react";
import { Create, SimpleForm, TextInput, required } from 'react-admin';


export const StatusCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput disabled label="Id" source="id" /> */}
            <TextInput source="status" validate={required()} />
            <TextInput source="statusName" validate={required()} />
            <TextInput source="shortName" validate={required()} />
            <TextInput source="authority" />
            <TextInput source="remarks" />
        </SimpleForm>

    </Create>
);

export default StatusCreate;