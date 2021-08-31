import * as React from "react";
import {
    // useGetMany,
    // useCreate,
    // useUpdate,
    // useGetList,
    // Identifier,
    useListContext
} from 'react-admin';
import { List, Datagrid} from 'react-admin';

export const TestAuthority = (props) => {
    const { data, ids, } = useListContext();
    console.log(data)
    return (
    <List {...props}>
        <Datagrid>
            {/* <TextField source="id" />
            <TextField source="title" />
            <DateField source="published_at" />
            <TextField source="category" />
            <BooleanField source="commentable" /> */}
        </Datagrid>
    </List>
);}