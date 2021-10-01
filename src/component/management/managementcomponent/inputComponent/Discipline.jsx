import React, {useEffect, useRef, useState} from 'react';
// textField
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input'; 
// import InputLabel from '@material-ui/core/InputLabel'; 
// import FormHelperText from '@material-ui/core/FormHelperText'; 
import NativeSelect from '@material-ui/core/NativeSelect'; 

// get API
import { useGetList } from 'react-admin';

const Discipline = (props) => {
  const { data, ids } = useGetList("discipline", );
  const [ state, setState ] = useState("");
  const [ select, setSelect ] = useState(false);
  
  useEffect(() => {
      console.log(111)
  }, [])

  const changeStatus = (event) =>{

    try {
        setState(data[event.target.value].disciplineName)
        props.setUpdata(event.target.value)
      } catch (e) {
        setState("Change this value")
      }
  }

  useEffect(() => {
    try {
      setState(data[props.static].disciplineName)
    } catch (e) {
      setState("select button")
    }
  }, [])

  return (
    <div style={{display:'flex'}}>
      <div style={{width:"30%"}}>
        Discipline &nbsp;&nbsp; :  
      </div>
      <div>
        <NativeSelect id="discipline" style={{maxWidth:"80px"}} onChange={changeStatus}>
          <option value={props.static} selected={true}>{props.static}</option>
          {Object.values(data).map((a) => {
            if (a.discipline !== props.static){ 
              return (
            <option value={a.discipline} >{a.discipline}</option>
            )}
          }
          )}
        </NativeSelect>        
      </div>
      {
        (state==="Change this value" || state==="select button")
        ?<span style={{color:"red", fontSize:"15px", float:'right',  // 아래가 줄 짤리는 로직
                      // width:'80px', whiteSpace: 'nowrap', textOverflow:'ellipsis', overflow:'hidden'
                    }}>{state}</span>
        :<span style={{color:"black", fontSize:"15px", float:'right', 
                      // width:'80px', whiteSpace: 'nowrap', textOverflow:'ellipsis', overflow:'hidden'
                    }}>{state}</span>
      }
      {/* <Input id="Status" defaultValue="select button"></Input> */}
    </div>
  )
}

export default Discipline;