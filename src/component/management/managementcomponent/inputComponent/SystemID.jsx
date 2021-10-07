import React, {useEffect, useRef, useState} from 'react';
import NativeSelect from '@material-ui/core/NativeSelect'; 

// get API
import { useGetList } from 'react-admin';

const SystemID = (props) => {
  const { data, ids } = useGetList("systems", );
  const [ state, setState ] = useState("");
  const [ select, setSelect ] = useState(false);
  
  useEffect(() => {
    const upValData = Object.values(data).map(a => a.systemID)
    if(props.stepValFlag==="verify"){
      props.setValSystemID(upValData)
    }
  }, [])

  const changeStatus = (event) =>{

    try {
        setState(data[event.target.value].systemName)
        if (props.stepValFlag==="stepValFlag"){
          props.setUpdata(event.target.value)
        }
      } catch (e) {
        setState("Change this value")
      }
  }

  useEffect(() => {
    try {
      setState(data[props.static].systemName)
    } catch (e) {
      setState("select button")
    }
  }, [])

  return (
    <div style={{display:'flex'}}>
      <div style={{width:"30%"}}>
        systemID &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; 
      </div>
      <div style={{display:'flex', flexGrow: 0}}>
        <div style={{}}>
          <NativeSelect id="systemID" style={{maxWidth:"80px"}} onChange={changeStatus}>
            <option value={props.static} selected={true}>{props.static}</option>
            {Object.values(data).map((a) => {
              if (a.systemID !== props.static){ 
                return (
              <option value={a.systemID} >{a.systemID} &nbsp;  {data[a.systemID]?.systemName}</option>
              )}
            }
            )}
          </NativeSelect>
        </div>
        <div style={{flexGrow: 0}}>
          {
            (state==="Change this value" || state==="select button")
            ?<span style={{color:"red", fontSize:"15px", float:'right', width:'210px', whiteSpace: 'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}>{state}</span>
            :<span style={{color:"black", fontSize:"15px", float:'right', width:'210px', whiteSpace: 'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}>{state}</span>
          }
        </div>

      </div>
      {/* <Input id="Status" defaultValue="select button"></Input> */}
    </div>
  )
}

export default SystemID;