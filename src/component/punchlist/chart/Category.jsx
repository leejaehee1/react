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



// https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Pie/React/Light/
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

export default function Category(props) {

    // const { data } = useGetList('list', );
    const targetData = props.allData


    const a = Object.values(targetData).filter(da => da.category==="A").length;
    const b = Object.values(targetData).filter(da => da.category==="B").length;
    const c = Object.values(targetData).filter(da => da.category==="C").length;
    const d = Object.values(targetData).filter(da => da.category==="D").length;



    const pieData = [
        { argument: "A", value: a },
        { argument: "B", value: b },
        { argument: "C", value: c },
        { argument: "D", value: d },
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