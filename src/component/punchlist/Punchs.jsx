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

                        />
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