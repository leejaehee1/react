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
    // console.log(props.boardData)
    // console.log(boardData.current)
    // console.log(inputBoardData)

    
    if (!boardIds) return null;
    return (
        // <Card>
            <List dense={true}  >
                {/* <>{JSON.stringify(inputBoardData)}</> */}
                {/* <>{JSON.stringify(props.boardIds)}</> */}
                {/* <>{JSON.stringify(props.boardData)}</> */}
                {inputBoardIds.map(id => {
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
                                        // onToggleItem(id);
                                    }}
                                />
                            </ListItemIcon>
                            {/* aaa
                            ${inputBoardData[id].punchID} */}
                            <ListItemText 
                                
                                primary={
                                    `${inputBoardData[id].punchID}, 
                                    ${inputBoardData[id].discipline}, 
                                    ${inputBoardData[id].bulkName}, 
                                    ${inputBoardData[id].scheduleImpact}, 
                                    ${inputBoardData[id].completedBy}`
                                }
                                secondary={
                                    <>
                                        <p style={{width:"600px", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>
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

export default PunchBoard;