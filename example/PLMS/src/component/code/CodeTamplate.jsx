import React from 'react';
import { Resource, ListGuesser, Admin, EditGuesser} from 'react-admin';




import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Drawing from './codeComponent/Drawing';
import DisciplineTable from './codeComponent/DisciplineTable';
import AreaTable from './codeComponent/AreaTable';
import ProjectTable from './codeComponent/ProjectTable';
import StatusTable from './codeComponent/StatusTable';
import CategoryTable from './codeComponent/CategoryTable';
import AuthorityTable from './codeComponent/AuthorityTable';
import DepartmentTable from './codeComponent/DepartmentTable';
import SystemTable from './codeComponent/SystemTable';
import SubsystemTable from './codeComponent/SubsystemTable';
import UserCodeTable from './codeComponent/UserCodeTable';
import UnitTable from './codeComponent/UnitTable';

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
      backgroundColor: theme.palette.background.paper,
    },
  }));




function CodeTamplate() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
      // // console.log(newValue)
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    return (
      <div className={classes.root} style={{marginTop: '20px'}}>
        {/* <AppBar position="static" color="#ffffff"> */}
          <Tabs
          // style={{backgroundColor:'red'}}
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
        {/* </AppBar> */}
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {/* <Resource name="project" list={Project} /> */}
            <ProjectTable />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <StatusTable />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {/* <Resource name="discipline" list={Discipline} 
            // edit={EditGuesser} 
            /> */}
            <DisciplineTable />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <CategoryTable />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <AuthorityTable />
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            <DepartmentTable />
          </TabPanel>
          <TabPanel value={value} index={6} dir={theme.direction}>
            <SystemTable />
          </TabPanel>
          <TabPanel value={value} index={7} dir={theme.direction}>
            <SubsystemTable />
          </TabPanel>
          <TabPanel value={value} index={8} dir={theme.direction}>
            <UserCodeTable />
          </TabPanel>
          <TabPanel value={value} index={9} dir={theme.direction}>
            <UnitTable />
          </TabPanel>
          <TabPanel value={value} index={10} dir={theme.direction}>
            {/* <Resource name="area" list={Area} /> */}
            <AreaTable />
          </TabPanel>
          <TabPanel value={value} index={11} dir={theme.direction}>
            <Resource name="drawing" list={Drawing} />
          </TabPanel>
        </SwipeableViews>
      </div>
    );
}

export default CodeTamplate;