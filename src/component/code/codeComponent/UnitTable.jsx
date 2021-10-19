import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table'
import axios from 'axios';
import './styles/Drawing.css'


const UnitTable = () => {
    const [getUnit, setGetUnit] = useState();
    const urlUnit = 'http://localhost:5000/punchlist/unit/?range=[0, 24]';
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
        // console.log(1)
        axios.get(urlUnit)
        .then((res)=> {
            // console.log(2);
            setGetUnit(res.data.result)})
        .catch(err => console.log(err))
    }, [])

    useEffect(()=> {
        // console.log(3)
        // console.log(getUnit)
        let targetColumns = []
        if (getUnit!==undefined){
            for (var r of Object.keys(getUnit[0])){
                targetColumns.push({title:r, field:r})
            }
            // console.log(targetColumns)
            setColumns(targetColumns)
            setData(getUnit)
        }

    }, [getUnit])

    useEffect(()=> {
        console.log(data)
    }, [data])


    return (
        <>
        <div style={{padding: '15px'}}>
                <button className='drawingButton' >Save</button>
            </div>
            <MaterialTable
      title="Unit"
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


export default UnitTable;