import React, {useEffect, useRef, useState} from 'react';
// textField
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input'; 
// import InputLabel from '@material-ui/core/InputLabel'; 
// import FormHelperText from '@material-ui/core/FormHelperText'; 
import NativeSelect from '@material-ui/core/NativeSelect'; 

// get API
import { useGetList } from 'react-admin';

const Department = (props) => {
  const { data, ids } = useGetList("department", );
  const [ state, setState ] = useState("");
  const [ select, setSelect ] = useState(false);


  const changeStatus = (event) =>{

    try {
        setState(data[event.target.value].deptName)
      } catch (e) {
        setState("Change this value")
      }
  }

  useEffect(() => {
    try {
      setState(data[props.static].deptName)
    } catch (e) {
      setState("select button")
    }
  }, [])

  return (
    <div>
      Department &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; 
      <NativeSelect id="department"  onChange={changeStatus}>
        <option value={props.static} selected={true}>{props.static}</option>
        {Object.values(data).map((a) => {
          if (a.department !== props.static){ 
            return (
          <option value={a.department} >{a.department}</option>
          )}
        }
        )}
      </NativeSelect>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{state}
      {/* <Input id="Status" defaultValue="select button"></Input> */}
    </div>
  )
}

export default Department;