
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

// API : https://devexpress.github.io/devextreme-reactive/react/chart/docs/reference/pie-series/
  
const PunchStatus = () => {
  
const data = [ 
  { argument:'Monday', value:10 },
  { argument:'Tuesday', value:40 },
  { argument:'Wednesday', value:10 },
  { argument:'Thursday', value:20 },
  { argument:'Friday', value:20 },
];
return (
    <Paper>
    <Chart
      data={data}
    //   width={100}
      // height={200}
    //   rotated={true}
    >
      <Legend 
        rowItemSpacing={50}
        horizontalAlignment="center"
        // https://docs.devexpress.com/CoreLibraries/DevExpress.XtraCharts.Legend.Font
      />
      {/* <Label
            visible={true}
            position="columns"
            customizeText={customizeText}>
            <Font size={16} />
            <Connector visible={true} width={0.5} />
          </Label> */}
      <PieSeries 
        valueField="value" 
        argumentField="argument" 
        innerRadius={0.6}
        // outerRadius={1} 
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