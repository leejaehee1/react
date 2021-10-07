import React, { useState } from 'react';
import axios from 'axios';
import { List, Datagrid, TextField, DateField } from 'react-admin';
import './styles/Drawing.css'


export const Drawing = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const url = 'http://localhost:5000/punchlist/uploadfile';

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // formData라는 instance에 담아 보냄
    const handleFileUpload = () => {
        const formData = new FormData();
    
        formData.append("pdffile", selectedFile, selectedFile.name);
    
        axios.post(url, formData)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    };
    return (
        <>  
            <div>
                <button className='drawingButton' onClick={handleFileUpload}>Send Drawing</button>
                <input type="file" 
                onChange={handleFileChange}
                />
            </div>
            <List {...props}>
                <Datagrid>
                    <TextField source="projectID" />
                    <TextField source="system" />
                    <TextField source="subsystem" />
                    <TextField source="seq" />
                    <TextField source="drawingNo" />
                    <DateField source="uploadDate" />
                    <TextField source="imagePath" />
                    <TextField source="xSize" />
                    <TextField source="ySize" />
                </Datagrid>
            </List>
        </>
);}

export default Drawing;