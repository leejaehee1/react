import PieChart, {
    Series,
    Tooltip,
    // Title,
    // Subtitle,
    Legend,
    AdaptiveLayout,
} from 'devextreme-react/pie-chart';
 
const fruits = [
    { fruit: 'Apples', count: 10 },
    { fruit: 'Oranges', count: 12 },
    { fruit: 'Lemons', count: 15 },
    { fruit: 'Pears', count: 20 },
    { fruit: 'Pineapples', count: 3 }
];

// function onLegendClick(e) {
//     console.log(e.points)
// }


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

export default function Category() {
    return (
        <PieChart 
            dataSource={fruits}
        >
            <Series argumentField="fruit" valueField="count" />
            <Tooltip enabled={true} />
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