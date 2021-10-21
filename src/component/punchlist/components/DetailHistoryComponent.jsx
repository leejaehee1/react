import React from 'react';
import { useGetList, useGetOne } from 'react-admin';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import CustomBox from '../board/CustomBox';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      justifyContent: 'space-between',
      paddingTop: 10
    },
    paper: {
      padding: theme.spacing(1.5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

    divider: {
      margin: theme.spacing(2, 0),
    },
  }));

const DetailHistoryComponent = (props) => {
    const classes = useStyles();


    // const { data, ids } = useGetOne("vwpunchhis", );
    let historyLog = []
  // for(var logicData of props?.beforeFilterData){
  //   console.log(logicData[props.downDetailData.projectID])
  //   console.log(logicData[props.downDetailData.punchID])
  // }
  // console.log(props?.beforeFilterData)
  // console.log(props?.beforeFilterData[props.downDetailData.punchID])
    return (
        <div className={classes.root}>
          {/* {JSON.stringify(props.downDetailData.projectID)}<br />
          {JSON.stringify(props.downDetailData.punchID)}<br /> */}
          {/* {JSON.stringify(props.beforeFilterData)} */}
            <Paper style={{padding: '15px'}}>
                {/* <p>History Data Logic</p> */}
                

            
                {/* select * from vwpunchhis where projectID = 'A12' and punchID = 'PC-2-00-MB-MBP-E-01-005';     */}



                <div style={{display:'flex', padding: '5px 0 4px 0'}}>
                  <div style={{width:'30%'}}>
                    <CustomBox
                        stateData={2}
                        heightData={28}
                    />
                  </div>
                  <div style={{width:'70%', marginLeft:'15px', display:'flex', flexDirection:'column'}}>

                    <div style={{width:'100%', display:'flex'}}>
                      <div style={{width:'70%'}}><b>Abdul Habib</b></div> 
                      <div style={{width:'50%', paddingTop:'5px', alignItems:'center', fontSize:'4px', opacity:'0.5'}}>2021-08-01 00:00:00 </div>
                    </div>
                    <div style={{fontSize:'5px'}}>
                      Issue has been prompted to 'Opened'
                    </div>
                    <hr style={{width:'230px', opacity:'0.5', margin:'0px'}} />
                    <ArrowDropDownIcon fontSize='large' style={{marginTop:'-16px', marginLeft:'90px'}} />

                  </div>
                </div>

                <div style={{display:'flex', padding: '5px 0 4px 0'}}>
                  <div style={{width:'30%'}}>
                    <CustomBox
                        stateData={3}
                        heightData={28}
                    />
                  </div>
                  <div style={{width:'70%', marginLeft:'15px', display:'flex', flexDirection:'column'}}>

                    <div style={{width:'100%', display:'flex'}}>
                    <div style={{width:'70%'}}><b>Jack king</b></div> 
                      <div style={{width:'50%', paddingTop:'5px', alignItems:'center', fontSize:'4px', opacity:'0.5'}}>2021-09-01 00:00:00 </div>
                    </div>
                    <div style={{fontSize:'5px'}}>
                    Issue has been prompted to 'Ready For Review'
                    </div>
                    <hr style={{width:'230px', opacity:'0.5', margin:'0px'}} />
                    <ArrowDropDownIcon fontSize='large' style={{marginTop:'-16px', marginLeft:'90px'}} />

                  </div>
                </div>



                <div style={{display:'flex', padding: '5px 0 4px 0'}}>
                  <div style={{width:'30%'}}>
                    <CustomBox
                        stateData={4}
                        heightData={28}
                    />
                  </div>
                  <div style={{width:'70%', marginLeft:'15px', display:'flex', flexDirection:'column'}}>

                    <div style={{width:'100%', display:'flex'}}>
                      <div style={{width:'70%'}}><b>Jack king</b></div> 
                      <div style={{width:'50%', paddingTop:'5px', alignItems:'center', fontSize:'4px', opacity:'0.5'}}>2021-09-10 00:00:00 </div>
                    </div>
                    <div style={{fontSize:'5px'}}>
                    Issue has been prompted to 'Request For Close'
                    </div>
                    <hr style={{width:'230px', opacity:'0.5', margin:'0px'}} />
                    <ArrowDropDownIcon fontSize='large' style={{marginTop:'-16px', marginLeft:'90px'}} />

                  </div>
                </div>
                <div style={{display:'flex', padding: '5px 0 4px 0'}}>
                  <div style={{width:'30%'}}>
                    <CustomBox
                        stateData={5}
                        heightData={28}
                    />
                  </div>
                  <div style={{width:'70%', marginLeft:'15px', display:'flex', flexDirection:'column'}}>

                    <div style={{width:'100%', display:'flex'}}>
                      <div style={{width:'70%'}}><b>Jack king</b></div> 
                      <div style={{width:'50%', paddingTop:'5px', alignItems:'center', fontSize:'4px', opacity:'0.5'}}>2021-08-01 00:00:00 </div>
                    </div>
                    <div style={{fontSize:'5px'}}>
                    Issue has been prompted to 'Not Accepted'
                    </div>
                    <hr style={{width:'230px', opacity:'0.5', margin:'0px'}} />
                    <ArrowDropDownIcon fontSize='large' style={{marginTop:'-16px', marginLeft:'90px'}} />

                  </div>
                </div>
                <div style={{display:'flex', padding: '5px 0 4px 0'}}>
                  <div style={{width:'30%'}}>
                    <CustomBox
                        stateData={6}
                        heightData={28}
                    />
                  </div>
                  <div style={{width:'70%', marginLeft:'15px', display:'flex', flexDirection:'column'}}>

                    <div style={{width:'100%', display:'flex'}}>
                      <div style={{width:'70%'}}><b>Jack king</b></div> 
                      <div style={{width:'50%', paddingTop:'5px', alignItems:'center', fontSize:'4px', opacity:'0.5'}}>2021-09-15 00:00:00 </div>
                    </div>
                    <div style={{fontSize:'5px'}}>
                    Issue has been closed totally
                    </div>
                    {/* <hr style={{width:'230px', opacity:'0.5', margin:'0px'}} />
                    <ArrowDropDownIcon fontSize='large' style={{marginTop:'-16px', marginLeft:'90px'}} /> */}

                  </div>
                </div>
            </Paper>
        </div>
    )
}

export default DetailHistoryComponent;