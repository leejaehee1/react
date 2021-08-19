import PieChart, {
    Series,
    Tooltip,
    Title,
    Subtitle,
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
 
export default function Category() {
    return (
        <PieChart 
            dataSource={fruits}
            // title="I am the Title"
        >
            <Series argumentField="fruit" valueField="count" />
            <Tooltip enabled={true} />
            {/* <Title text="I am the Test">
                    <Subtitle text="I am the Subtitle" />
            </Title> */}
            <Legend
                    // center/right/left
                    horizontalAlignment="right" 
                    // top/bottom
                    verticalAlignment="top"
                />
            <AdaptiveLayout
                    height={10}
                    width={50}
                />
        </PieChart>
    );
}