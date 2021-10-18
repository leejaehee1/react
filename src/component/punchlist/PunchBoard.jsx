import React, {useEffect, useRef, useState} from 'react';
import {
    List as RaList,
    useListContext,
    useGetList,
} from 'react-admin';

import {
    List,
    ListItem,
    
    ListItemIcon,
    ListItemText,
    Checkbox,
    Typography,

} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';




// import { cloneElement } from 'react';
// import IconEvent from '@material-ui/icons/Event';
import StateButton from './board/StateButton';
// import { connect } from 'react-redux';
// import Button from '@mui/material/Button';

const PunchBoard = (props) => {
    const [timeFlag, setTimeFlag] = useState(false)
    const a = props?.boardData
    const b = props?.boardIds
    const boardData = useRef(a)
    const boardIds = useRef(b)
    
    boardData.current = a  // 이걸 지우면 애러발생

    const inputBoardData = props.boardData.length? props.boardData:boardData.current;
    const inputBoardIds = props.boardIds.length? props.boardIds:boardIds.current;

    const [targetA, setTargetA] = useState('a');

    const updateDetailPage = (id, e) => {
        props.setUpPunchBoardData(id)
        setTargetA(id)
        if (e.target !== e.currentTarget) return;
    }

    
    // const { data, ids } = useGetList('discipline', );
    const discipline = useGetList('discipline', );
    const systemID = useGetList('systems', );
    const subSystem = useGetList('subsystem', );
    // console.dir(systemID.data)
    // console.dir(Object.keys(subSystem.data))
    // console.log(systemID?.data["05/70/80SG"]['systemName'])
    // console.log(systemID?.data["UB"]['systemName'])
    // console.log(props.otherCheckBox)
    
    const [checkedId, setCheckedId] = useState(false);
    

    
    useEffect(()=> {
        setCheckedId(props.otherCheckBox);
        // console.log(props.otherCheckBox)
    }, [props])

    const pagenationAllData = inputBoardIds
    const [currentPage, setCurrentPage] = useState(1); // current page
    const [postsPerPage, setPostsPerPage] = useState(12);  // count per page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = pagenationAllData.slice(indexOfFirstPost, indexOfLastPost);

    const paginationCount = parseInt(inputBoardIds.length / postsPerPage) + 1
    // if(inputBoardIds.length){
    //     // pagenation
    //     // alldata
    // }
    // useEffect(()=> {
    // }, [])

    const handlePagination = (e) => {
        // console.log(e.target.value)
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.outerText)
        setCurrentPage(e.target.outerText)
        // console.log(e.target.elements)
        // console.log(e.target.element)
        // console.log(page)
    }

    if (!boardIds) return null;
    return (
        // <Card>
        <div style={{overflow: 'auto', height: '700px'}}>
            {/* aaaaaaaaaaaa{JSON.stringify(currentPosts)} */}
            <List dense={true}  >
                {inputBoardIds.map(id => {
                    // if (id!=='PC-2-00-MB-MBP-E-01-002'){ return <></>}
                    if (!currentPosts.includes(id)){ return <></>}
                    return (
                        <>
                        <ListItem
                            button
                            key={id}
                            onClick={(e)=> updateDetailPage(id, e)}
                            // onClick={()=> props.upPunchBoard(id)}
                            // component={Link}
                            // to={`/contacts/${id}/show`}
                        >
                            <ListItemIcon style={{marginRight:'-10px'}}>
                                <Checkbox
                                    edge="start"
                                    size="small"
                                    color="default"
                                    checked={(targetA===id)?true:checkedId}
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
                                    `${inputBoardData[id]?.punchID}, 
                                    ${inputBoardData[id]?.category}, 
                                    ${discipline?.data[inputBoardData[id]?.discipline]?.disciplineName},   
                                    ${inputBoardData[id]?.tagNumber}, 
                                    ${inputBoardData[id]?.unit}, 
                                    ${inputBoardData[id]?.area}`
                                }
                                secondary={
                                    <>
                                        <p style={{width:"600px", 
                                                fontSize:"10px",
                                                overflow:"hidden", 
                                                textOverflow:"ellipsis", 
                                                whiteSpace:"nowrap"}}
                                        >
                                            {systemID?.data[inputBoardData[id]?.systemID]?.systemName}
                                            <br />
                                            {subSystem?.data[inputBoardData[id]?.subsystem]?.subsystemName}
                                        </p>
                                    </>
                                }
                            />


                            <Typography variant="body2" Wcolor="textSecondary">
                                <StateButton 
                                        eachState={inputBoardData[id]?.status} 
                                        allData={inputBoardData[id]} 
                                        eachRowId={id}
                                />
                            </Typography>
                        </ListItem>
                        <hr style={{margin:'0px'}} />

                        </>
                    );
                    
                }

                )
            }
            <Pagination 
            count={paginationCount} 
            page={currentPage}
            // boundaryCount={1}
            // value={2}
            defaultPage={1}
            
            onChange={handlePagination}
             />
            </List>
        </div>
        // </Card>
    )
}

export default PunchBoard;