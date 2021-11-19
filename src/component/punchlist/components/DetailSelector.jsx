import React, {useState, useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
// import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


// excel export 
import { CSVLink
  // , CSVDownload 
} from "react-csv";

// style
import './styles/detailselector.css'

// static
import excelIcon from './static/excel-icon.png'
import pdfIcon from './static/pdf-icon.png'
import ComponentToPrint from './detailpages/ViewDrawingButtonPrint';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
//   // return 0
// }

// function getModalStyle() {
//   const top = 20 + rand();
//   const left = 30 + rand();

//   return {
//     // top: `${top}%`,
//     top: '50%',
//     // left: `${left}%`,
//     left: '50%',
//     // transform: `translate(-${top}%, -${left}%)`,
//   };
// }


function DetailSelector(props) {
  const [issueState, setIssueState] = useState(false)
  const [historyState, setHistoryState] = useState(true)
  
  const changeIssueState = () => {
    setIssueState(false)
    setHistoryState(true)
    props.setIssueShow(true)
    props.setHistoryShow(false)
  }

  const changeHistoryState = () => {
    setIssueState(true)
    setHistoryState(false)
    props.setIssueShow(false)
    props.setHistoryShow(true)
  }

  // print
  // const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
  });
  
  
  let excelData = Object.values(props?.boardData)
  let fData = Object.keys(excelData[0]?excelData[0]:[])

  // // console.log(excelData[0].projectID)
  // // console.log(fData)
  let headerData = []
  for(var i of fData){
    if(i!=='id'){
    // // console.log(i)
    var sData = {label:i, key:i}
    headerData.push(sData)
    }
  }
  // // console.log(headerData)
  function getFormatDate(date){
      var year = date.getFullYear();              //yyyy
      var month = (1 + date.getMonth());          //M
      month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
      var day = date.getDate();                   //d
      day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
      return  year + '' + month + '' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
  }
  var nameDate = new Date();
  nameDate = getFormatDate(nameDate);
  // // console.log(date)
  return (
    <div style={{display:'flex'}}>
      {issueState?
      <button className="beforeIssue" onClick={changeIssueState}>
        <p className="title" style={{fontSize:'15px'}}>Issue</p>
      </button>
      :
      <button className="afterIssue">
        <p className="title" style={{fontSize:'15px'}}>Issue</p>
      </button>
      }
      {historyState?
      <button className="beforeHistory" onClick={changeHistoryState}>
        <p className="title" style={{fontSize:'15px'}}>History</p>
      </button>
      :
      <button className="afterHistory">
        <p className="title" style={{fontSize:'15px'}}>History</p>
      </button>
      }
      <div className="files" style={{marginLeft: '-5px', marginRight: '-20px'}}>
        
        <button className="pdfIcon" onClick={handleOpen} style={{backgroundImage: `url(${pdfIcon})`}}>
          <p>pdf</p>
        </button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            // style={{border: "30px solid #ECECEC", }}
        >
            {/* {body} */}
            <div 
            style={{ 
               overflow:'auto',
              //  maxHeight:'500px',
              // width: '30px',
              //  transform: 'scale(1) translate(100%,0%)',
              position: 'fixed',    
              top: '50px',   
              // bottom: '2000px',
              left: '50%',
              transform: 'translate(-50%)',
            // modalStyle
              // transform: 'scale(1) translate(100%,0%)',
              maxHeight: '600px',
              overflow:'auto',
              }} className="page">
                <div ref={componentRef} style={{
                                            margin: '-5px' ,
                                            borderTop: '1px solid', 
                                            borderRight: '1px solid', 
                                            borderLeft: '1px solid',
                                            // border: '1px solid'
                                            }}>
                    <ComponentToPrint downDetailData={props.downDetailData}  />
                </div>
                <hr style={{
                  marginTop: '-50px', 
                  // border: '0.1px solid',
                  marginLeft: '-5px',
                  marginRight: '-5px',
                  }} />
                <Button className="printClose" variant="outlined" onClick={handleClose}>Close</Button>
                <Button className="printPrint" variant="outlined" onClick={handlePrint}>Print</Button>
            </div>
        </Modal>


        <CSVLink 
          headers={headerData} 
          // data={data} 
          data={excelData} 
          filename={`${excelData[0]?.projectID}_${nameDate}.csv`}
          target="_blank"
        >
        <button className="excelIcon" style={{backgroundImage: `url(${excelIcon})`}}>
          <p>excel</p>
        </button>
        </CSVLink>
      </div>
    </div>
  )
}

export default React.memo(DetailSelector);