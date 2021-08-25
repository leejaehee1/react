import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
// import simpleRestProvider from 'ra-data-simple-rest';


import NavCss from './component/navbar/NavCss';
import AppRouter from './component/router/RouterComponent';
import { BrowserRouter} from 'react-router-dom';
import Layout from './component/layout/LayoutComponent';
import { PostList } from './posts';
import PunchListComponent from './component/punchlist/PunchListComponent';
import ManagementTamplate from './component/management/ManagementTamplate';
import AuthProvider from './component/authentication/AuthProvider';
import LoginPage from './component/authentication/component/LoginPage';
import SignUpPage from './component/authentication/component/SignUpPage';
import customRoutes from './customRoutes';
import { Punchs } from './component/punchlist/Punchs';


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
  list : [
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



/*
    To use the credentials when calling a data provider, you have to tweak, 
    this time, the dataProvider function. As explained in the Data providers documentation, 
    simpleRestProvider and jsonServerProvider take an httpClient as second parameter. 
    That’s the place where you can change request headers, cookies, etc.

    For instance, to pass the token obtained during login as an Authorization header, 
    configure the Data Provider as follows:
*/

// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//       options.headers = new Headers({ Accept: 'application/json' });
//   }
//   const token = localStorage.getItem('token');
//   options.headers.set('Authorization', `Bearer ${token}`);
//   return fetchUtils.fetchJson(url, options);
// }
// const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);



function App() {
  return (
    <Admin
      // 다국어
      // locale="en" i18nProvider={i18nProvider}
      
      loginPage={LoginPage}
      
      
      dataProvider={dataProvider} authProvider={AuthProvider}
      layout={Layout}
      dashboard={PunchListComponent}


      customRoutes={customRoutes}
    >
      <Resource name="posts" list={PostList} />
      <Resource name="list" list={Punchs} />
      <Resource name="admin" list={ManagementTamplate} />
      {/* <Resource name="SignUpPage" {...SignUpPage}  /> */}

      {/* <Resource name="register" list={SignUpPage} /> */}
      {/* <NavCss />
      <BrowserRouter>
        <AppRouter />
     </BrowserRouter>  */}
    </Admin>
  );
}

export default App;
