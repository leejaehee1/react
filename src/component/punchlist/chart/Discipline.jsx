import * as React from "react";
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';



const Discipline = () => {
    const data = [
        { argument: 'Monday', value: 30 },
        { argument: 'Tuesday', value: 20 },
        { argument: 'Wednesday', value: 10 },
        { argument: 'Thursday', value: 50 },
        { argument: 'Friday', value: 60 },
      ];
    return (
        <Paper>
            <Chart
            data={data}
            >
            <ArgumentAxis />
            <ValueAxis />
        
            <BarSeries valueField="value" argumentField="argument" />
            </Chart>
        </Paper>
    )
}

export default Discipline;