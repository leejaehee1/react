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
});

const Header = () => {
    const classes = useStyles();
    // const match = useRouteMatch(['/contacts', '/companies', '/deals']);
    const match = useRouteMatch(['/list', '/admin', '/deals']);
    const currentPath = match?.path ?? '/';
    console.log(match)   // 객체 들어옴
    // console.log(match.path) // error
    console.log(currentPath)   //  /admin # 뒷부분 들어옴
    // const currentPath = '/';

    return (
        <nav className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar variant="dense">
                    <Box flex={1} display="flex" justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                            <img
                                className={classes.logo}
                                src={
                                    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                                    // http://www.daewooenc.com/Resources/Kor/images/common/logo.png
                                }
                                alt="Bosch Logo"
                            />
                            <Typography component="span" variant="h5">
                                PLMS
                            </Typography>
                        </Box>
                        <Box>
                            <Tabs
                                value={currentPath}
                                aria-label="Navigation Tabs"
                            >
                                <Tab
                                    label={'Punch LIST'}
                                    component={Link}
                                    to="/list"
                                    value="/list"
                                />
                                <Tab
                                    label={'Management'}
                                    component={Link}
                                    to="/admin"
                                    value="/admin"
                                />
                                {/* <Tab
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
                            <UserMenu logout={<Logout button />} />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </nav>
    );
};

export default Header;
