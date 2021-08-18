import PieChart, {
    Series
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
        <PieChart dataSource={fruits}>
            <Series argumentField="fruit" valueField="count" />
        </PieChart>
    );
}