import React, {useEffect, useRef, useState} from 'react';
// textField
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input'; 
// import InputLabel from '@material-ui/core/InputLabel'; 
// import FormHelperText from '@material-ui/core/FormHelperText'; 
import NativeSelect from '@material-ui/core/NativeSelect'; 

// get API
import { useGetList } from 'react-admin';
import { Size } from 'devextreme-react/chart';

const Area = (props) => {
  const { data, ids } = useGetList("area", );
  const [ state, setState ] = useState("");
  const [ select, setSelect ] = useState(false);


  const changeStatus = (event) =>{

    try {
        setState(data[event.target.value].areaName)
      } catch (e) {
        setState("Change this value")
      }
  }

  useEffect(() => {
    try {
      setState(data[props.static].areaName)
    } catch (e) {
      setState("select button")
    }
  }, [])

  return (
    <div>
      area &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; 
      <NativeSelect id="area" onChange={changeStatus}>
        <option value={props.static} selected={true}>{props.static}</option>
        {Object.values(data).map((a) => {
          if (a.area !== props.static){ 
            return (
          <option value={a.area} >{a.area}</option>
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

export default Area;