import PieChart, {
    Series,
    Tooltip,
    // Title,
    // Subtitle,
    Type,
    Size,
    Legend,
    AdaptiveLayout,
    Margin,
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

    const a = Object.values(targetData).filter(da => da.category==="A" && da.status !== '1' && da.projectID===window.localStorage.getItem('projectName')).length;
    const b = Object.values(targetData).filter(da => da.category==="B" && da.status !== '1'  && da.projectID===window.localStorage.getItem('projectName')).length;
    const c = Object.values(targetData).filter(da => da.category==="C" && da.status !== '1' && da.projectID===window.localStorage.getItem('projectName')).length;
    const d = Object.values(targetData).filter(da => da.category==="D" && da.status !== '1' && da.projectID===window.localStorage.getItem('projectName')).length;
    const allDataLength = a+b+c+d;

    let target = {"A":parseInt(a/allDataLength*100), 
                "B":parseInt(b/allDataLength*100), 
                "C":parseInt(c/allDataLength*100), 
                "D":parseInt(d/allDataLength*100)
                }



    const pieData = [
        { argument: "A", value: a },
        { argument: "B", value: b },
        { argument: "C", value: c },
        { argument: "D", value: d },
    ];
    const abcc = () => {
        return (
          <>
            <text textAnchor="middle" x="100" y="120" style={{ fontSize: 12, fill:'#494949', fontWeight:'bold' }}>
              Category
            </text>
        </>
        )
    }

    const customizeText =(arg) => {
        // return `${JSON.stringify(arg)}  a`
        console.log(arg)
        return `${arg.pointName} (${target[arg.pointName]}%)`;
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
            <Margin
                          // top={20}
                          // bottom={20}
                          left={40}
                          right={30}
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
                    customizeText={(arg)=>customizeText(arg)}
                    // columnItemSpacing={20}
                    // rowItemSpacing={30}


                    onPointClick={pointClickHandler}
                    onLegendClick={legendClickHandler}
            >
                <Margin
                  top={30}
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
    );
}