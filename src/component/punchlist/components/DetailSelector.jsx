import React, {useState} from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

// style
import './styles/detailselector.css'

// static
import excelIcon from './static/excel-icon.png'
import pdfIcon from './static/pdf-icon.png'

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
  
  return (
    <div style={{display:'flex'}}>
      {issueState?
      <button className="beforeIssue" onClick={changeIssueState}>
        <p className="title">Issue</p>
      </button>
      :
      <button className="afterIssue">
        <p className="title">Issue</p>
      </button>
      }
      {historyState?
      <button className="beforeHistory" onClick={changeHistoryState}>
        <p className="title">History</p>
      </button>
      :
      <button className="afterHistory">
        <p className="title">History</p>
      </button>
      }
      <div className="files" style={{marginLeft: '5px', marginRight: '-20px'}}>
        
        <button className="pdfIcon" style={{backgroundImage: `url(${pdfIcon})`}}>
          <p>pdf</p>
        </button>
        <button className="excelIcon" style={{backgroundImage: `url(${excelIcon})`}}>
          <p>excel</p>
        </button>
      </div>
    </div>
  )
}

export default DetailSelector;