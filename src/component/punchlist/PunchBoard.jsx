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

import './styles/PunchBoard.css'


// import { cloneElement } from 'react';
// import IconEvent from '@material-ui/icons/Event';
import StateButton from './board/StateButton';
// import { connect } from 'react-redux';
// import Button from '@mui/material/Button';

const PunchBoard = (props) => {
    // console.log(props.boardData)
    // console.log(props.boardData)
    // console.log(props.boardData)
    // console.log(props.boardData)
    // console.log(props.boardData)
    // console.log(props.boardData)
    // console.log(props.boardData)
    // console.log(props.boardData)
    // console.log(props.boardData)
    // console.log(props.boardIds)
    // console.log(props.boardIds)
    // console.log(props.boardIds)
    // console.log(props.boardIds)
    // console.log(props.boardIds)
    // console.log(props.boardIds)
    // console.log(props.boardIds)
    // console.log(props.boardIds)
    // console.log(props.boardIds)
    // console.log('props.boardData')
    const [timeFlag, setTimeFlag] = useState(false)
    const a = props?.boardData
    const b = props?.boardIds
    const boardData = useRef(a)
    const boardIds = useRef(b)
    
    boardData.current = a  // 이걸 지우면 애러발생

    // const inputBoardData = props.boardData.length? props.boardData:boardData.current;
    const inputBoardData = props.boardData;
    // const inputBoardIds = props.boardIds.length? props.boardIds:boardIds.current;
    const inputBoardIds = props.boardIds;

    const [targetA, setTargetA] = useState('a');

    const updateDetailPage = (id, e) => {
        props.setUpPunchBoardData(id)
        setTargetA(id)
        if (e.target !== e.currentTarget) return;
    }

    

    const discipline = useGetList('discipline', );
    const systemID = useGetList('systems', );
    const subSystem = useGetList('subsystem', );

    
    const [checkedId, setCheckedId] = useState(false);
    

    
    useEffect(()=> {
        setCheckedId(props.otherCheckBox);

    }, [props])

    const pagenationAllData = inputBoardIds
    const [currentPage, setCurrentPage] = useState(1); // current page
    const [postsPerPage, setPostsPerPage] = useState(12);  // count per page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = pagenationAllData.slice(indexOfFirstPost, indexOfLastPost);

    const paginationCount = parseInt(inputBoardIds.length / postsPerPage) + 1


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

    const [detailPageUpdateButton, setDetailPageUpdateButton] = useState(false);
    const [targetMouseOn, setTargetMouseOn] = useState('');
    const onButton = (id) => {
        clearInterval()
        setTargetMouseOn(id)
        setDetailPageUpdateButton(true)
    }
    const outButton = () => {
        // if (targetMouseOn !== id){
        // }
        // setDetailPageUpdateButton(false)
        // setTargetMouseOn('')

        // setTimeout(() => {
            setDetailPageUpdateButton(false)
        // }, 5000)
    }

    const handleUpdateDetail = () => {
        props.setAbleUpdateDetailFlag(false)
    }


    if (!boardIds) return null;
    return (
        // <Card>
        <div onPointerLeave={outButton} style={{overflow: 'auto', height: '700px', maxWidth: '810px'}}>
            {/* aaaaaaaaaaaa{JSON.stringify(inputBoardIds)}
            aaaaaaaaaaaa{JSON.stringify(inputBoardData)}
            aaaaaaaaaaaa{JSON.stringify(props.boardData)}
            aaaaaaaaaaaa{JSON.stringify(props.boardIds)} */}
            {/* const inputBoardData = props.boardData; */}
            <List dense={true}>
                {props.boardIds.map(id => {
                    // if (id!=='PC-2-00-MB-MBP-E-01-002'){ return <></>}
                    if (!currentPosts.includes(id)){ return <></>}
                    return (
                        <>
                        <ListItem
                            button
                            key={id}
                            onClick={(e)=> updateDetailPage(id, e)}
                            onPointerEnter={()=>onButton(id)} 
                            // onMouseOut={()=>outButton(id)}
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
                                {(detailPageUpdateButton && targetMouseOn===id)?
                                <button className="updateOnMouseButton" onClick={handleUpdateDetail}>update</button>
                                :
                                <></>
                                }


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