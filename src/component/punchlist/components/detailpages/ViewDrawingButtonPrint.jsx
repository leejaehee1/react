import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComponentToPrint = (props) => {
    // console.log(props.downDetailData)
    const [getProjectID, setGetProjectID] = useState([]);
    const [getDiscipline, setGetDiscipline] = useState([]);
    const [getDepartment, setGetDepartment] = useState([]);
    const [getSystem, setGetSystem] = useState([]);
    const [getSubSystem, setGetSubSystem] = useState([]);


    let nowTime = JSON.stringify(new Date()).slice(1, 11)
    let nTime = new Date()
    const urlProjectID = 'http://localhost:5000/punchlist/project/?range=[0, 24]';
    const urlDiscipline = 'http://localhost:5000/punchlist/discipline/?range=[0, 24]';
    const urlDepartment = 'http://localhost:5000/punchlist/department/?range=[0, 24]';
    const urlSystem = 'http://localhost:5000/punchlist/systems/?range=[0, 24]';
    const urlSubSystem = 'http://localhost:5000/punchlist/subsystem/?range=[0, 24]';

    useEffect(()=>{
        axios.get(urlProjectID)
        .then((res)=> setGetProjectID(res.data.result))
        .catch(err => console.log(err))

        axios.get(urlDiscipline)
        .then((res)=> setGetDiscipline(res.data.result))
        .catch(err => console.log(err))

        axios.get(urlDepartment)
        .then((res)=> setGetDepartment(res.data.result))
        .catch(err => console.log(err))

        axios.get(urlSystem)
        .then((res)=> setGetSystem(res.data.result))
        .catch(err => console.log(err))

        axios.get(urlSubSystem)
        .then((res)=> setGetSubSystem(res.data.result))
        .catch(err => console.log(err))
    }, [])


    const [projectIDState, setProjectIDState] = useState(props.downDetailData.projectID)
    const [disciplineState, setDisciplineState] = useState(props.downDetailData.discipline)
    const [departmentState, setDepartmentState] = useState(props.downDetailData.department)
    const [SystemState, setSystemState] = useState(props.downDetailData.systemID)
    const [subSystemState, setSubSystemState] = useState(props.downDetailData.subsystem)
    useEffect(()=> {
        // console.log(getProjectID)
        for (var projectRow of getProjectID){
            // console.log(projectRow)
            // console.log()
            if(projectRow['projectID']===props.downDetailData.projectID){
                setProjectIDState(projectRow['projectName'])
            }
        }
    }, [getProjectID])

    useEffect(()=> {
        for (var disciplineRow of getDiscipline){
            if(disciplineRow['discipline']===props.downDetailData.discipline){
                setDisciplineState(disciplineRow['disciplineName'])
            }
        }
    }, [getDiscipline])

    useEffect(()=> {
        for (var departmentRow of getDepartment){
            if(Number(departmentRow['department'])===Number(props.downDetailData.department)){
                setDepartmentState(departmentRow['deptName'])
            }
        }
    }, [getDepartment])

    useEffect(()=> {
        for (var systemRow of getSystem){
            if(systemRow['systemID']===props.downDetailData.systemID){
                setSystemState(systemRow['systemName'])
            }
        }
    }, [getSystem])

    useEffect(()=> {
        for (var subSystemRow of getSubSystem){
            if(subSystemRow['subsystem']===props.downDetailData.subsystem){
                setSubSystemState(subSystemRow['subsystemName'])
            }
        }
    }, [getSubSystem])
    // const changeProjectID = () => {
    //     for (var projectRow of urlProjectID){
    //         if(projectRow['projectID']===props.downDetailData.projectID){
    //             setProjectIDState(projectRow['projectName'])
    //         }
    //     }
    // }
    return (
        <div style={{margin: '50px'}}>
            <div style={{display:'flex', height:'90px'}} >
                <div style={{width:"20%", border:'1px solid', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'20px'}}><span>PLMS</span></div>
                <div style={{width:"60%", border:'1px solid'}}>
                    <div style={{width:"100%", height:'60px', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'30px'}}>PUNCH LIST</div>
                    <div style={{width:"100%", height:'30px', borderTop:'1px solid', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'17px'}}>Opend</div>
                </div>
                {/* <div style={{width:"20%", border:'1px solid', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'15px'}}>{props.downDetailData.projectID}</div> */}
                <div style={{width:"20%", border:'1px solid', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'15px'}}>{projectIDState}</div>
            </div>
            <div style={{display:'flex', height:'160px', border:'1px solid', marginTop:'7px'}}>
                <div style={{width:"50%", justifyContent:'left', marginLeft:'3px',}}>
                    <span>Punch ID : {props.downDetailData.punchID}</span> <br />
                    <span>Category : {props.downDetailData.category}</span> <br />
                    <span>Discipline : {disciplineState}</span> <br />
                    <span>Drawing No : {props.downDetailData.drawingNo}</span> <br />
                    <span>System : {SystemState}</span> <br />
                    <span>Subsystem : {subSystemState}</span> <br />
                </div>
                <div style={{width:"50%", justifyContent:'left', marginLeft:'3px',}}>
                    <span>Unit : {props.downDetailData.unit}</span> <br />
                    <span>Area : {props.downDetailData.area}</span> <br />
                    <span>Department : {departmentState}</span> <br />
                    <span>Tag Number : {props.downDetailData.tagNumber}</span> <br />
                </div>
            </div>
            <div style={{display:'flex', height:'140px', border:'1px solid', marginTop:'7px'}}>
                <div style={{width:"50%", justifyContent:'left', marginLeft:'3px',}}>
                    <span>Issued Date : {(props.downDetailData.issuedDate)?props.downDetailData.issuedDate.slice(0, 10).replaceAll('-', '.'):<></>}</span> <br />
                    <span>Issued By : {props.downDetailData.issuedBy}</span> <br />
                    <span>Completed Date : {(props.downDetailData.completedDate)?props.downDetailData.completedDate.slice(0, 10).replaceAll('-', '.'):<></>}</span> <br />
                    <span>Completed By : {props.downDetailData.completedBy}</span> <br />
                    <span>Design Change Requested : {(Number(props.downDetailData.designChgReq))?<>Yes</>:<>No</>}</span> <br />
                </div>
                <div style={{width:"50%", justifyContent:'left', marginLeft:'3px',}}>
                    <span>Confiremed Date: {(props.downDetailData.confiremedDate)?props.downDetailData.confiremedDate.slice(0, 10).replaceAll('-', '.'):<></>}</span> <br />
                    <span>Confirmed By : {props.downDetailData.confirmedBy}</span> <br />
                    <span>Closed Date : {(props.downDetailData.closedDate)?props.downDetailData.closedDate.slice(0, 10).replaceAll('-', '.'):<></>}</span> <br />
                    <span>Closed By : {props.downDetailData.closedBy}</span> <br />
                    <span>Material Requested : {(Number(props.downDetailData.materialReq))?<>Yes</>:<>No</>}</span> <br />
                </div>
            </div>
            <div style={{display:'flex', height:'340px', border:'1px solid', marginTop:'7px'}}>
                <div style={{width:"50%", borderRight:'1px solid'}}>
                    <div style={{width:"100%", height:'30px', display:'flex', justifyContent:'center', alignItems:'center'}}>Issued</div>
                    <div style={{width:"100%", height:'190px', borderTop:'1px solid', display:'flex', justifyContent:'center', alignItems:'center'}}>Opend</div>
                    <div style={{width:"100%", height:'120px', borderTop:'1px solid', display:'flex', justifyContent:'left', paddingLeft:'4px', alignItems:'center'}}> 
                     {props.downDetailData.issueDescription}
                    
                    </div>
                </div>
                <div style={{width:"50%"}}>
                    <div style={{width:"100%", height:'30px', display:'flex', justifyContent:'center', alignItems:'center'}}>Completed</div>
                    <div style={{width:"100%", height:'190px', borderTop:'1px solid', display:'flex', justifyContent:'center', alignItems:'center'}}>Opend</div>
                    <div style={{width:"100%", height:'120px', borderTop:'1px solid', display:'flex', justifyContent:'left', paddingLeft:'4px', alignItems:'center'}}>
                     {props.downDetailData.completeComment}
                    </div>
                </div>
            </div>
            <div style={{display:'flex', height:'210px', border:'1px solid', marginTop:'7px'}}>
                <div style={{width:"50%"}}>
                    <div style={{width:"100%", height:'30px', display:'flex', justifyContent:'left', marginLeft:'3px', alignItems:'center'}}>Drawing</div>
                    <div style={{width:"100%", height:'180px', borderRight:'1px solid',  borderTop:'1px solid', display:'flex', justifyContent:'center', alignItems:'center'}}>Opend</div>
                </div>
                <div style={{width:"50%"}}>
                    <div style={{width:"100%", height:'30px', display:'flex', justifyContent:'center', alignItems:'center'}}></div>
                    <div style={{width:"100%", height:'180px', borderTop:'1px solid', display:'flex', justifyContent:'center', alignItems:'center'}}>Opend</div>
                </div>
            </div>

            <div style={{display:'flex', height:'45px', marginTop:'7px', justifyContent:'right', alignItems:'center'}}>
                printed date : {nowTime}
            </div>
        </div>
    )
}


export default ComponentToPrint;