import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';


export const Drawing = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="projectID" />
            <TextField source="system" />
            <TextField source="subsystem" />
            <TextField source="seq" />
            <TextField source="drawingNo" />
            <DateField source="uploadDate" />
            <TextField source="imagePath" />
            <TextField source="xSize" />
            <TextField source="ySize" />
        </Datagrid>
    </List>
);

export default Drawing;