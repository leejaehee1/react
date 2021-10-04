import PieChart, {
  Series,
  Tooltip,
  // Title,
  // Subtitle,
  Type,
  Size,
  Legend,
  AdaptiveLayout,
} from 'devextreme-react/pie-chart';

import React, { useEffect } from 'react';

import { useGetList } from 'react-admin';

function pointClickHandler(e) {
  toggleVisibility(e.target);
}

function legendClickHandler(e) {
  let arg = e.target;
  let item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];
  toggleVisibility(item);
}

function toggleVisibility(item) {
  item.isVisible() ? item.hide() : item.show();
}


const PunchStatus = (props) => {
  // const [toCharts, setToCharts] = useState([])
  // const { data, ids, loading, error } = useGetList('list', );
  // const targetData = data
  // const [targetData, setTargetData] = React.useState([])
  // useEffect(()=> {
  //   setTargetData(props.allData)
  // }, [props])

  // if (loading) { return <Loading />; }
  // if (loading) { return <p>Loading...</p>; }
  // if (error) { return <p>ERROR</p>; }
  const targetData = props.allData

  const a = Object.values(targetData).filter(da => da.status==="2").length;
  const b = Object.values(targetData).filter(da => da.status==="3").length;
  const c = Object.values(targetData).filter(da => da.status==="4").length;
  const d = Object.values(targetData).filter(da => da.status==="5").length;
  const e = Object.values(targetData).filter(da => da.status==="6").length;

  

  const pieData = [
    { argument: "opened", value: a },
    { argument: "Ready for Review", value: b },
    { argument: "requested for close", value: c },
    { argument: "not accepted", value: d },
    { argument: "closed", value: e },
  ];

  const abcc = () => {
    return (
      <>
        <text textAnchor="middle" x="100" y="120" style={{ fontSize: 12, fill:'#494949', fontWeight:'bold' }}>
          Punch Status
        </text>
    </>
    )
  }
  
  return (
    <PieChart 
            dataSource={pieData}
            type="doughnut"
            innerRadius={0.85}
            centerRender={abcc}
            palette="Pastel" // https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Palette/React/Light/
        >
            <Series 
                argumentField="argument" 
                valueField="value" 
            />
            <Tooltip enabled={true} />
            {/* <Type /> */}
            <Size
                    height={150}
                    // width={250}
                />
            <Legend
                    orientation="vertical"
                    // center/right/left
                    horizontalAlignment="right" 
                    // top/bottom
                    verticalAlignment="top"
                    
                    // columnItemSpacing={20}
                    // rowItemSpacing={30}


                    onPointClick={pointClickHandler}
                    onLegendClick={legendClickHandler}
                />
            <AdaptiveLayout
                    // height={10}
                    // width={50}
            />
        </PieChart>
  );
}
  

export default PunchStatus;