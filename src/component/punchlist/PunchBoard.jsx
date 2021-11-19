import React, {useEffect, useRef, useState} from 'react';
import {
    // List as RaList,
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
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


import './styles/PunchBoard.css'


import StateButton from './board/StateButton';


const PunchBoard = (props) => {
    // const [timeFlag, setTimeFlag] = useState(false)
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

    }, [props.otherCheckBox])

    const pagenationAllData = inputBoardIds
    const [currentPage, setCurrentPage] = useState(1); // current page
    const [postsPerPage] = useState(12);  // count per page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = pagenationAllData.slice(indexOfFirstPost, indexOfLastPost);

    const paginationCount = parseInt(inputBoardIds.length / postsPerPage) + 1
    const handleDownCount = () => {
        if (parseInt(currentPage) > 1){
            setCurrentPage((prev)=> parseInt(prev)-1)
        }
        // setCurrentPage(1)
    }
    const handleUpCount = () => {
        if(parseInt(currentPage) < paginationCount){
            setCurrentPage((prev)=> parseInt(prev)+1)
        }
        // setCurrentPage(1)
    }


    const handlePagination = (e) => {
        setCurrentPage(e.target.outerText)
    }

    const [detailPageUpdateButton, setDetailPageUpdateButton] = useState(false);
    const [targetMouseOn, setTargetMouseOn] = useState('');
    const onButton = (id) => {
        clearInterval()
        setTargetMouseOn(id)
        setDetailPageUpdateButton(true)
    }
    const outButton = () => {
            setDetailPageUpdateButton(false)
    }

    const handleUpdateDetail = () => {
        props.setAbleUpdateDetailFlag(false)
    }

    useEffect(()=> {
        if(typeof(parseInt(props.boardIds))==='number'){
            setCurrentPage(1)
        }
        // console.log(props.boardIds.length)
    }, [props.boardIds])


    if (!boardIds) return null;
    return (
        // <Card>
        <div onPointerLeave={outButton} style={{overflow: 'auto', height: '700px', maxWidth: '810px'}}>
            <List dense={true}>
                {props.boardIds.map(id => {
                    if (!currentPosts.includes(id)){ return <></>}
                    // let cck = false;
                    return (
                        <>
                        <ListItem
                            button
                            key={id}
                            // onClick={(e)=> updateDetailPage(id, e)}
                            onPointerEnter={()=>onButton(id)} 
                        >
                            <ListItemIcon style={{marginRight:'-10px'}}>
                                {(targetA===id)?
                                    <div>
                                        <Checkbox
                                            id={`targetcheck-${id}`}
    
                                            edge="start"
                                            size="small"
                                            color="default"
                                            checked={true}
                                            onClick={e => {
                                            }}
                                        />
                                    </div>
                                :
                                    ((checkedId)?
                                        <div>
                                        <Checkbox 
                                            id={`allcheck-${id}`}
                                            edge="start"
                                            size="small"
                                            color="default"
                                            // checked={checkedId}
                                            defaultChecked
                                            // checked={(targetA===id)?true:checkedId}
    
                                        />
                                        {/* &nbsp; */}
                                        </div>
                                        :
                                        <>
                                        <Checkbox 
                                            id={`notallcheck-${id}`}
                                            edge="start"
                                            size="small"
                                            color="default"
                                            // checked={true}
                                            // checked={(targetA===id)?true:checkedId}
                                        />
                                        </>
                                    )
                                }
                            </ListItemIcon>
                            <ListItemText 
                                onClick={(e)=> updateDetailPage(id, e)}
                                style={{marginRight:'10px', marginTop:'0px', marginBottom:'0px', height:'50px'}}
                                
                                primary={
                                    `${(inputBoardData[id]?.punchID)?inputBoardData[id]?.punchID:'EMPTY PUNCHID'}${inputBoardData[id]?.category?(`, ${inputBoardData[id]?.category}`):" "}${discipline?.data[inputBoardData[id]?.discipline]?.disciplineName}${(inputBoardData[id]?.tagNumber)?`, ${inputBoardData[id]?.tagNumber}`:" "}${(inputBoardData[id]?.unit)?`, ${inputBoardData[id]?.unit}`: ' '}${(inputBoardData[id]?.area)?`, ${inputBoardData[id]?.area}`: ' '}`
                                }
                                secondary={
                                    <>
                                        <p style={{width:"600px", 
                                                fontSize:"10px",
                                                overflow:"hidden", 
                                                textOverflow:"ellipsis", 
                                                whiteSpace:"nowrap"}}
                                        >
                                            {(systemID?.data[inputBoardData[id]?.systemID]?.systemName)?systemID?.data[inputBoardData[id]?.systemID]?.systemName:' '}
                                            <br />
                                            {(subSystem?.data[inputBoardData[id]?.subsystem]?.subsystemName)?subSystem?.data[inputBoardData[id]?.subsystem]?.subsystemName:' '}
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
            {/* {JSON.stringify(currentPage)} */}
            <div style={{display:'flex'}}>
                <div style={{marginTop:'5px', cursor: 'pointer'}} onClick={handleDownCount}>
                    <ArrowBackIosIcon fontSize="small" color="action" />
                </div>
                <div>
                    {/* {JSON.stringify(paginationCount)}
                    {JSON.stringify(currentPage)} */}
                    <Pagination 
                        count={paginationCount} 
                        page={parseInt(currentPage)}
                        // boundaryCount={1}
                        // value={2}
                        // defaultPage={parseInt(currentPage)}
                        
                        onChange={handlePagination}
                        hidePrevButton hideNextButton
                        // showFirstButton showLastButton
                    />
                </div>
                <div style={{marginTop:'5px', marginLeft: '5px', cursor: 'pointer'}} onClick={handleUpCount}>
                    <ArrowForwardIosIcon fontSize="small" color="action" />
                </div>
            </div>
             {/* <Pagination count={10} onClick={handlePagination} /> */}
            </List>
        </div>
        // </Card>
    )
}

export default React.memo(PunchBoard);