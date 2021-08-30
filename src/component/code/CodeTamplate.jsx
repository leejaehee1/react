import React from 'react';
import { Admin, Resource, useGetMany, useGetList, ListGuesser } from 'react-admin';



import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
    </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));




{/* <Resource name="authority" list={ListGuesser} /> */}
function CodeTamplate() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

  // const { data: allAuthoritys, ids } = useGetList(
  //   'authority',
  //   // { page: 1, perPage: 10 },
  //   // { field: 'authority', order: 'DESC' }
  //   );
    
  // const { data: authority } = useGetMany('authority', {ids : [1, 2]});
  // // console.log(allAuthoritys)
  // console.log(authority)

  
    const handleChange = (event, newValue) => {
      // console.log(newValue)
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Project"  />
            <Tab label="Statuts" {...a11yProps(1)} />
            <Tab label="Discipline" {...a11yProps(2)} />
            <Tab label="Category" {...a11yProps(3)} />
            <Tab label="Authority" {...a11yProps(4)} />
            <Tab label="Depart" {...a11yProps(5)} />
            <Tab label="System" {...a11yProps(6)} />
            <Tab label="Subsystem" {...a11yProps(7)} />
            <Tab label="Users" {...a11yProps(8)} />
            <Tab label="Unit" {...a11yProps(9)} />
            <Tab label="Area" {...a11yProps(10)} />
            <Tab label="Drawing" {...a11yProps(11)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            2
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            2
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            3
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            {/* <PostTags /> */}
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            5
          </TabPanel>
          <TabPanel value={value} index={6} dir={theme.direction}>
            6
          </TabPanel>
          <TabPanel value={value} index={7} dir={theme.direction}>
            7
          </TabPanel>
          <TabPanel value={value} index={8} dir={theme.direction}>
            8
          </TabPanel>
          <TabPanel value={value} index={9} dir={theme.direction}>
            9
          </TabPanel>
          <TabPanel value={value} index={10} dir={theme.direction}>
            10
          </TabPanel>
          <TabPanel value={value} index={11} dir={theme.direction}>
            11
          </TabPanel>
        </SwipeableViews>
      </div>
    );
}

export default CodeTamplate;