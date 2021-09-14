import React, {useEffect, useRef, useState} from 'react';
import NativeSelect from '@material-ui/core/NativeSelect'; 

// get API
import { useGetList } from 'react-admin';

const Subsystem = (props) => {
  const { data, ids } = useGetList("subsystem", );
  const [ state, setState ] = useState("");
  const [ select, setSelect ] = useState(false);
  
  useEffect(() => {
      console.log(111)
  }, [])

  const changeStatus = (event) =>{

    try {
        setState(data[event.target.value].subsystemName)
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
    <div>
      Subsystem &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; 
      <NativeSelect id="subsystem"  onChange={changeStatus}>
        <option value={props.static} selected={true}>{props.static}</option>
        {Object.values(data).map((a) => {
          if (a.subsystem !== props.static){ 
            return (
          <option value={a.subsystem} >{a.subsystem}</option>
          )}
        }
        )}
      </NativeSelect>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{state}
      {/* <Input id="Status" defaultValue="select button"></Input> */}
    </div>
  )
}

export default Subsystem;