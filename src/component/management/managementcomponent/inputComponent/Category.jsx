import React, {useEffect, useRef, useState} from 'react';
// textField
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input'; 
// import InputLabel from '@material-ui/core/InputLabel'; 
// import FormHelperText from '@material-ui/core/FormHelperText'; 
import NativeSelect from '@material-ui/core/NativeSelect'; 

// get API
import { useGetList } from 'react-admin';

const Category = (props) => {
  const { data, ids } = useGetList("category", );
  const [ state, setState ] = useState("");
  const [ select, setSelect ] = useState(false);
  
  useEffect(() => {
      console.log(111)
  }, [])

  const changeStatus = (event) =>{

    try {
        setState(data[event.target.value].categoryName)
      } catch (e) {
        setState("Change this value")
      }
  }

  useEffect(() => {
    try {
      setState(data[props.static].categoryName)
    } catch (e) {
      setState("select button")
    }
  }, [])

  return (
    <div>
      Category &nbsp;&nbsp; : &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <NativeSelect id="category"  onChange={changeStatus}>
        <option value={props.static} selected={true}>{props.static}</option>
        {Object.values(data).map((a) => {
          if (a.category !== props.static){ 
            return (
          <option value={a.category} >{a.category}</option>
          )}
        }
        )}
      </NativeSelect>
      {
        (state==="Change this value" || state==="select button")
        ?<span style={{color:"red", fontSize:"15px", float:'right', width:'150px', whiteSpace: 'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}>{state}</span>
        :<span style={{color:"black", fontSize:"15px", float:'right', width:'150px', whiteSpace: 'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}>{state}</span>
      }
    </div>
  )
}

export default Category;