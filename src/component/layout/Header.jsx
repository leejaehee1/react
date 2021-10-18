import './styles/header.css'
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Toolbar, AppBar, Box, Typography, Divider } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';
import { UserMenu, Logout, LoadingIndicator, useGetList } from 'react-admin';
import { CodeSharp } from '@material-ui/icons';



const Header = () => {
    // const classes = useStyles();
    // const match = useRouteMatch(['/list', '/admin', '/code']);
    // const currentPath = match?.path ?? '/';

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
    const [userStorage, setUserStorage] = useState('');
    let a = window.localStorage.getItem('username')

    // useEffect(()=>{
    //     console.log(a)
    //     setUserStorage(JSON.stringify(a))
    // }, [])

    const handleUserToProject = () => {
        console.log('aa')
    }

    const handleOptionTest = (e) =>{
        console.log('aa')
    }

    return (

        <>
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
                { Object.keys(data).map((pj)=> 
                    (<option onClick={handleOptionTest} value="Algeria">{data[pj]['projectName']}</option>)
                    )}
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

export default Header;

// <nav className={classes.root}>
//     <AppBar position="static" color="primary">
//         <Toolbar className={classes.lnav} variant="dense">
//             <Box flex={1} display="flex" justifyContent="space-between">
//                 <Box display="flex" className={classes.lnav} flex="3" alignItems="center">
//                     <img
//                         className={classes.logo}
//                         src={
//                             'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
//                             // http://www.daewooenc.com/Resources/Kor/images/common/logo.png
//                         }
//                         alt="Bosch Logo"
//                     />
//                     <Typography component="span" variant="h4">
//                         P.L.M.S
//                     </Typography>
//                     <Divider className={classes.nlogo} variant="middle" orientation="vertical" />
//                 </Box>
//                 <Box display="flex" flex="5" className={classes.mnav} alignItems="center">
//                     <Typography component="span" variant="h6">
//                         &nbsp;&nbsp;&nbsp;Algerial RDPP
//                     </Typography>
//                 </Box>
//                 <Box flex="4">
//                     <Tabs
//                         value={currentPath}
//                         aria-label="Navigation Tabs"
//                     >
//                         <Tab
//                             label={'Punch LIST'}
//                             component={Link}
//                             to="/"
//                             value="/"
//                         />
//                         <Tab
//                             label={'Management'}
//                             component={Link}
//                             to="/admin"
//                             value="/admin"
//                         />
//                         <Tab
//                             label={'Code'}
//                             component={Link}
//                             to="/code"
//                             value="/code"
//                         />
//                         {/* <T  ab
//                             label={'Companies'}
//                             component={Link}
//                             to="/companies"
//                             value="/companies"
//                         />
//                         <Tab
//                             label={'Deals'}
//                             component={Link}
//                             to="/deals"
//                             value="/deals"
//                         /> */}
//                     </Tabs>
//                 </Box>
                // <Box display="flex">
                //     <LoadingIndicator />

                    
                //     {/* logout :  redirect login page */}
                    // <UserMenu logout={<Logout button />} />
                // </Box>
//             </Box>
//         </Toolbar>
//     </AppBar>
// </nav>