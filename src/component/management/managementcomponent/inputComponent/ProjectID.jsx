import React, {useEffect, useRef, useState} from 'react';
// textField
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input'; 
// import InputLabel from '@material-ui/core/InputLabel'; 
// import FormHelperText from '@material-ui/core/FormHelperText'; 
import NativeSelect from '@material-ui/core/NativeSelect'; 
import CachedIcon from '@material-ui/icons/Cached';
import './styles/projectID.css'

// get API
import { useGetList } from 'react-admin';

const ProjectID = (props) => {
  const { data, ids } = useGetList("project", );
  const [ state, setState ] = useState("");
  const [ select, setSelect ] = useState(false);
  const changedAllProjectID = useRef("aa");
  
  useEffect(() => {
    const upValData = Object.values(data).map(a => a.projectID)
    // console.log("props.stepValFlag")
    // console.log(props.stepValFlag)
    if(props.stepValFlag===""){
      props.setValProjectID(upValData)
    }
  }, [])

  const changeStatus = (event) =>{

    try {
        changedAllProjectID.current = data[event.target.value].projectID;
        setState(data[event.target.value].projectName);
        // console.log(changedAllProjectID.current)
        console.log(1)
        if (props.stepValFlag==="stepValFlag"){
          props.setUpdata(event.target.value)
        }
        // props.setUpdata(changedAllProjectID.current)
      } catch (e) {
        changedAllProjectID.current = "";
        setState("Change this value");
      }
  }

  useEffect(() => {
    try {
      changedAllProjectID.current = data[props.static].projectID;
      setState(data[props.static].projectName);
      // console.log(changedAllProjectID.current)
    } catch (e) {
      changedAllProjectID.current = ""
      setState("select button")
    }
  }, [])

  const updateAllProjectID = () => {
    // 변경할 데이터를 올려 줘야한다. 그말은 현재 위치하고 있는 값을 넣어줘야한다.
    // 1. 적혀있는 데이터를 잘 가져오는지 console.log()로 찍는다.
    // 2. 위에 있는 값이 DB에 있는지 없는지 로직 분기.
    // 2-1. DB에 없으면 alert 띄워준다.
    // 2-2.  DB에 있으면 alert띄워주기 + props로 올린다.
    // 3. props에 들어갈 데이터는 punchID랑 변경될 값을 넣어준다.
    console.log(changedAllProjectID.current) // 들어온 DB 값
    console.log(props.static) // 기존에 설정된 값
    if(changedAllProjectID.current){
      // DB에 없는 값일 때 선택해도 자동으로 빈값들어와서 null
      props.setAllProjectTargetData(changedAllProjectID.current)
      // console.log(1)
    }else{
      // DB에 상관없이 값 있으면 여기.
      // console.log(2)
    }
  }

  return (
    <div style={{display:'flex'}}>
      <div style={{width: "30%"}}>
        projectID :  
        {/* <button className='projectIDButton' type="button" onClick={updateAllProjectID}><CachedIcon fontSize="small" /> ALL </button> */}
      </div>
      <div style={{flexGrow: 1, display:'flex'}}>
        <div style={{width: "20%"}}>
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
        </div>
        <div >
          {
            (state==="Change this value" || state==="select button")
            ?<span style={{color:"red", fontSize:"15px", float:'right'}}>{state}</span>
            :<span style={{color:"black", fontSize:"15px", float:'right'}}>{state}</span>
          }
        </div>
      </div>
      {/* <Input id="Status" defaultValue="select button"></Input> */}
    </div>
  )
}

export default ProjectID;