import * as React from "react";
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
//   Title,
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
            // width={100}
            height={200}
            >   
                {/* 가로축 */}
                <ArgumentAxis />
                {/* 세로축   */}
                <ValueAxis />
            
                <BarSeries valueField="value" argumentField="argument" />
                {/* <Title text="Studies per day"/> */}
            </Chart>
        </Paper>
    )
}

export default Discipline;