
import { List, Datagrid, TextField, EditButton } from 'react-admin';



export const Status = (props) => (
    <List
            {...props}
    >
        <Datagrid>
            {/* <CreateButton/> */}
            {/* <TextField source="id" /> */}
            <TextField source="status" />
            <TextField source="statusName" />
            <TextField source="shortName" />
            <TextField source="authority" />
            <TextField source="remarks" />
            <EditButton />
            {/* <CreateButton /> */}
            {/* <DateField source="endDate" /> */}

        </Datagrid>
    </List>
);

export default Status;