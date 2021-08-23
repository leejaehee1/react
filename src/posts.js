import * as React from 'react';
import {
    Show,
    ShowButton,
    SimpleShowLayout,
    RichTextField,
    DateField,
    List,
    Edit,
    Create,
    Datagrid,
    ReferenceField,
    TextField,
    EditButton,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
} from 'react-admin';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const PostList = props => (
    // <List {...props} filters={postFilters}>
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            {/* <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField> */}
            <TextField source="PunchID" />
            <TextField source="ProjectID" />
            {/* <TextField source="IssueDesp" /> */}
            <TextField source="CompletedDate" />
            {/* <TextField source="DrawingID" /> */}
            {/* <EditButton /> */}
            {/* <ShowButton /> */}
        </Datagrid>
    </List>
);