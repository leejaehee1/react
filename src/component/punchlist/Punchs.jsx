import * as React from 'react';
import {
    List as RaList,
    ListProps,
    SimpleListLoading,
    ReferenceField,
    TextField,
    useListContext,
    ExportButton,
    SortButton,
    TopToolbar,
    CreateButton,
    Pagination,
    useGetIdentity,
    // TextField,

    Datagrid,
} from 'react-admin';
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    Typography,
    Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// import { formatDistance } from 'date-fns';

// import { Avatar } from './Avatar';
// import { Status } from '../misc/Status';
// import { TagsList } from './TagsList';
// import { ContactListFilter } from './ContactListFilter';
// import { Contact } from '../types';

const PunchListContent = () => {
    const { data, ids, loaded, onToggleItem, selectedIds } = useListContext();
    // console.log(ids)
    return (
        <List>
            {ids.map(id => {
                const contact = data[id];;
                console.log(contact)
                return (
                    <ListItem
                        // button
                        key={id}
                        // component={Link}
                        // to={`/contacts/${id}/show`}
                    >
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                // checked={selectedIds.includes(id)}
                                // tabIndex={-1}
                                // disableRipple
                                onClick={e => {
                                    // e.stopPropagation();
                                    onToggleItem(id);
                                }}
                            />
                        </ListItemIcon>
                        {/* <ListItemAvatar>
                            <Avatar record={contact} />
                        </ListItemAvatar> */}
                        <ListItemText
                            primary={`${contact.PunchID}, ${contact.Discipline}, ${contact.BulkName}, ${contact.CostImpact}, ${contact.CompletedBy}`}
                            secondary={
                                <>
                                    {contact.IssueDesp} 
                                    {/* at{' '} */}
                                    <br />
                                    {contact.CompleteDesp}
                                    {/* <ReferenceField
                                        record={contact}
                                        source="company_id"
                                        reference="companies"
                                        basePath="/companies"
                                        link={false}
                                        >
                                        <TextField source="IssueDesp" />
                                    </ReferenceField>{' '} */}
                                    {/* {contact.nb_notes &&
                                        `- ${contact.nb_notes} notes `} */}
                                    {/* <TagsList record={contact} /> */}
                                </>
                            }
                        />
{/* 

    import * as React from 'react';
    import { Box } from '@material-ui/core';

    const getColorFromStatus = (status: string) =>
        status === 'cold'
            ? '#7dbde8'
            : status === 'warm'
            ? '#e8cb7d'
            : status === 'hot'
            ? '#e88b7d'
            : status === 'in-contract'
            ? '#a4e87d'
            : '#000';

    export const Status = ({ status }: { status: string }) => (
        <Box
            width={10}
            height={10}
            display="inline-block"
            borderRadius={5}
            bgcolor={getColorFromStatus(status)}
            component="span"
        />
);


 */}

                        <ListItemSecondaryAction>
                            <Typography variant="body2" color="textSecondary">
                                {/* last activity{' '} */}
                                {/* {formatDistance(
                                    new Date(contact.last_seen),
                                    now
                                )}{' '} */}
                                {/* ago <Status status={contact.status} /> */}
                                <Box
                                    width="90px"
                                    height={28}
                                    display="inline-block"
                                    textAlign="center"
                                    lineHeight="28px"
                                    verticalAlign="middle"
                                    color="white"
                                    borderRadius={3}
                                    bgcolor='#e88b7d'
                                    component="span"
                                >Open</Box>
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    )
}

export const Punchs = props => {
    // console.log(props);

    return (
        <RaList
            {...props} 
            perPage={25}
            pagination={<Pagination rowsPerPageOptions={[10, 25, 50, 100]} />}   
        >

            <PunchListContent />
        </RaList>
    )
};