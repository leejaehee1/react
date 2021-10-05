import React, {useState, useRef} from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


// style
import './styles/detailselector.css'

// static
import excelIcon from './static/excel-icon.png'
import pdfIcon from './static/pdf-icon.png'
import ComponentToPrint from './detailpages/ViewDrawingButtonPrint';

function rand() {
  return Math.round(Math.random() * 20) - 10;
  // return 0
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


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
  const [modalStyle] = React.useState(getModalStyle);
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
        >
            {/* {body} */}
            <div style={modalStyle} className="page">
                <div ref={componentRef} style={{
                                            margin: '-5px' ,
                                            borderTop: '1px solid', 
                                            borderRight: '1px solid', 
                                            borderLeft: '1px solid'
                                            // border: '1px solid'
                                            }}>
                    <ComponentToPrint />
                </div>
                <hr style={{
                  marginTop: '-50px', 
                  // border: '0.1px solid',
                  marginLeft: '-5px',
                  marginRight: '-5px',
                  }} />
                <br />
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handlePrint}>Print</Button>
            </div>
        </Modal>


        <button className="excelIcon" style={{backgroundImage: `url(${excelIcon})`}}>
          <p>excel</p>
        </button>
      </div>
    </div>
  )
}

export default DetailSelector;