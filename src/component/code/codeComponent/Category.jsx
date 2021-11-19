import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';


export const Category = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="category" />
            <TextField source="categoryName" />
            <TextField source="stage" />
            {/* <DateField source="endDate" /> */}
            
        </Datagrid>
    </List>
);

export default Category;