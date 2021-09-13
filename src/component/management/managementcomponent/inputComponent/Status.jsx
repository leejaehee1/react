import React, {useEffect, useRef, useState} from 'react';
// textField
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input'; 
import InputLabel from '@material-ui/core/InputLabel'; 
import FormHelperText from '@material-ui/core/FormHelperText'; 
import NativeSelect from '@material-ui/core/NativeSelect'; 

// get API
import { useGetList } from 'react-admin';

const Status = () => {
  const { data, ids } = useGetList("status", );
  const [ state, setState ] = useState("")
  
  useEffect(() => {
  }, [])

  const changeStatus = (event) =>{
    setState(data[event.target.value].statusName)
  }

  return (
    <div>
      Status &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; 
      <NativeSelect id="Status"  onChange={changeStatus}>
        {Object.values(data).map((a) => (
          <option value={a.status}>{a.status}</option>
        ))}
      </NativeSelect>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{state}
      {/* <Input id="Status" defaultValue="select button"></Input> */}
    </div>
  )
}

export default Status;