
import React from "react";
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




// API : https://devexpress.github.io/devextreme-reactive/react/chart/docs/reference/pie-series/
const PunchStatus = () => {
    
  const { data, ids, loading, error } = useGetList('list', );
  
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
        asdfasdfasdf
        {/* {punchID} */}
        <ul>
            {ids.map(id =>
                <li key={id}>{data[id].status}</li>
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