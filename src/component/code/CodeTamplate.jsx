import React from 'react';
import { Resource, ListGuesser} from 'react-admin';



import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Authority from './codeComponent/Authority';
import Project from './codeComponent/Project';
import Status from './codeComponent/Status';
import Discipline from './codeComponent/Discipline';
import Category from './codeComponent/Category';
import Department from './codeComponent/Department';
import System from './codeComponent/System';
import Subsystem from './codeComponent/Subsystem';
import UserCode from './codeComponent/UserCode';
import Unit from './codeComponent/Unit';
import Area from './codeComponent/Area';
import Drawing from './codeComponent/Drawing';

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
      // paddingTop: 20,
      width: '100%',
      // backgroundColor: theme.palette.background.paper,
    },
  }));




{/* <Resource name="authority" list={ListGuesser} /> */}
function CodeTamplate() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);


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
            <Tab label="Department" {...a11yProps(5)} />
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
            <Resource name="project" list={Project} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Resource name="status" list={Status} />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Resource name="discipline" list={Discipline} />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Resource name="category" list={Category} />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <Resource name="authority" list={Authority} />
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            <Resource name="department" list={Department} />
          </TabPanel>
          <TabPanel value={value} index={6} dir={theme.direction}>
            <Resource name="systems" list={System} />
          </TabPanel>
          <TabPanel value={value} index={7} dir={theme.direction}>
            <Resource name="subsystem" list={Subsystem} />
          </TabPanel>
          <TabPanel value={value} index={8} dir={theme.direction}>
            <Resource name="usercode" list={UserCode} />
          </TabPanel>
          <TabPanel value={value} index={9} dir={theme.direction}>
            <Resource name="unit" list={Unit} />
          </TabPanel>
          <TabPanel value={value} index={10} dir={theme.direction}>
            <Resource name="area" list={Area} />
          </TabPanel>
          <TabPanel value={value} index={11} dir={theme.direction}>
            <Resource name="drawing" list={Drawing} />
          </TabPanel>
        </SwipeableViews>
      </div>
    );
}

export default CodeTamplate;