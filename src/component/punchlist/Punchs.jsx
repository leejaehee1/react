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
    // Button,
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
    styled,
    Button,
    Grid,
    Card,
    // buttonUnstyledClasses,
    // ButtonUnstyled,
    // CustomButton,
} from '@material-ui/core';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
// import {Paper} from '@material-ui/core';




import { cloneElement } from 'react';
import IconEvent from '@material-ui/icons/Event';
import StateButton from './board/StateButton';
// import Button from '@mui/material/Button';


const CustomButtonRoot = styled('span')(`
  background-color: #007fff;
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #0059b2;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

const PunchListContent = () => {
    const { data, ids, onToggleItem, } = useListContext();
    return (
        // <Card>
            <List dense={true}  >
                {ids.map(id => {
                    const contact = data[id];;
                    return (
                        <>
                        <ListItem
                            button
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
                                        <p style={{width:"600px", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>
                                        {contact.issueDescription} 
                                        <br />
                                        {contact.completeComment}
                                        </p>
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
                                    <StateButton eachState={contact.status} />
                                </Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <hr />

                        </>
                    );
                    
                }
                )
            }
            </List>
        // </Card>
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
                <IconEvent/>
            </Button>
            <Button>test <br /> button</Button>
            <Grid spacing={2} direction="row">
                <CustomButton>Button</CustomButton>
                <CustomButton disabled>Disabled</CustomButton>
            </Grid>
            <button>test <br /> button</button>
            <button>test <br /> button</button>
            <button>test <br /> button</button>
            <button>test <br /> button</button>
            <button>test <br /> button</button>
            <button>test <br /> button</button>
            <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        // disabled={!text || loading}
                    >
                        Add this note
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