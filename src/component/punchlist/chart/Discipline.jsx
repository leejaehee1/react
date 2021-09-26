import { useGetList } from 'react-admin';

import { Chart, Series, Size, Legend, ArgumentAxis, Label, ValueAxis, CommonAxisSettings, Tooltip  } from 'devextreme-react/chart';


const Discipline = (props) => {
  const targetData = props.allData

  const pipingNum = Object.values(targetData).filter(da => da.discipline==="1").length;
  const mechnincalNum = Object.values(targetData).filter(da => da.discipline==="2").length;
  const electricNum = Object.values(targetData).filter(da => da.discipline==="3").length;
  const instrumentNum = Object.values(targetData).filter(da => da.discipline==="4").length;
  const civilNum = Object.values(targetData).filter(da => da.discipline==="5").length;
  const architectureNum = Object.values(targetData).filter(da => da.discipline==="6").length;
  const structureNum = Object.values(targetData).filter(da => da.discipline==="7").length;
  const barData = [
      { argument: 'Piping', value: pipingNum },
      { argument: 'Mechnincal', value: mechnincalNum },
      { argument: 'Electric', value: electricNum },
      { argument: 'Instrument', value: instrumentNum },
      { argument: 'Civil', value: civilNum },
      { argument: 'Architecture', value: architectureNum },
      { argument: 'Structure', value: structureNum },
    ];
    return (
      <Chart dataSource={barData}>
      <Series
        argumentField="argument"
        valueField="value"
        // name="count"
        type="bar"
        color="#ffaa66" 
      />
      <Tooltip enabled={true} />

      <Size
          height={160}
          // width={250}
      />
      <CommonAxisSettings  
        tickInterval={3}
      >
          {/* <Label 
            format="decimal" 
            staggeringSpacing={1}
            displayMode="stagger"
          /> */}
          <Label
                        rotationAngle={-20}
                        overlappingBehavior="rotate"
          />
      </CommonAxisSettings >

      <Legend
          visible={false}
        />
    </Chart>
    )
}

export default Discipline;