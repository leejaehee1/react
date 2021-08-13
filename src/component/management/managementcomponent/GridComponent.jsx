import React, {useState} from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import XLSX from 'xlsx';
// import { GridToolbar } from '@material-ui/data-grid';
// import PublishIcon from '@material-ui/icons/Publish';
import SettingsIcon from '@material-ui/icons/Settings';
import { Chip } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import FolderIcon from '@material-ui/icons/Folder';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Button } from '@material-ui/core';



const EXTENSIONS=['xlsx', 'xls', 'csv'] // 'xlsx', 'xls', 'csv' 세가지 파일만 들어가게 한다.
const GridComponent = () => {

    const [colDefs, setColDefs] = useState()
    const [data, setData] = useState()

    const getExention = (file) => {
        const parts=file.name.split('.')
        const extension = parts[parts.length-1]
        return EXTENSIONS.includes(extension)
    }

    const convertToJson=(headers, data)=>{
        const rows=[]
        // console.log(data)
        data.forEach(row => {
            let rowData={}
            row.forEach((element, index)=>{
                rowData[headers[index]]=element
            })
            rows.push(rowData)
        });
        // console.log(rows)
        return rows
    }

    const importExcel=(e)=>{
        const file = e.target.files[0]
        
        // console.log(file)

        const reader=new FileReader()
        reader.onload=(event)=> {    // onload는 비동기 때문에 적어주는 거다
            //parse data
            const bstr=event.target.result
            const workBook=XLSX.read(bstr, {type:"binary"})
            
            //get first sheet
            const workSheetName = workBook.SheetNames[0]
            const workSheet = workBook.Sheets[workSheetName]
            
            // convert to array
            const fileData = XLSX.utils.sheet_to_json(workSheet, {header:1})
            
            
            const headers=fileData[0]  // columns만 추출
            const heads=headers.map(head=>({title:head, field:head}))
            setColDefs(heads)
            // console.log(heads)
            

            // removing header
            fileData.splice(0, 1) // 엑셀 표에서 columns 제거.
            setData(convertToJson(headers,fileData)) 
        }

        if(file){
            if(getExention(file)){
                reader.readAsBinaryString(file)
            } else {
                alert("Invalid file input, selectExcel, CSV file")
            }
        }else{
            setData([])
            setColDefs([])
        }
    }
    return (
        <div style={{ maxWidth: '100%' }}>
            {/* <input type="file" onChange={importExcel} ></input> */}
            {/* style={{ display: 'none' }} */}
            <MaterialTable 
                title="Punchlist data" 
                data={data} 
                columns={colDefs} 
                options={{
                    paginationType: "stepped",
                    columnsButton:true
                }}
                components={{
                    Toolbar: props => (
                      <div>
                        <MTableToolbar {...props} />
                        <div style={{padding:0, width:'100%'}}>
                        <Box display="flex" p={1} bgcolor="background.paper">
                            <Box p={1} flexGrow={1} >
                            {/* <Chip label="Sheet 01" color="secondary" style={{marginRight: 10}}/>
                            <Chip label="Sheet 02" color="secondary" style={{marginRight: 10}}/>
                            <Chip label="Sheet 03" color="secondary" style={{marginRight: 5}}/> */}
                            <Chip avatar={<Avatar>M</Avatar>} label="Sheet 01" style={{marginRight: 10}} />
                            <Chip avatar={<Avatar>M</Avatar>} label="Sheet 02" style={{marginRight: 10}} />
                            <Chip avatar={<Avatar>M</Avatar>} label="Sheet 03" style={{marginRight: 10}} />
                            </Box>
                            <Box p={1}>
                                {/* <PublishIcon /> */}
                                {/* 기본 */}
                                {/* <input type="file" onChange={importExcel} /> */}

                                {/* <input type="file" style={{ display: 'none' }} onChange={importExcel} />
                                <label for="input-file">
                                    <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
                                </label>
                                
                                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} >
                                    <input type="file" hidden onChange={importExcel} />
                                </BottomNavigationAction> */}



                                    <label htmlFor="upload-photo">
                                    <input
                                        style={{ display: 'none' }}
                                        id="upload-photo"      // 이거 안넣으면 안됨
                                        name="upload-photo"
                                        type="file"
                                        onChange={importExcel}
                                    />
                                    <Button  
                                        component="span"    // 이거 안넣으면 안됨 
                                        variant="contained"
                                        color="default" 
                                        startIcon={<CloudUploadIcon />}
                                        >
                                        upload
                                    </Button>
                                    {/* <Button  component="span" >
                                        <FolderIcon />
                                        Import <PublishIcon fontSize="large" />
                                    </Button> */}
                                    </label>



                                
                                {/* <Button
                                    variant="contained"
                                    color="default"
                                    // className={classes.button}
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload
                                </Button> */}
                                
                                <Button>
                                    <SettingsIcon fontSize="large" />
                                </Button>
                                
                            </Box>
                        </Box>
                        </div>
                      </div>
                    )   
                  }}
            />
        </div>
    )
}

export default GridComponent;