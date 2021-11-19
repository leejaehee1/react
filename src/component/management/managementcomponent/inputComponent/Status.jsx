import React, {useEffect, useState} from 'react';
// textField
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input'; 
// import InputLabel from '@material-ui/core/InputLabel'; 
// import FormHelperText from '@material-ui/core/FormHelperText'; 
import NativeSelect from '@material-ui/core/NativeSelect'; 
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';

// get API
import { useGetList } from 'react-admin';

const Status = (props) => {
  const { data } = useGetList("status", );
  const [ state, setState ] = useState("");
  // const [ select, setSelect ] = useState(false);
  
  useEffect(() => {
    const upValData = Object.values(data).map(a => a.status)
    if(props.stepValFlag==="verify"){
      props.setValStatus(upValData)
    }
  }, [])

  const changeStatus = (event) =>{
    try {
      setState(data[event.target.value].statusName)
      if (props.stepValFlag==="stepValFlag"){
        props.setUpdata(event.target.value)
      }
    } catch (e) {
      setState("Change this value")
    }
  }

  useEffect(() => {
    try {
      setState(data[props.static].statusName)
    } catch (e) {
      setState("select button")
    }
  }, [])

  return (
    <div style={{display:'flex'}}>
      <div style={{width:"30%"}}>
        Status &nbsp;&nbsp; :
      </div>
      <div>
        <NativeSelect id="status" variant="outlined" style={{maxWidth:"80px"}}  onChange={changeStatus}>
          <option value={props.static} selected={true}>{props.static}</option>
          {Object.values(data).map((a) => {
            if (a.status !== props.static){ 
              return (
            <option value={a.status} >{a.status} &nbsp; {data[a.status]?.statusName}</option>
            )}
          }
          )}
        </NativeSelect>
      </div>
      {
        (state==="Change this value" || state==="select button")
        ?<span style={{color:"red", fontSize:"15px", float:'right',  // 아래가 줄 짤리는 로직
                      width:'100px', whiteSpace: 'nowrap', textOverflow:'ellipsis', overflow:'hidden'
                    }}>{state}</span>
        :<span style={{color:"black", fontSize:"15px", float:'right', 
                      width:'100px', whiteSpace: 'nowrap', textOverflow:'ellipsis', overflow:'hidden'
                    }}>{state}</span>
      }
    </div>
  )
}

export default React.memo(Status);