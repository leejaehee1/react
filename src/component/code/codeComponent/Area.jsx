import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';


export const Area = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="area" />
            <TextField source="areaName" />
        </Datagrid>
    </List>
);

export default Area;