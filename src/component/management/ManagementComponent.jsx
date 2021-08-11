import React, {useState} from 'react';
import MaterialTable from 'material-table';
import XLSX from 'xlsx';

const EXTENSIONS=['xlsx', 'xls', 'csv'] // 'xlsx', 'xls', 'csv' 세가지 파일만 들어가게 한다.
const ManagementComponent = () => {
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
        <br />
        <br />
        <br />
        <br />
        
            <h1>Punch-list Import</h1>
            <h4>Import Data from Excel, Csv in Material Table</h4>
            <input type="file" onChange={importExcel} />
            <MaterialTable title="Punchlist data" data={data} columns={colDefs} />
        </div>
    )
}

export default ManagementComponent;