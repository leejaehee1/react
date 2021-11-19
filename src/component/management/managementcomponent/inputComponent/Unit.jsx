import React, {useEffect, useState} from 'react';
import NativeSelect from '@material-ui/core/NativeSelect'; 

// get API
import { useGetList } from 'react-admin';

const Unit = (props) => {
  const { data } = useGetList("unit", );
  const [ state, setState ] = useState("");
  // const [ select, setSelect ] = useState(false);
  
  useEffect(() => {
    const upValData = Object.values(data).map(a => a.unit)
    if(props.stepValFlag==="verify"){
      props.setValUnit(upValData)
    }
  }, [])

  const changeStatus = (event) =>{

    try {
        setState(data[event.target.value].unitName)
        if (props.stepValFlag==="stepValFlag"){
          props.setUpdata(event.target.value)
        }
      } catch (e) {
        setState("Change this value")
      }
  }

  useEffect(() => {
    try {
      setState(data[props.static].unitName)
    } catch (e) {
      setState("select button")
    }
  }, [])

  return (
    <div style={{display:'flex'}}>
      <div style={{width:"30%"}}>
        Unit &nbsp;&nbsp; : 
      </div>
      <div>
        <NativeSelect id="unit" style={{maxWidth:"80px"}}  onChange={changeStatus}>
          <option value={props.static} selected={true}>{props.static}</option>
          {Object.values(data).map((a) => {
            if (a.unit !== props.static){ 
              return (
            <option value={a.unit} >{a.unit} &nbsp; {data[a.unit]?.unitName}</option>
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
      {/* <Input id="Status" defaultValue="select button"></Input> */}
    </div>
  )
}

export default React.memo(Unit);