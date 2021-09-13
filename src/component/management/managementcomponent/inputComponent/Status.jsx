import React, {useEffect, useRef, useState} from 'react';
// textField
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input'; 
import InputLabel from '@material-ui/core/InputLabel'; 
import FormHelperText from '@material-ui/core/FormHelperText'; 
import NativeSelect from '@material-ui/core/NativeSelect'; 

// get API
import { useGetList } from 'react-admin';

const Status = (props) => {
  const { data, ids } = useGetList("status", );
  const [ state, setState ] = useState("");
  const [ select, setSelect ] = useState(false);
  
  useEffect(() => {
  }, [])

  const changeStatus = (event) =>{
    setState(data[event.target.value].statusName)
  }

  useEffect(() => {
    try {
      setState(data[props.static].statusName)
    } catch (e) {
      setState("select button")
    }
  }, [])

  return (
    <div>
      Status &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; 
      <NativeSelect id="status"  onChange={changeStatus}>
        <option value={props.static} selected={true}>{props.static}</option>
        {Object.values(data).map((a) => {
          if (a.status !== props.static){ 
            return (
          <option value={a.status} >{a.status}</option>
          )}
        }
        )}
      </NativeSelect>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{state}
      {/* <Input id="Status" defaultValue="select button"></Input> */}
    </div>
  )
}

export default Status;