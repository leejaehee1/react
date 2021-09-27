import React, {useState} from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import './styles/detailselector.css'

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
    <div>
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
      <div className="files">
        {/* <button>
          <p>excel</p>
        </button>
        <button>
          <p>pdf</p>
        </button> */}
      </div>
    </div>
  )
}

export default DetailSelector;