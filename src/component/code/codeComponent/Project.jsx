import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';


export const Project = (props) => (
    <List {...props}>
        <Datagrid>
        <TextField source="projectID" />
            <TextField label="aa" source="projectName" />
            <DateField source="startDate" />
            <DateField source="endDate" />
            <TextField source="activated" />

        </Datagrid>
    </List>
);

export default Project;