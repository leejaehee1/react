import React from 'react';


const ComponentToPrint = () => {

    return (
        <div style={{margin: '50px'}}>
            <div style={{display:'flex', height:'90px'}} >
                <div style={{width:"30%", border:'1px solid', display:'flex', justifyContent:'center', alignItems:'center'}}>PLMS</div>
                <div style={{width:"60%", border:'1px solid'}}>
                    <div style={{width:"100%", height:'60px', display:'flex', justifyContent:'center', alignItems:'center'}}>PUNCH LIST</div>
                    <div style={{width:"100%", height:'30px', borderTop:'1px solid', display:'flex', justifyContent:'center', alignItems:'center'}}>Opend</div>
                </div>
                <div style={{width:"20%", border:'1px solid', display:'flex', justifyContent:'center', alignItems:'center'}}>Project Name</div>
            </div>
            <div style={{display:'flex', height:'180px', border:'1px solid', marginTop:'7px'}}>
                <div style={{width:"50%", justifyContent:'left', marginLeft:'3px',}}>
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                </div>
                <div style={{width:"50%", justifyContent:'left', marginLeft:'3px',}}>
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                </div>
            </div>
            <div style={{display:'flex', height:'180px', border:'1px solid', marginTop:'7px'}}>
                <div style={{width:"50%", justifyContent:'left', marginLeft:'3px',}}>
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                </div>
                <div style={{width:"50%", justifyContent:'left', marginLeft:'3px',}}>
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                    <span>aaaaaaaaaa</span> <br />
                </div>
            </div>
            <div style={{display:'flex', height:'280px', border:'1px solid', marginTop:'7px'}}>
                <div style={{width:"50%", borderRight:'1px solid'}}>
                    <div style={{width:"100%", height:'30px', display:'flex', justifyContent:'center', alignItems:'center'}}>Issued</div>
                    <div style={{width:"100%", height:'190px', borderTop:'1px solid', display:'flex', justifyContent:'center', alignItems:'center'}}>Opend</div>
                    <div style={{width:"100%", height:'60px', borderTop:'1px solid', display:'flex', justifyContent:'left', paddingLeft:'4px', alignItems:'center'}}>Description</div>
                </div>
                <div style={{width:"50%"}}>
                    <div style={{width:"100%", height:'30px', display:'flex', justifyContent:'center', alignItems:'center'}}>Completed</div>
                    <div style={{width:"100%", height:'190px', borderTop:'1px solid', display:'flex', justifyContent:'center', alignItems:'center'}}>Opend</div>
                    <div style={{width:"100%", height:'60px', borderTop:'1px solid', display:'flex', justifyContent:'left', paddingLeft:'4px', alignItems:'center'}}>Description</div>
                </div>
            </div>
            <div style={{display:'flex', height:'180px', border:'1px solid', marginTop:'7px'}}>
                <div style={{width:"50%"}}>
                    <div style={{width:"100%", height:'20px', display:'flex', justifyContent:'left', marginLeft:'3px', alignItems:'center'}}>Drawing</div>
                    <div style={{width:"100%", height:'160px', borderRight:'1px solid',  borderTop:'1px solid', display:'flex', justifyContent:'center', alignItems:'center'}}>Opend</div>
                </div>
                <div style={{width:"50%"}}>
                    <div style={{width:"100%", height:'20px', display:'flex', justifyContent:'center', alignItems:'center'}}></div>
                    <div style={{width:"100%", height:'160px', borderTop:'1px solid', display:'flex', justifyContent:'center', alignItems:'center'}}>Opend</div>
                </div>
            </div>

            <div style={{display:'flex', height:'40px', marginTop:'7px', justifyContent:'right', alignItems:'center'}}>
                printed date : 0000.00.00
            </div>
        </div>
    )
}


export default ComponentToPrint;