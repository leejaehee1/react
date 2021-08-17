import React from 'react';
import { Admin, Resource } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';

import NavCss from './component/navbar/NavCss';
import AppRouter from './component/router/RouterComponent';
import { BrowserRouter} from 'react-router-dom';
import Layout from './component/layout/LayoutComponent';
import { PostList } from './posts';

const dataProvider = fakeDataProvider({
  posts: [
      { 
        ProjectID : 100,
        PunchID : "PC-2-00-MB-MBP-E-01-001",
        Category : "C",
        System : "DFED",
        Subsystem : "DFFD",
        Discipline : "A",
        Status : "R",
        Unit : "abcdefe",
        Area : "Algeria RDPP",
        TagNumber : "tag number",
        BulkItem : "1",
        BulkName : "bulk description",
        Department : "ASB",
        TargetDate : "2017-12-24",
        IssuedDate : "2017-11-30",
        IssuedBy : "2017-11-30",
        RaisedBy : "changhyun",
        CompletedDate : "2017-12-24",
        CompletedBy : "king",
        ConfirmedDate: "2017-12-24",
        ConfirmedBy : "John",
        ClosedDate : "2017-12-24",
        Closedby : "hyun.kang",
        ScheduleDate : "2017-12-24",
        FinishDate : "2017-12-24",
        DesignChgReq : 1,
        MeterialReq : 0,
        IssueDesp : "Le bouchon (stoppeur) du bornler est corrodé 00MBP00GS001 Panneau POP",
        CompleteDesp : "asdifhnenfjwqknqwkjnfeqjklfnq",
        Difficulty : 3,
        ScheduleImpact : 4,
        CostImpact : 5,
        DrawingID : "AI99",
        AWPcode : "UEBK28"
       },
       {
        ProjectID : 100,
        PunchID : "PC-2-00-MB-MBP-E-01-001",
        Category : "C",
        System : "DFED",
        Subsystem : "DFFD",
        Discipline : "A",
        Status : "R",
        Unit : "abcdefe",
        Area : "Algeria RDPP",
        TagNumber : "tag number",
        BulkItem : "1",
        BulkName : "bulk description",
        Department : "ASB",
        TargetDate : "2017-12-24",
        IssuedDate : "2017-11-30",
        IssuedBy : "2017-11-30",
        RaisedBy : "changhyun",
        CompletedDate : "2017-12-24",
        CompletedBy : "king",
        ConfirmedDate: "2017-12-24",
        ConfirmedBy : "John",
        ClosedDate : "2017-12-24",
        Closedby : "hyun.kang",
        ScheduleDate : "2017-12-24",
        FinishDate : "2017-12-24",
        DesignChgReq : 1,
        MeterialReq : 0,
        IssueDesp : "Le bouchon (stoppeur) du bornler est corrodé 00MBP00GS001 Panneau POP",
        CompleteDesp : "asdifhnenfjwqknqwkjnfeqjklfnq",
        Difficulty : 3,
        ScheduleImpact : 4,
        CostImpact : 5,
        DrawingID : "AI99",
        AWPcode : "UEBK28"
       },
      // { id: 1, title: 'FooBar' },
  ],
  dashboard: [
      {
        Open : 30,
        Complete : 10,
        RequestedForClose : 40,
        Close : 15,
        Pending : 5,
        Piping : 2,
        Mechanical : 3,
        Electric : 15,
        Instrument : 3,
        Civil : 2,
        Architecture : 7,
        Structure : 3,
        Process : 30,
        Admin: 20,
        QC : 10,
        A : 46,
        B : 24,
        C : 17,
        D : 13,
        StatusIssuePrevious : 100,
        StatusIssueToday : 10,
        StatusClosePrevious : 60,
        StatusCloseToday : 20, 
        RemainPrevios : 100,
        RemainToday : 20,
        TrackingTrend : 5,
        TrackingSchedule : "가능",
      },
  ],
})

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      layout={Layout}
    >
      <Resource name="posts" list={PostList} />
      {/* <NavCss /> */}
      {/* <BrowserRouter>
        <AppRouter />
     </BrowserRouter>  */}
    </Admin>
  );
}

export default App;
