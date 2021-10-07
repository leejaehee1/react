import React from 'react';


const ComponentToPrint = (props) => {
    console.log(props.downDetailData)

    let nowTime = JSON.stringify(new Date()).slice(1, 11)
    let nTime = new Date()
    return (
        <div style={{margin: '50px'}}>
            <div style={{display:'flex', height:'90px'}} >
                <div style={{width:"20%", border:'1px solid', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'20px'}}><span>PLMS</span></div>
                <div style={{width:"60%", border:'1px solid'}}>
                    <div style={{width:"100%", height:'60px', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'30px'}}>PUNCH LIST</div>
                    <div style={{width:"100%", height:'30px', borderTop:'1px solid', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'17px'}}>Opend</div>
                </div>
                <div style={{width:"20%", border:'1px solid', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'15px'}}>{props.downDetailData.projectID}</div>
            </div>
            <div style={{display:'flex', height:'180px', border:'1px solid', marginTop:'7px'}}>
                <div style={{width:"50%", justifyContent:'left', marginLeft:'3px',}}>
                    <span>Punch ID : {props.downDetailData.punchID}</span> <br />
                    <span>Category : {props.downDetailData.category}</span> <br />
                    <span>Discipline : {props.downDetailData.discipline}</span> <br />
                    <span>Drawing No : {props.downDetailData.drawingNo}</span> <br />
                    <span>System : {props.downDetailData.systemID}</span> <br />
                    <span>Subsystem : {props.downDetailData.subsystem}</span> <br />
                </div>
                <div style={{width:"50%", justifyContent:'left', marginLeft:'3px',}}>
                    <span>Unit : {props.downDetailData.unit}</span> <br />
                    <span>Area : {props.downDetailData.area}</span> <br />
                    <span>Department : {props.downDetailData.department}</span> <br />
                    <span>Tag Number : {props.downDetailData.tagNumber}</span> <br />
                </div>
            </div>
            <div style={{display:'flex', height:'180px', border:'1px solid', marginTop:'7px'}}>
                <div style={{width:"50%", justifyContent:'left', marginLeft:'3px',}}>
                    <span>Issued Date : {props.downDetailData.issuedDate}</span> <br />
                    <span>Issued By : {props.downDetailData.issuedBy}</span> <br />
                    <span>Completed Date : {props.downDetailData.completedDate}</span> <br />
                    <span>Completed By : {props.downDetailData.completedBy}</span> <br />
                    <span>Design Change Requested : {props.downDetailData.designChgReq}</span> <br />
                </div>
                <div style={{width:"50%", justifyContent:'left', marginLeft:'3px',}}>
                    <span>Confiremed Date: {props.downDetailData.confiremedDate}</span> <br />
                    <span>Confirmed By : {props.downDetailData.confirmedBy}</span> <br />
                    <span>Closed Date : {props.downDetailData.closedDate}</span> <br />
                    <span>Closed By : {props.downDetailData.closedBy}</span> <br />
                    <span>Material Requested : {props.downDetailData.materialReq}</span> <br />
                </div>
            </div>
            <div style={{display:'flex', height:'280px', border:'1px solid', marginTop:'7px'}}>
                <div style={{width:"50%", borderRight:'1px solid'}}>
                    <div style={{width:"100%", height:'30px', display:'flex', justifyContent:'center', alignItems:'center'}}>Issued</div>
                    <div style={{width:"100%", height:'190px', borderTop:'1px solid', display:'flex', justifyContent:'center', alignItems:'center'}}>Opend</div>
                    <div style={{width:"100%", height:'60px', borderTop:'1px solid', display:'flex', justifyContent:'left', paddingLeft:'4px', alignItems:'center'}}>Description 
                    : {props.downDetailData.issueDescription}
                    
                    </div>
                </div>
                <div style={{width:"50%"}}>
                    <div style={{width:"100%", height:'30px', display:'flex', justifyContent:'center', alignItems:'center'}}>Completed</div>
                    <div style={{width:"100%", height:'190px', borderTop:'1px solid', display:'flex', justifyContent:'center', alignItems:'center'}}>Opend</div>
                    <div style={{width:"100%", height:'60px', borderTop:'1px solid', display:'flex', justifyContent:'left', paddingLeft:'4px', alignItems:'center'}}>Description
                    : {props.downDetailData.completeComment}
                    </div>
                </div>
            </div>
            <div style={{display:'flex', height:'210px', border:'1px solid', marginTop:'7px'}}>
                <div style={{width:"50%"}}>
                    <div style={{width:"100%", height:'30px', display:'flex', justifyContent:'left', marginLeft:'3px', alignItems:'center'}}>Drawing</div>
                    <div style={{width:"100%", height:'180px', borderRight:'1px solid',  borderTop:'1px solid', display:'flex', justifyContent:'center', alignItems:'center'}}>Opend</div>
                </div>
                <div style={{width:"50%"}}>
                    <div style={{width:"100%", height:'30px', display:'flex', justifyContent:'center', alignItems:'center'}}></div>
                    <div style={{width:"100%", height:'180px', borderTop:'1px solid', display:'flex', justifyContent:'center', alignItems:'center'}}>Opend</div>
                </div>
            </div>

            <div style={{display:'flex', height:'45px', marginTop:'7px', justifyContent:'right', alignItems:'center'}}>
                printed date : {nowTime}
            </div>
        </div>
    )
}


export default ComponentToPrint;