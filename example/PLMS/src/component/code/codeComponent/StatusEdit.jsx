import * as React from "react";
import { Create, Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required } from 'react-admin';
// import RichTextInput from 'ra-input-rich-text';

// export const PostCreate = (props) => (
//     <Create {...props}>
//         <SimpleForm>
//             <TextInput source="title" />
//             <TextInput source="teaser" options={{ multiLine: true }} />
//             <RichTextInput source="body" />
//             <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
//         </SimpleForm>
//     </Create>
// );

export const StatusEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            {/* <TextInput disabled label="Id" source="id" /> */}
            <TextInput source="status" validate={required()} />
            <TextInput source="statusName" validate={required()} />
            <TextInput source="shortName" />
            <TextInput source="authority" />
            <TextInput source="remarks" />
            {/* <TextInput multiline source="teaser" validate={required()} />
            <RichTextInput source="body" validate={required()} />
            <DateInput label="Publication date" source="published_at" />
            <ReferenceManyField label="Comments" reference="comments" target="post_id">
                <Datagrid>
                    <TextField source="body" />
                    <DateField source="created_at" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField> */}
        </SimpleForm>
        {/* <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title" validate={required()} />
            <TextInput multiline source="teaser" validate={required()} />
            <RichTextInput source="body" validate={required()} />
            <DateInput label="Publication date" source="published_at" />
            <ReferenceManyField label="Comments" reference="comments" target="post_id">
                <Datagrid>
                    <TextField source="body" />
                    <DateField source="created_at" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm> */}
    </Edit>
);

export default StatusEdit;