import React, {useEffect, useRef, useState} from 'react';
import NativeSelect from '@material-ui/core/NativeSelect'; 

// get API
import { useGetList } from 'react-admin';

const Subsystem = (props) => {
  const { data, ids } = useGetList("subsystem", );
  const [ state, setState ] = useState("");
  const [ select, setSelect ] = useState(false);
  
  useEffect(() => {
    const upValData = Object.values(data).map(a => a.subsystem)
    if(props.stepValFlag===""){
      props.setValSubsystem(upValData)
    }
  }, [])

  const changeStatus = (event) =>{

    try {
        setState(data[event.target.value].subsystemName)
        props.setUpdata(event.target.value)
      } catch (e) {
        setState("Change this value")
      }
  }

  useEffect(() => {
    try {
      setState(data[props.static].subsystemName)
    } catch (e) {
      setState("select button")
    }
  }, [])

  return (
    <div style={{display:'flex'}}>
      <div style={{width:"30%"}}>
        Subsystem &nbsp;&nbsp; : 
      </div>
      <div style={{}}>
        <NativeSelect id="subsystem" style={{maxWidth:"80px"}} onChange={changeStatus}>
          <option value={props.static} selected={true}>{props.static}</option>
          {Object.values(data).map((a) => {
            if (a.subsystem !== props.static){ 
              return (
            <option value={a.subsystem} >{a.subsystem}</option>
            )}
          }
          )}
        </NativeSelect>
      </div>
      {
        (state==="Change this value" || state==="select button")
        ?<span style={{color:"red", fontSize:"15px", float:'right', width:'210px', whiteSpace: 'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}>{state}</span>
        :<span style={{color:"black", fontSize:"15px", float:'right', width:'210px', whiteSpace: 'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}>{state}</span>
      }
    </div>
  )
}

export default Subsystem;