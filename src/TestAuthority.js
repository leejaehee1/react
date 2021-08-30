import * as React from "react";
import {
    useGetMany,
    useCreate,
    useUpdate,
    useGetList,
    Identifier,
} from 'react-admin';
import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';

export const TestAuthority = (props) => {
    const {authority} = props
    const {data} = useGetList('authority', )
    console.log(data)
    return (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="published_at" />
            <TextField source="category" />
            <BooleanField source="commentable" />
        </Datagrid>
    </List>
);}