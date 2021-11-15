import { useGetList } from 'react-admin';

import { Chart, Series,Grid, Title, Margin, Size, Legend, ArgumentAxis, Label, ValueAxis, CommonAxisSettings, Tooltip, CommonSeriesSettings, SeriesTemplate  } from 'devextreme-react/chart';

// boardData={boardData.length?boardData:boardAllData} 
// boardIds={boardIndexData.length?boardIndexData:allIndex} 

const Discipline = (props) => {
  // // console.log(props.boardData[props.boardIds[0]])

  // for(var i of props.boardIds) {
  //   // console.log(i)
  // }


  const targetData = props.allData

  const pipingNum = Object.values(targetData).filter(da => da.discipline==="1" && da.status !== '1' && da.projectID===window.localStorage.getItem('projectName')).length;
  const mechnincalNum = Object.values(targetData).filter(da => da.discipline==="2" && da.status !== '1' && da.projectID===window.localStorage.getItem('projectName')).length;
  const electricNum = Object.values(targetData).filter(da => da.discipline==="3" && da.status !== '1' && da.projectID===window.localStorage.getItem('projectName')).length;
  const instrumentNum = Object.values(targetData).filter(da => da.discipline==="4" && da.status !== '1' && da.projectID===window.localStorage.getItem('projectName')).length;
  const civilNum = Object.values(targetData).filter(da => da.discipline==="5" && da.status !== '1' && da.projectID===window.localStorage.getItem('projectName')).length;
  const architectureNum = Object.values(targetData).filter(da => da.discipline==="6" && da.status !== '1' && da.projectID===window.localStorage.getItem('projectName')).length;
  const structureNum = Object.values(targetData).filter(da => da.discipline==="7" && da.status !== '1' && da.projectID===window.localStorage.getItem('projectName')).length;
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
      <div style={{display:'flex'}}>
        <div>
          <text style={{ fontSize: 12, height:'145px', paddingRight:'10px', fill:'#494949', fontWeight:'bold', display:'flex', justifyContent:'center', alignItems:'center' }}>
            Discipline
          </text>
        </div>
        <Chart 
          id ="barChart"
          dataSource={barData}
          // palette="Soft"
          palette="Pastel"
          >
        <CommonSeriesSettings
          argumentField="argument"
          valueField="value"
          type="bar"
          // barPadding={9}
          />
        {/* <Series
          argumentField="argument"
          valueField="value"
          // name="count"
          // ignoreEmptyPoints={true}
          type="bar"
          // color="#ffaa66" 
        /> */}
        {/* <Tooltip enabled={true} /> */}
        <ArgumentAxis>
            <Label 
              displayMode="stagger"
              
              staggeringSpacing={-3}
             />
          </ArgumentAxis>
          {/* <ValueAxis pane="bottomPane">
            <Grid visible={true} />
            <Title text="Discipline" style={{ fontSize: 12, fill:'#494949', fontWeight:'bold' }} />
          </ValueAxis> */}
        <SeriesTemplate nameField="argument" />
        <Margin
                          // top={20}
                          // bottom={20}
                          // left={40}
                          right={50}
                      />
        <Size
            height={160}
            width={370}
        />
        <CommonAxisSettings  
          // tickInterval={3}
        >
            {/* <Label 
              format="decimal" 
              staggeringSpacing={1}
              displayMode="stagger"
            /> */}
            {/* <Label
                          rotationAngle={-20}
                          overlappingBehavior="rotate"
                          visible={true}
            /> */}
        </CommonAxisSettings >

        <Legend
            visible={false}
          />
      </Chart>
      </div>
    )
}

export default Discipline;