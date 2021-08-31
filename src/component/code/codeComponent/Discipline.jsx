import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';


export const Discipline = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="discipline" />
            <TextField source="disciplineName" />
            <TextField source="shortName" />
            {/* <DateField source="endDate" /> */}

        </Datagrid>
    </List>
);

export default Discipline;