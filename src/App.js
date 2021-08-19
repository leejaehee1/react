import React from 'react';
import { Admin, Resource } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';

import NavCss from './component/navbar/NavCss';
import AppRouter from './component/router/RouterComponent';
import { BrowserRouter} from 'react-router-dom';
import Layout from './component/layout/LayoutComponent';
import { PostList } from './posts';
import PunchListComponent from './component/punchlist/PunchListComponent';
import ManagementTamplate from './component/management/ManagementTamplate';


// 다국어
// npm install node-polyglot
// https://marmelab.com/react-admin/doc/2.8/Translation.html
// import frenchMessages from 'ra-language-french';
// import englishMessages from 'ra-language-english';

// const messages = {
//   fr: frenchMessages,
//   en: englishMessages,
// }
// const i18nProvider = locale => messages[locale];

// ex_input format
// {
//   "posts": [
//       { "id": 0, "title": "Hello, world!" },
//       { "id": 1, "title": "FooBar" }
//   ],
//   "comments": [
//       { "id": 0, "post_id": 0, "author": "John Doe", "body": "Sensational!" },
//       { "id": 1, "post_id": 0, "author": "Jane Doe", "body": "I agree" }
//   ]
// }

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
      // 다국어
      // locale="en" i18nProvider={i18nProvider}
      authProvider={}
      
      dataProvider={dataProvider}
      layout={Layout}
      dashboard={PunchListComponent}
    >
      <Resource name="posts" list={PostList} />
      <Resource name="admin" list={ManagementTamplate} />
      {/* <NavCss />
      <BrowserRouter>
        <AppRouter />
     </BrowserRouter>  */}
    </Admin>
  );
}

export default App;
