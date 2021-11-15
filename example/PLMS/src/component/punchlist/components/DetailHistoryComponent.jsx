import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import CustomBox from '../board/CustomBox';


import axios from 'axios';
import HistoryBox from '../board/HistoryBox';



const DetailHistoryComponent = (props) => {
    const [historyData, setHistoryData] = useState(null);


    const url = `http://54.180.147.184:5000/punchlist/punchlistlog?projectid=${props.downDetailData?.projectID}&punchid=${props.downDetailData?.punchID}`;

    useEffect(() => {
      axios.get(url)
      .then((res)=> {
          setHistoryData(res.data.result)})
      .catch(err => console.log(err))
    }, [props.downDetailData?.punchID])

    const HistorySelectBox = (i) => {
      return (
        <HistoryBox 
          stateData={i}
          heightData={36} 
        />
        )
    }

    const HistoryDetailDescription = (i) => {
      if(i === '1') {
        return (<>Draft : check your database</>)
      } else if (i ==='2') {
        return (<>Issue has been prompted to 'Opened'</>)
      } else if (i ==='3') {
        return (<>Issue has been prompted to 'Ready For Review'</>)
      } else if (i ==='4') {
        return (<>Issue has been prompted to 'Request For Close'</>)
      } else if (i ==='5') {
        return (<>Issue has been prompted to 'Not Accepted'</>)
      } else if (i ==='6') {
        return (<>Issue has been closed totally</>)
      } else {
        return (<>check your database</>)
      }
    }

    const historyView = () => {
      if (historyData) {
        return null
      } else {
        return <p>not data history</p>
      }
    }

    return (
        <div style={{marginTop: '15px', }}>
          {/* {JSON.stringify(props.downDetailData.projectID)}<br />
          {JSON.stringify(historyData)}<br /> */}
          {/* {JSON.stringify(props.beforeFilterData)} */}
          {/* {JSON.stringify(props.downDetailData.status)} */}
            <Paper style={{padding: '15px'}}>
                {(historyData?.length)? null : 
                  <div style={{display:'flex', padding: '5px 0 4px 0'}}>
                    <div style={{width:'30%'}}>
                      {HistorySelectBox(props.downDetailData?.status)}
                    </div>
                    <div style={{width:'70%', marginLeft:'15px', display:'flex', flexDirection:'column'}}>

                    <div style={{width:'100%', display:'flex'}}>
                      <div style={{width:'70%'}}><b>{props.downDetailData?.issuedBy}</b></div> 
                      <div style={{width:'50%', paddingTop:'5px', alignItems:'center', fontSize:'4px', opacity:'0.5'}}>2021-08-01 00:00:00 </div>
                    </div>
                    <div style={{fontSize:'5px'}}>
                      {/* Issue has been prompted to 'Opened' */}
                      {HistoryDetailDescription(props.downDetailData?.status)}
                    </div>
                    <hr style={{width:'230px', opacity:'0.5', margin:'0px'}} />
                    {/* {(historyData.length-1 === parseInt(i))? null :<ArrowDropDownIcon fontSize='large' style={{marginTop:'-16px', marginLeft:'90px'}} />} */}
                    </div>
                  </div>
                }
                {historyData && 
                historyData.map((d, i)=> {
                  // return (<p>{d['status']}</p>)
                  return (
                    <div style={{display:'flex', padding: '5px 0 4px 0'}}>
                      <div style={{width:'30%'}}>
                        {HistorySelectBox(d['status'])}
                      </div>
                      <div style={{width:'70%', marginLeft:'15px', display:'flex', flexDirection:'column'}}>

                      <div style={{width:'100%', display:'flex'}}>
                        <div style={{width:'70%'}}><b>{d['issuedBy']}</b></div> 
                        <div style={{width:'50%', paddingTop:'5px', alignItems:'center', fontSize:'4px', opacity:'0.5'}}>2021-08-01 00:00:00 </div>
                      </div>
                      <div style={{fontSize:'5px'}}>
                        {/* Issue has been prompted to 'Opened' */}
                        {HistoryDetailDescription(d['status'])}
                      </div>
                      <hr style={{width:'230px', opacity:'0.5', margin:'0px'}} />
                      {(historyData.length-1 === parseInt(i))? null :<ArrowDropDownIcon fontSize='large' style={{marginTop:'-16px', marginLeft:'90px'}} />}
                      </div>
                    </div>
                    )
                })
                }                
                {/* select * from vwpunchhis where projectID = 'A12' and punchID = 'PC-2-00-MB-MBP-E-01-005';     */}



                {/* <div style={{display:'flex', padding: '5px 0 4px 0'}}>
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
                    
                  </div>
                </div> */}
            </Paper>
        </div>
    )
}

export default DetailHistoryComponent;