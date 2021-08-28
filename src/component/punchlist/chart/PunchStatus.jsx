
import React from "react";
import { useState, useEffect } from 'react';

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
//     default:
//       console.log(`Sorry, we are out of ${data[id].status}.`);
//       break;
//   }
// }


// API : https://devexpress.github.io/devextreme-reactive/react/chart/docs/reference/pie-series/
const PunchStatus = () => {
  
  const [opened, setOpened] = useState(0);
  const [readyForReview, setReadyForReview] = useState(0);
  const [requestedForClose, setRequestedForClose] = useState(0);
  const [notAccepted, setNotAccepted] = useState(0);
  const [closed, setClosed] = useState(0)
  
  // console.log(opened, readyForReview, requestedForClose, notAccepted, closed)
  const { data, ids, loading, error } = useGetList('list', );
  
  
  function addCC() {
    setOpened(opened+1)
  }

  function countStatus(num) {
    if (num===2) {
      addCC()
    }
    addCC()
    switch (num) {
      case 2:
        // setOpened(opened+1)
        addCC()
        console.log("------------------")
        // console.log(opened)
        break;
      case 3:
        // console.log(readyForReview);
        setReadyForReview(readyForReview+1)
        // console.log(readyForReview);
        console.log("----------------------------------")
        break;
      case 4:
        setRequestedForClose(requestedForClose+1)
        console.log("---------------------------------------------")
        break;
      case 5:
        setNotAccepted(notAccepted+1)
        console.log("---------------------------------------------------------")
        break;
      case 6:
        setClosed(closed+1)
        console.log("-----------------------------------------------------------------------")
        // console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      default:
        // console.log(`Sorry, we are out of ${data[id].status}.`);
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        break;
    }
  }

  useEffect(() => {
    console.log("useEffectuseEffectuseEffectuseEffectuseEffectuseEffectuseEffectuseEffectuseEffectuseEffectuseEffect")
    for (const id in data) {
      // addCC()
      console.log(parseInt(data[id].status))
      // console.log(opened, readyForReview, requestedForClose, notAccepted, closed)
      // countStatus(parseInt(data[id].status))
      // console.log(opened, readyForReview, requestedForClose, notAccepted, closed)
      // setOpened(opened+1)
      // console.log(opened, readyForReview, requestedForClose, notAccepted, closed)

      console.log('!!!!!!!!!ㅐㅑㄷㅂㄷㅂㅈㄱㅈㄷㅂㄱㅂㅈㄷㄱㅂㅈㄷㄱㅂㅈㄷㄱㅈㅂㄷㄱㅂㅈㄷㄱㅂㅈㄷㄱ')

      if (parseInt(data[id].status)===2) {
        addCC()
        console.log('먹히니 안먹히니')

      }
      // countStatus(data[id].status)
    }  
  }, [])
  // console.log(opened)
  // console.log(readyForReview)
  // console.log(requestedForClose)
  // console.log(notAccepted)
  // console.log(closed)

  
  // console.log(ids, data)
  console.log("---------------------------------------------------------------")
  // for (const id in data) {
  //   console.log(`${data[id].status}`)
  //   countStatus(data[id].status)
  // }
  // console.log(Object.keys(data).length)
  // console.log(typeof(data))
  // console.log(data.length)
  // const { data : punchID, loading, error } = useGetMany(
                                                          // 'list', );


  // const data = [ 
  //   { argument:'Monday', value:10 },
  //   { argument:'Tuesday', value:40 },
  //   { argument:'Wednesday', value:10 },
  //   { argument:'Thursday', value:20 },
  //   { argument:'Friday', value:20 },
  // ];
  return (
    <Paper>
      <p>{opened}</p>
      <p>{readyForReview}</p>
      <p>{requestedForClose}</p>
      <p>{notAccepted}</p>
      <p>{closed}</p>
        asdfasdfasdf
        {/* {punchID} */}
          <button onClick={addCC}>buttttttooooon</button>
        <ul>
            {ids.map(id =>
                <li key={id}>
                  {/* {setOpened(opened+1)}, */}
                  {data[id].status}
                </li>
            )}
        </ul>
      {/* <Chart
        data={data}
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
          outerRadius={0.6} 
          />
          <EventTracker />
          <HoverState />
          <Animation /> */}
        {/* <Title text="Studies per day"/> */}
      {/* </Chart> */}
      
    </Paper>
  );
}
  
export default PunchStatus;