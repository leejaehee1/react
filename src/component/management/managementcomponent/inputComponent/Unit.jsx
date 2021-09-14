import React, {useEffect, useRef, useState} from 'react';
import NativeSelect from '@material-ui/core/NativeSelect'; 

// get API
import { useGetList } from 'react-admin';

const Unit = (props) => {
  const { data, ids } = useGetList("unit", );
  const [ state, setState ] = useState("");
  const [ select, setSelect ] = useState(false);
  
  useEffect(() => {
      console.log(111)
  }, [])

  const changeStatus = (event) =>{

    try {
        setState(data[event.target.value].unitName)
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
    <div>
      Unit &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; 
      <NativeSelect id="unit"  onChange={changeStatus}>
        <option value={props.static} selected={true}>{props.static}</option>
        {Object.values(data).map((a) => {
          if (a.unit !== props.static){ 
            return (
          <option value={a.unit} >{a.unit}</option>
          )}
        }
        )}
      </NativeSelect>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{state}
      {/* <Input id="Status" defaultValue="select button"></Input> */}
    </div>
  )
}

export default Unit;