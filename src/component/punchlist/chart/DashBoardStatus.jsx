import React from 'react';

const DashBoardStatus = () => {
    const bgColor = '#bdbdbd'

    return (
        <>
            <div style={{display:'flex'}}>
                <div style={{paddingRight:'10px', width:'67%'}}>
                    <table
                        style={{ 
                            borderCollapse: "collapse", 
                            border: "1px solid #ECECEC", 
                            width:'100%', 
                            // boxShadow:'0px 2px 5px #e4e4e4',
                            boxShadow:'3px 3px 5px #a0a0a0',
                            height:'180px',
                            textAlign:'center',
                            borderRadius: '5px',
                            borderStyle:'hidden',
                            // border-radius: 10px;
                            // border-style: hidden;

                        }}
                        border="3"
                        border-collapse="collapse"
                    >
                        <tbody>
                        <tr>
                            <td rowspan="2" style={{backgroundColor:bgColor}}>Remained <br /> (Yesterday)</td>
                            <td colspan="4" style={{backgroundColor:bgColor}}>Current Status</td>
                            <td rowspan="2" style={{backgroundColor:bgColor}}>Remained <br /> (Today)</td>
                            <td rowspan="2" style={{backgroundColor:bgColor,                         
                                                    borderTopRightRadius: '5px',
                                                    borderStyle:'hidden',
                                                    }}>Pending</td>
                        </tr>
                        <tr>
                            <td colspan="2" style={{backgroundColor:bgColor}}>Issued</td>
                            <td colspan="2" style={{backgroundColor:bgColor}}>Closed</td>
                        </tr>
                        <tr>
                            <td rowspan="4">Lorem</td>
                            <td style={{backgroundColor:bgColor}}>Until.Yday</td>
                            <td style={{backgroundColor:bgColor}}>Today</td>
                            <td style={{backgroundColor:bgColor}}>Until.Yday</td>
                            <td style={{backgroundColor:bgColor}}>Today</td>
                            <td rowspan="4">Dolor</td>
                            <td rowspan="4">Dolor</td>
                        </tr>
                        <tr>
                            <td>Lorem</td>
                            <td>Ipsum</td>
                            <td>Dolor</td>
                            <td>Dolor</td>
                        </tr>
                        <tr>
                            <td colspan="2" style={{backgroundColor:bgColor}}>Total Issued</td>
                            <td colspan="2" style={{backgroundColor:bgColor}}>Total Closed</td>
                        </tr>
                        <tr>
                            <td colspan="2">Total Closed</td>
                            <td colspan="2">Dolor</td>
                        </tr>
                        </tbody>
                    </table>
                </div>



                <div style={{display:'flex', flexDirection:'column', width:'33%'}}>
                    <div>
                        <table
                            style={{ borderCollapse: "collapse",
                                     border: "1px solid #e4e4e4", 
                                    boxShadow:'3px 3px 5px #a0a0a0', 
                                     width:'100%', 
                                     textAlign:'center',
                                    borderRadius: '5px',
                                    borderStyle:'hidden',
                                     height:'110px'}}
                            border="3"
                            border-collapse="collapse"
                        >
                            <tbody>
                            <tr>
                                <td colspan="3" style={{backgroundColor:bgColor, borderTopLeftRadius: '5px',
                                                    borderStyle:'hidden',}}>Trend (avg of last week)</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:bgColor}}>Opened</td>
                                <td style={{backgroundColor:bgColor}}>Completed</td>
                                <td style={{backgroundColor:bgColor}}>Closed</td>
                            </tr>
                            <tr style={{height:'50px'}}>
                                <td>Ipsum</td>
                                <td>Dolor</td>
                                <td>Dolor</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>










                    <div style={{paddingTop: '10px'}}>
                        <table
                            style={{ borderCollapse: "collapse",
                                     border: "1px solid #e4e4e4",
                                      width:'100%',
                                        // boxShadow:'0px 2px 5px #a0a0a0',
                                        boxShadow:'3px 3px 5px #a0a0a0',
                                        textAlign:'center',
                                        borderRadius: '5px',
                                        borderStyle:'hidden',
                                      height:'60px' }}
                            border="3"
                            border-collapse="collapse"
                        >
                            <tbody>
                            <tr>
                                <td style={{backgroundColor:bgColor, width:'60%', borderBottomLeftRadius: '5px', borderTopLeftRadius: '5px',
                                                    borderStyle:'hidden',}}>ScheDule Availability</td>
                                <td>Dolor</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DashBoardStatus;