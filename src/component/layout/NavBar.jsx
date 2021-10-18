import './styles/header.css'
import React, { useEffect, useState } from 'react';
import { UserMenu, Logout, LoadingIndicator, useGetList, useRefresh, useRedirect } from 'react-admin';

import axios from 'axios';


const NavBar = () => {
    // const classes = useStyles();
    // const match = useRouteMatch(['/list', '/admin', '/code']);
    // const currentPath = match?.path ?? '/';
    const refresh = useRefresh()
    const redirect = useRedirect()
    const [statePunch, setStatePunch] = useState(true);
    const [stateManagement, setStateManagement] = useState(false);
    const [stateCode, setStateCode] = useState(false);

    const handlePunch = () => {
        setStatePunch(true);
        setStateManagement(false);
        setStateCode(false);
    }
    const handleManagement = () => {
        setStatePunch(false);
        setStateManagement(true);
        setStateCode(false);
    }
    const handleCode = () => {
        setStatePunch(false);
        setStateManagement(false);
        setStateCode(true);
    }

    const { data, ids } = useGetList('project', );
    const [userProjectName, setUserProjectName] = useState('');
    const [userProjectList, setUserProjectList] = useState([]);
    const [apiUserProjectName, setApiUserProjectName] = useState([]);
    const [apiProject, setApiProject] = useState([]);
    let localUsername = window.localStorage.getItem('username')

    const urlUserProjectName = 'http://localhost:5000/punchlist/userprojectselect/?userid='+localUsername;
    const urlProjectID = 'http://localhost:5000/punchlist/project/?range=[0, 24]';

    useEffect(()=> {
        axios.get(urlUserProjectName)
        .then((res)=> {
            if (res.data.val){
                let targetList = []
                for (var pID of res.data.result){
                    targetList.push(pID.projectID)
                }
                setApiUserProjectName(targetList)
                // testData=res.data.result
            }
        })
        .catch(err => console.log(err))
        console.log(urlUserProjectName)
        axios.get(urlProjectID)
        .then((res)=> setApiProject(res.data.result))
        .catch(err => console.log(err))
    }, [])
    
    useEffect(()=> {
        let projectFilter = []
        let projectFilterID = []
        if(apiUserProjectName){

            Object.keys(apiProject).map((i)=> {
                if (apiUserProjectName.includes(apiProject[i]['projectID'])){
                    // console.log(9)
                    // console.log(9)
                    // console.log(9)
                    // console.log(9)
                    // console.log(9)
                    // console.log(data[i]['projectName'])
                    projectFilterID.push(apiProject[i]['projectID'])
                    projectFilter.push(apiProject[i]['projectName'])
                }
            })
            window.localStorage.setItem('projectName', projectFilterID[0])
            setUserProjectList(projectFilter)
        }
        redirect('/')
    }, [apiProject])

    const handleUserToProject = (e) => {
        // console.log(e.target.value)
        setUserProjectName(e.target.value)
        Object.keys(apiProject).map((i)=> {
            if(apiProject[i]['projectName']===e.target.value){
                // console.log(apiProject[i]['projectID'])
                window.localStorage.setItem('projectName', apiProject[i]['projectID'])
            }
        })



        redirect('/')
    }

    useEffect(()=> {
        // console.log(111)
        console.log(
            window.localStorage.getItem('projectName')
        )        
    }, [userProjectName])

    return (

        <>
        {/* aaa{JSON.stringify(apiUserProjectName)}
        aaa{JSON.stringify(userProjectList)} */}
         <header >
            <div>
            <h1>
                <a href="#">P.L.M.S</a>
            </h1>
            <a href="#" className="navUsername" >
                {/* <p>{userStorage}</p> */}
                <p>{window.localStorage.getItem('username')}</p>
            </a>
            <select onChange={handleUserToProject}>
                {(apiUserProjectName!==undefined && apiUserProjectName)? userProjectList.map((name)=>
                    (<option value={name}>{name}</option>)
                ): null
            }
                {/* { Object.keys(data).map((pj)=> 
                    (<option value={data[pj]['projectName']}>{data[pj]['projectName']}</option>)
                    )} */}
                {/* <option value="second">Second</option>
                <option value="third">Third</option> */}
            </select>
            </div>
            <nav id="gnb">
                <ul>
                    {statePunch?
                    <li className="on">
                    <a href="#">Punch List</a>
                    </li>
                    :
                    <li onClick={handlePunch}>
                    <a href="#">Punch List</a>
                    </li>
                    }
                    {stateManagement?
                    <li className="on">
                    <a href="#/admin">Management</a>
                    </li>
                    :
                    <li onClick={handleManagement}>
                    <a href="#/admin">Management</a>
                    </li>
                    }
                    {stateCode?
                    <li className="on">
                    <a href="#/code">Code </a>
                    
                    </li>
                    :
                    <li onClick={handleCode}>
                    <a href="#/code">Code</a>
                    </li>
                    }
                    <li style={{width:'10px', padding:'0px', margin:'0px'}}>
                    <UserMenu logout={<Logout button />} />
                    </li>
                    {/* <Logout button /> */}
                </ul>
            </nav>
            {/* {JSON.stringify(data)} */}
            {/* {data} */}
        </header>
        {/* <Logout button /> */}
        {/* <UserMenu logout={<Logout button />} /> */}
        </>
    );
};

export default NavBar;