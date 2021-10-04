import React, {useEffect, useRef, useState} from 'react';
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
    
    useGetList,

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
import { connect } from 'react-redux';
// import Button from '@mui/material/Button';

const PunchBoard = (props) => {
    // console.log("들어왔다.")
    // const { data, ids, loading, error } = useGetList('list', );
    // const { data, ids, onToggleItem, } = useListContext();
    // const [boardData, setBoardData] = useState(props.boardData)
    // const [boardIds, setBoardIds] = useState(props.boardIds)
    const [timeFlag, setTimeFlag] = useState(false)
    const a = props.boardData
    const b = props.boardIds
    const boardData = useRef(a)
    const boardIds = useRef(b)
    // console.log(props.boardData)
    
    boardData.current = a  // 이걸 지우면 애러발생

    const inputBoardData = props.boardData.length? props.boardData:boardData.current;
    const inputBoardIds = props.boardIds.length? props.boardIds:boardIds.current;

    const updateDetailPage = (id) => {
        props.setUpPunchBoardData(id)
    }
    
    if (!boardIds) return null;
    return (
        // <Card>
            <List dense={true}  >
                {inputBoardIds.map(id => {
                    return (
                        <>
                        <ListItem
                            button
                            key={id}
                            onClick={()=> updateDetailPage(id)}
                            // onClick={()=> props.upPunchBoard(id)}
                            // component={Link}
                            // to={`/contacts/${id}/show`}
                        >
                            <ListItemIcon style={{marginRight:'-10px'}}>
                                <Checkbox
                                    edge="start"
                                    size="small"
                                    color="default"
                                    
                                    // checked={selectedIds.includes(id)}
                                    // tabIndex={-1}
                                    // disableRipple
                                    onClick={e => {
                                        // e.stopPropagation();
                                        console.log(e.target)
                                        console.log(id)
                                        // onToggleItem(id);
                                    }}
                                />
                            </ListItemIcon>
                            {/* aaa
                            ${inputBoardData[id].punchID} */}
                            <ListItemText 
                                style={{marginRight:'10px', marginTop:'0px', marginBottom:'0px', height:'50px'}}
                                
                                primary={
                                    `${inputBoardData[id].punchID}, 
                                    ${inputBoardData[id].discipline}, 
                                    ${inputBoardData[id].bulkName}, 
                                    ${inputBoardData[id].scheduleImpact}, 
                                    ${inputBoardData[id].completedBy}`
                                }
                                secondary={
                                    <>
                                        <p style={{width:"600px", 
                                                fontSize:"10px",
                                                overflow:"hidden", 
                                                textOverflow:"ellipsis", 
                                                whiteSpace:"nowrap"}}
                                        >
                                        {inputBoardData[id].issueDescription} 
                                        <br />
                                        {inputBoardData[id].completeComment}
                                        </p>
                                    </>
                                }
                            />


                            <Typography variant="body2" Wcolor="textSecondary">
                                <StateButton eachState={inputBoardData[id].status} allData={inputBoardData[id]} />
                            </Typography>
                        </ListItem>
                        <hr style={{margin:'0px'}} />

                        </>
                    );
                    
                }
                )
            }
            </List>
        // </Card>
    )
}

export default PunchBoard;