import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table'
import axios from 'axios';
import './styles/Drawing.css'

// modal
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const StatusTable = () => {
    const [getStatus, setGetStatus] = useState();
    const urlStatus = 'http://localhost:5000/punchlist/status/?range=[0, 24]';
    const [columns, setColumns] = useState([
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]);
    
      const [data, setData] = useState([
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]);

    useEffect(()=> {
        // // console.log(1)
        axios.get(urlStatus)
        .then((res)=> {
            // // console.log(2);
            setGetStatus(res.data.result)})
        .catch(err => console.log(err))
    }, [])

    useEffect(()=> {
        // // console.log(3)
        // // console.log(getStatus)
        let targetColumns = []
        if (getStatus!==undefined){
            for (var r of Object.keys(getStatus[0])){
                targetColumns.push({title:r, field:r})
            }
            // // console.log(targetColumns)
            setColumns(targetColumns)
            setData(getStatus)
        }

    }, [getStatus])

    useEffect(()=> {
        // console.log(data)
    }, [data])

    const [openModal, setOpenModal] = React.useState(false);
    
    const handleSaveDatabase = () => {
      setOpenModal(true)
    }

    const handelModalCancelButton = () => {
        setOpenModal(false)
    }

    const handelModalApplyButton = () => {
        setOpenModal(false)
    }


    return (
        <>
          <Dialog onClose={handelModalCancelButton} aria-labelledby="simple-dialog-title" open={openModal}>
                <div style={{width:"400px", height:"100px", textAlign:'center' }}>
                    <DialogTitle 
                        id="simple-dialog-title" 
                        style={{display:"flex", justifyContent:'center', marginTop:'20px', fontSize:'10px'}}>
                            Did you check the data?
                    </DialogTitle>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <button className="notAcceptedCommentCancelButton" onMouseDown={handelModalCancelButton}>No</button>
                    <button className="notAcceptedCommentApplyButton" onMouseDown={handelModalApplyButton}>Yes</button>
                </div>
            </Dialog>
            <div style={{padding: '15px'}}>
                <button className='drawingButton' onClick={handleSaveDatabase} >Save</button>
            </div>
            <MaterialTable
      title="Status"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
      }}
    />
        </>
    )
}


export default React.memo(StatusTable);