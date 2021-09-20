import * as React from 'react';
import {
    List as RaList,
    // ListProps,
    // SimpleListLoading,
    // ReferenceField,
    // TextField,
    useListContext,
    // ExportButton,
    // SortButton,
    TopToolbar,
    CreateButton,
    ExportButton,
    Pagination,
    // useGetIdentity,
    // TextField,
    Button,
    ListActions,

    // Datagrid,
} from 'react-admin';

import {
    List,
    ListItem,
    // ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    Typography,
    Box,
} from '@material-ui/core';
import { cloneElement } from 'react';
import IconEvent from '@material-ui/icons/Event';

const PunchListContent = () => {
    const { data, ids, onToggleItem, } = useListContext();
    return (
        <List>
            aaa
            {ids.map(id => {
                const contact = data[id];;
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
                                    console.log(e.target)
                                    console.log(id)
                                    onToggleItem(id);
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText 
                            primary={`${contact.punchID}, ${contact.discipline}, ${contact.bulkName}, ${contact.scheduleImpact}, ${contact.completedBy}`}
                            secondary={
                                <>
                                    {contact.issueDescription} 
                                    <br />
                                    {contact.completeComment}
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
    const ListActions = (props) => (
        <TopToolbar>
            {/* {cloneElement(props.filters, { context: 'button' })} */}
            <CreateButton/>
            <ExportButton/>
            {/* Add your custom actions */}
            <Button
                onClick={() => { alert('Your custom action'); }}
                // label="Show calendar"
            >
                {/* <IconEvent/> */}
            </Button>
        </TopToolbar>
    );
    // console.dir(props);
    return (
        <RaList
            {...props} 
            perPage={10}
            pagination={<Pagination rowsPerPageOptions={[10, 25, 50, 100]} />}   
            actions={<ListActions/>}
        >
            <PunchListContent />
        </RaList>
    )
};