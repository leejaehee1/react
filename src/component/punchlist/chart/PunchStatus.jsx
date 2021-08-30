
import React from "react";
import { useState, useEffect, useReducer } from 'react';

import Paper from '@material-ui/core/Paper';
import {
  Legend,
  Chart,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui';
import {
  Animation,
  EventTracker,
  HoverState
} from "@devexpress/dx-react-chart";

import { useGetOne, useGetList, SimpleList, useGetIdentity, useGetMany } from 'react-admin';
import { func } from "prop-types";
import { number } from "ra-language-french/node_modules/ra-core";




// function countStatus(num) {
//   switch (parseInt(num)) {
//     case 2:
//       setOpened(opened+1)
//       console.log("------------------")
//       console.log(opened)
//       break;
//     case 3:
//       setReadyForReview(readyForReview+1)
//       console.log("----------------------------------")
//       break;
//     case 4:
//       setRequestedForClose(requestedForClose+1)
//       console.log("---------------------------------------------")
//       break;
//     case 5:
//       setNotAccepted(notAccepted+1)
//       console.log("---------------------------------------------------------")
//       break;
//     case 6:
//       setClosed(closed+1)
//       console.log("-----------------------------------------------------------------------")
//       // console.log('Mangoes and papayas are $2.79 a pound.');
//       // expected output: "Mangoes and papayas are $2.79 a pound."
//       break;
    // default:
    //   console.log(`Sorry, we are out of ${data[id].status}.`);
    //   break;
//   }
// }


// API : https://devexpress.github.io/devextreme-reactive/react/chart/docs/reference/pie-series/

// function AddCC() {
//   const [opened, setOpened] = useState(0);
//   const [readyForReview, setReadyForReview] = useState(0);
//   const [requestedForClose, setRequestedForClose] = useState(0);
//   const [notAccepted, setNotAccepted] = useState(0);
//   const [closed, setClosed] = useState(0)
  
//   // console.log(opened, readyForReview, requestedForClose, notAccepted, closed)
//   const { data, ids, loading, error } = useGetList('list', );
//   console.log("addCC 들어옴")
  
//   useEffect((
    
//     ) =>{
//   for (const id in data) {
//     // addCC()
//     console.log(parseInt(data[id].status))
//     // countStatus(parseInt(data[id].status))
//     switch (parseInt(data[id].status)) {
//       case 2:
//         setOpened(opened => opened+1)
//         console.log("------------------")
//         break;
//       case 3:
//         setReadyForReview(readyForReview+1)
//         console.log("----------------------------------")
//         break;
//       case 4:
//         setRequestedForClose(requestedForClose+1)
//         console.log("---------------------------------------------")
//         break;
//       case 5:
//         setNotAccepted(notAccepted+1)
//         console.log("---------------------------------------------------------")
//         break;
//       case 6:
//         setClosed(closed+1)
//         console.log("-----------------------------------------------------------------------")
//         break;
//       default:
//         console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
//         break;
//       }
//     }}
//     , [])
//   return (
//     <>
//       <p>{opened}</p>
//       <p>{readyForReview}</p>
//       <p>{requestedForClose}</p>
//       <p>{notAccepted}</p>
//       <p>{closed}</p>
//     </>
//   )
// }






const PunchStatus = () => {
  const [toCharts, setToCharts] = useState([])
  const { data, ids, loading, error } = useGetList('list', );
  const targetData = data


  const a = Object.values(targetData).filter(da => da.status==="2").length;
  const b = Object.values(targetData).filter(da => da.status==="3").length;
  const c = Object.values(targetData).filter(da => da.status==="4").length;
  const d = Object.values(targetData).filter(da => da.status==="5").length;
  const e = Object.values(targetData).filter(da => da.status==="6").length;

  
  
  useEffect(() => {
    // ActionLogic()
    // console.log('마운트 될 때만 실행됩니다.');
  }, [data]);


  const pieData = [
    { argument: "opened", value: a },
    { argument: "Ready for Review", value: b },
    { argument: "requested for close", value: c },
    { argument: "not accepted", value: d },
    { argument: "closed", value: e },
  ];
  
  return (
    <Paper>

      <Chart
        data={pieData}
      //   width={100}
        height={220}
        rotated={true}
      >
        <Legend 
          // https://docs.devexpress.com/CoreLibraries/DevExpress.XtraCharts.Legend.Font
        />

        <PieSeries 
          valueField="value" 
          argumentField="argument" 
          innerRadius={0.3}
          outerRadius={0.8} 
          />
          <EventTracker />
          <HoverState />
          <Animation />
        {/* <Title text="Studies per day"/> */}
      </Chart>
      
    </Paper>
  );
}
  

export default PunchStatus;