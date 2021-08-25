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
            {/* <TextField source="id" /> */}
            {/* <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField> */}
            {/* <TextField source="id"  >
                asadf
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            </TextField> */}
            {/* <TextField /> */}
            <div>
            <TextField source="PunchID" />, 
            <TextField source="Discipline" />,
            <TextField source="BulkName" />,
            <TextField source="CostImpact" />,
            <TextField source="CompletedBy" />,
             <br />
            <TextField source="IssueDesp" />
            <br />
            <TextField source="CompleteDesp" />
         
            </div>
            {/* <TextField source="IssueDesp" /> */}
            {/* <TextField source="CompletedDate" /> */}
            {/* <TextField source="DrawingID" /> */}
            {/* <EditButton /> */}
            {/* <ShowButton /> */}
        </Datagrid>
    </List>
);