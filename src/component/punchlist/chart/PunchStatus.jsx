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


const PunchStatus = () => {
  // const [toCharts, setToCharts] = useState([])
  const { data } = useGetList('list', );
  const targetData = data


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
  
  return (
    <PieChart 
            dataSource={pieData}
            type="doughnut"
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