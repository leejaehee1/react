import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Datagrid, TextField, DateField, useRefresh,
    useCreate, } from 'react-admin';
import './styles/Drawing.css'

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


// css
import drawingIcon from './static/drawing-icon.jpg';

export const Drawing = (props) => {
    // get API
    const [getProjectID, setGetProjectID] = useState([]);
    const [getSystem, setGetSystem] = useState([]);
    const [getSubSystem, setGetSubSystem] = useState([]);
    const urlProjectID = 'http://localhost:5000/punchlist/project/?range=[0, 24]';
    const urlSystems = 'http://localhost:5000/punchlist/systems/?range=[0, 24]';
    const urlSubSystem = 'http://localhost:5000/punchlist/subsystem/?range=[0, 24]';

    const refresh = useRefresh()
    
    useEffect(()=>{
        axios.get(urlProjectID)
        .then((res)=> setGetProjectID(res.data.result))
        .catch(err => console.log(err))

        axios.get(urlSystems)
        .then((res)=> setGetSystem(res.data.result))
        .catch(err => console.log(err))

        axios.get(urlSubSystem)
        .then((res)=> setGetSubSystem(res.data.result))
        .catch(err => console.log(err))        
    }, [])
    const [drawingProjectID, setDrawingProjectID] = useState("");
    const [drawingSystem, setDrawingSystem] = useState("");
    const [drawingSubSystem, setDrawingSubSystem] = useState("");
    const [drawingSeq, setDrawingSeq] = useState("");
    const [drawingDrawingNo, setDrawingDrawingNo] = useState("");


    const [selectedFile, setSelectedFile] = useState(null);
    const [fileUploadOpen, setFileUploadOpen] = useState(false)

    const url = 'http://localhost:5000/punchlist/uploadfile';
    
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileDetailSetting = () => {
        setFileUploadOpen(true)
    }

    // formData라는 instance에 담아 보냄
    const handleFileUpload = () => {
        const data = {
            projectID: drawingProjectID,
            systemID: drawingSystem,
            subsystem: drawingSubSystem,
            seq: drawingSeq,
            drawingNo: drawingDrawingNo,
        }
        const formData = new FormData();
        formData.append("pdffile", 
                        selectedFile, 
                        // selectedFile.name
                        drawingDrawingNo
                        );
        formData.append("projectID", drawingProjectID);
        formData.append("systemID", drawingSystem);
        formData.append("subsystem", drawingSubSystem);
        formData.append("seq", drawingSeq);
        formData.append("drawingNo", drawingDrawingNo);
    
        axios.post(url, formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
        .then(res => {
            console.log(res);
            refresh()
            alert("저장 완료");
        })
        .catch(err => {
            console.log(err);
        });
        setDrawingProjectID('')
        setDrawingSystem('')
        setDrawingSubSystem('')
        setDrawingSeq('')
        setDrawingDrawingNo('')
    };

    const handleCancelButton = () => {
        setFileUploadOpen(false)
    }

    const handleApplyButton = () => {
        setFileUploadOpen(false)
        handleFileUpload()
    }

    const handleFileUploadClose = () => {
        setFileUploadOpen(false)
    }

    const handleChange = (e) => {
        const name = e.target.name
        if (name === "drawingProjectID") {
            setDrawingProjectID(e.target.value);
        } else if (name === "drawingSystem") {
            setDrawingSystem(e.target.value);
        } else if (name === "drawingSubSystem") {
            setDrawingSubSystem(e.target.value);
        }
    }

    const handleSeq = (e) => {
        setDrawingSeq(e.target.value)
    }

    const handleDrawingNo = (e) => {
        setDrawingDrawingNo(e.target.value)
    }

    // click table icon
    const handelViewDrawing = (e) => {
        alert("들어왔다.")
    }
    return (
        <>  
            <div>
                <button className='drawingButton' onClick={handleFileDetailSetting}>ADD Drawing</button>
                <input type="file" 
                onChange={handleFileChange}
                />
            </div>
            <List {...props}>
                <Datagrid>
                    {/* <p>{JSON.stringify(props)}</p> */}
                    <TextField source="projectID" />
                    <TextField source="systemID" />
                    <TextField source="subsystem" />
                    <TextField source="seq" />
                    <TextField source="drawingNo" />
                    <DateField source="uploadDate" />
                    <TextField source="imagePath" />
                    <TextField source="xSize" />
                    <TextField source="ySize" />
                    <button className="DrawingIcon" 
                        id={<TextField source="id" />} 
                        style={{backgroundImage: `url(${drawingIcon})`}}
                        onMouseDown={handelViewDrawing}
                        
                        ></button>
                </Datagrid>
            </List>
            <Dialog onClose={handleFileUploadClose} aria-labelledby="simple-dialog-title" open={fileUploadOpen}>
                <div style={{width:'320px', height:'270px',}}>
                    <DialogTitle id="simple-dialog-title" style={{display:"flex", justifyContent:'center'}}>Add drawing detail</DialogTitle>
                    <div style={{display:'flex', padding:'3px 10px'}}>
                        <div style={{width: '30%'}}>Project ID</div>
                        {/* <div style={{width: '70%'}}><input type="text" name="서버전달" value={getProjectID} /></div> */}
                        <div style={{width: '70%'}}>
                            <select name="drawingProjectID" id="drawingProjectID" className="filterSelect" onChange={handleChange}>
                                <option value=""></option>
                                {getProjectID?.map((v, i)=>
                                    <option value={v.projectID}>{v.projectID} {v.projectName}</option>

                                )}
                            </select>
                        </div>
                    </div>
                    <div style={{display:'flex', padding:'3px 10px'}}>
                        <div style={{width: '30%'}}>system</div>
                        {/* <div style={{width: '70%'}}><input type="text" name="서버전달" value={getProjectID} /></div> */}
                        <div style={{width: '70%'}}>
                            <select name="drawingSystem" id="drawingSystem" className="filterSelect" onChange={handleChange}>
                                <option value=""></option>
                                {getSystem?.map((v, i)=>
                                    <option value={v.systemID}>{v.systemID} {v.systemName}</option>

                                )}
                            </select>
                        </div>
                    </div>
                    <div style={{display:'flex', padding:'3px 10px'}}>
                        <div style={{width: '30%'}}>Subsystem</div>
                        {/* <div style={{width: '70%'}}><input type="text" name="서버전달" value={getProjectID} /></div> */}
                        <div style={{width: '70%'}}>
                            <select name="drawingSubSystem" id="drawingSubSystem" className="filterSelect" onChange={handleChange}>
                                <option value=""></option>
                                {getSubSystem?.map((v, i)=>
                                    <option value={v.subsystem}>{v.subsystem} {v.subsystemName}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div style={{display:'flex', padding:'3px 10px'}}>
                        <div style={{width: '30%'}}>Seq</div>
                        <div style={{width: '70%'}}>
                            <input 
                                className="filterInput"
                                type="text" 
                                name="text"
                                // value={content}
                                onChange={handleSeq}  
                                style={{width:'200px'}}
                            />
                        </div>
                    </div>
                    <div style={{display:'flex', padding:'3px 10px'}}>
                        <div style={{width: '30%'}}>Drawing No</div>
                        <div style={{width: '70%'}}>
                            <input 
                                className="filterInput"
                                type="text" 
                                name="text"
                                // value={content}
                                onChange={handleDrawingNo}  
                                style={{width:'200px'}}
                            />
                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                        <button style={{width: '50%', margin:'10px'}} className="filterCancelButton" 
                        onClick={handleCancelButton}
                        >cancel</button>
                        <button style={{width: '50%', margin:'10px'}} 
                            className="filterapplyButton" 
                            type="submit" 
                            onClick={handleApplyButton}
                        >save</button>
                    </div>
                </div>
                
            </Dialog>
        </>
);}

export default Drawing;