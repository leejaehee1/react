import React, {useEffect, useRef, useState} from 'react';
// textField
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input'; 
// import InputLabel from '@material-ui/core/InputLabel'; 
// import FormHelperText from '@material-ui/core/FormHelperText'; 
import NativeSelect from '@material-ui/core/NativeSelect'; 

// get API
import { useGetList } from 'react-admin';

const ProjectID = (props) => {
  const { data, ids } = useGetList("project", );
  const [ state, setState ] = useState("");
  const [ select, setSelect ] = useState(false);
  
  useEffect(() => {
  }, [])

  const changeStatus = (event) =>{

    try {
        setState(data[event.target.value].projectName)
      } catch (e) {
        setState("Change this value")
      }
  }

  useEffect(() => {
    try {
      setState(data[props.static].projectName)
    } catch (e) {
      setState("select button")
    }
  }, [])

  return (
    <div>
      projectID &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; 
      <NativeSelect id="projectID"  onChange={changeStatus}>
        <option value={props.static} selected={true}>{props.static}</option>
        {Object.values(data).map((a) => {
          if (a.projectID !== props.static){ 
            return (
          <option value={a.projectID} >{a.projectID}</option>
          )}
        }
        )}
      </NativeSelect>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {
        (state==="Change this value" || state==="select button")
        ?<span style={{color:"red", fontSize:"15px"}}>{state}</span>
        :<span style={{color:"black", fontSize:"15px"}}>{state}</span>
      }
      {/* <Input id="Status" defaultValue="select button"></Input> */}
    </div>
  )
}

export default ProjectID;