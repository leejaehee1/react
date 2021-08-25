import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Toolbar, AppBar, Box, Typography } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';
import { UserMenu, Logout, LoadingIndicator } from 'react-admin';
import { CodeSharp } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    logo: {
        width: 50,
        height: 43.54,
    },
    lnav: {
        background: '#212121',
    },
    mnav: {
        background: '#424242',
    },
    rnav: {
        background: '#ECECEC',
    },
});

const Header = () => {
    const classes = useStyles();
    // const match = useRouteMatch(['/contacts', '/companies', '/deals']);
    const match = useRouteMatch(['/list', '/admin', '/deals']);
    const currentPath = match?.path ?? '/';
    // console.log(match)   // 객체 들어옴
    // console.log(match.path) // error
    // console.log(currentPath)   //  /admin # 뒷부분 들어옴
    // const currentPath = '/';

    return (
        <nav className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar className={classes.lnav} variant="dense">
                    <Box flex={1} display="flex" justifyContent="space-between">
                        <Box display="flex" className={classes.lnav} flex="3" alignItems="center">
                            <img
                                className={classes.logo}
                                src={
                                    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                                    // http://www.daewooenc.com/Resources/Kor/images/common/logo.png
                                }
                                alt="Bosch Logo"
                            />
                            <Typography component="span" variant="h4">
                                P.L.M.S
                            </Typography>
                        </Box>
                        <Box display="flex" flex="5" className={classes.mnav} alignItems="center">
                            <Typography component="span" variant="h6">
                                &nbsp;&nbsp;&nbsp;Algerial RDPP
                            </Typography>
                        </Box>
                        <Box flex="4">
                            <Tabs
                                value={currentPath}
                                aria-label="Navigation Tabs"
                            >
                                <Tab
                                    label={'Punch LIST'}
                                    component={Link}
                                    to="/"
                                    value="/"
                                />
                                <Tab
                                    label={'Management'}
                                    component={Link}
                                    to="/admin"
                                    value="/admin"
                                />
                                <Tab
                                    label={'Code'}
                                    // component={Link}
                                    // to="/admin"
                                    // value="/admin"
                                />
                                {/* <T  ab
                                    label={'Companies'}
                                    component={Link}
                                    to="/companies"
                                    value="/companies"
                                />
                                <Tab
                                    label={'Deals'}
                                    component={Link}
                                    to="/deals"
                                    value="/deals"
                                /> */}
                            </Tabs>
                        </Box>
                        <Box display="flex">
                            <LoadingIndicator />

                            
                            {/* logout :  redirect login page */}
                            <UserMenu logout={<Logout button />} />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </nav>
    );
};

export default Header;
