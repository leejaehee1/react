import PieChart, {
  Series,
  // Tooltip,
  // Title,
  // Subtitle,
  // Type,
  Size,
  Legend,
  AdaptiveLayout,
  Margin,
} from 'devextreme-react/pie-chart';

import React from 'react';

// import { useGetList } from 'react-admin';

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


  // const boardAllData = data;
  //   const allIndex = ids.filter(id=> (data[id].status !== '1' && data[id].projectID===window.localStorage.getItem('projectName')));

  const a = Object.values(targetData).filter(da => (da.status==="2" && da.projectID===window.localStorage.getItem('projectName'))).length;
  const b = Object.values(targetData).filter(da => (da.status==="3" && da.projectID===window.localStorage.getItem('projectName'))).length;
  const c = Object.values(targetData).filter(da => (da.status==="4" && da.projectID===window.localStorage.getItem('projectName'))).length;
  const d = Object.values(targetData).filter(da => (da.status==="5" && da.projectID===window.localStorage.getItem('projectName'))).length;
  const e = Object.values(targetData).filter(da => (da.status==="6" && da.projectID===window.localStorage.getItem('projectName'))).length;
  const allDataLength = a+b+c+d+e;
  let target = {"opened":parseInt(a/allDataLength*100), 
              "Ready for Review":parseInt(b/allDataLength*100), 
              "requested for close":parseInt(c/allDataLength*100), 
              "not accepted":parseInt(d/allDataLength*100), 
              "closed":parseInt(e/allDataLength*100)}

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

  const customizeText =(arg) => {
    // return `${JSON.stringify(arg)}  a`
    // // console.log(arg)
    return `${arg.pointName} (${target[arg.pointName]}%)`;
  }
  
  return (
    <>
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
              
              {/* <Tooltip enabled={true} /> */}
              {/* <Type /> */}
              <Size
                      height={150}
                      // width={250}
                  />
              <Margin
                  // top={20}
                  // bottom={20}
                  left={10}
                  right={-10}
              />

              
              {/* // https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/legend/#customizeText
              // custom text Legend */}
              <Legend
                      orientation="vertical"
                      // center/right/left
                      horizontalAlignment="right" 
                      // top/bottom
                      verticalAlignment="top"
                      customizeText={(arg)=>customizeText(arg)}
                      // columnItemSpacing={20}
                      // rowItemSpacing={30}

                      onPointClick={pointClickHandler}
                      onLegendClick={legendClickHandler}
              >
                <Margin
                  top={20}
                  // bottom={20}
                  // left={60}
                  // right={30}
              />
              </Legend>
              <AdaptiveLayout
                      // height={10}
                      // width={50}
              />
          </PieChart>
    </>
  );
}
  

export default React.memo(PunchStatus);