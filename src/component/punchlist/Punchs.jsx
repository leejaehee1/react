import React, {useEffect, useRef, useState} from 'react';
import {
    List as RaList,
    useListContext,
    TopToolbar,
    CreateButton,
    ExportButton,
    Pagination,
} from 'react-admin';

import {
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    Typography,
    Button,
} from '@material-ui/core';



import IconEvent from '@material-ui/icons/Event';
import StateButton from './board/StateButton';


const PunchListContent = () => {
    const { data, ids, onToggleItem, } = useListContext();
    // const { data, ids, loading, error } = useGetList('list', );
    const [boardData, setBoardData] = useState("")
    const dataFlow = useRef("")
    
    // // console.log(boardData)
    
    // const throwDataUp = () => {
    //     props.setboardData(dataFlow.current)
    // }
    useEffect(() => {
        if (data) {
            setBoardData(data)
        }
    }, [data])

    useEffect(() => {
        dataFlow.current = boardData
        // // console.log(11)
        // // console.log(dataFlow.current)
        // throwDataUp()
    }, [boardData])
    return (
        // <Card>
            <List dense={true}  >
                {ids.map(id => {
                    const contact = boardData[id]?boardData[id]: data[id];
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
                                        // console.log(e.target)
                                        // console.log(id)
                                        // onToggleItem(id);
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
                                    <StateButton eachState={contact.status} allData={contact} />
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

const Punchs = props => {
    const ListActions = (props) => (
        <TopToolbar>
            {/* {cloneElement(props.filters, { context: 'button' })} */}
            {/* <CreateButton/>
            <ExportButton/> */}
            {/* Add your custom actions */}
            {/* <Button
                onClick={() => { alert('Your custom action'); }}
                // label="Show calendar"
            >
                <IconEvent/>
            </Button> */}
            {/* <Button>test <br /> button</Button> */}
            {/* <Grid spacing={2} direction="row">
                <CustomButton>Button</CustomButton>
                <CustomButton disabled>Disabled</CustomButton>
            // </Grid> */}
            {/* // <button>test <br /> button</button>
            // <button>test <br /> button</button>
            // <button>test <br /> button</button>
            // <button>test <br /> button</button>
            // <button>test <br /> button</button>
            // <button>test <br /> button</button> */}
            {/* <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Add this note
            </Button> */}
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
            <PunchListContent 
                // setboardData={setboardData} 
            />
        </RaList>
    )
};

// function mapStateToProps(state, ownProps) {
//     return { toDos: state }
//   }

// export default connect(mapStateToProps)(Punchs);
export default Punchs;