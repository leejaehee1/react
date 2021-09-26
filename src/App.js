import React from 'react';
import { Admin, Resource, fetchUtils, ListGuesser } from 'react-admin';


// import AppRouter from './component/router/RouterComponent';
// import { BrowserRouter} from 'react-router-dom';
import Layout from './component/layout/LayoutComponent';
import { PostList } from './posts';
import PunchListComponent from './component/punchlist/PunchListComponent';
import ManagementTamplate from './component/management/ManagementTamplate';
import AuthProvider from './component/authentication/AuthProvider';
import LoginPage from './component/authentication/component/LoginPage';
// import SignUpPage from './component/authentication/component/SignUpPage';
import customRoutes from './customRoutes';
import Punchs from './component/punchlist/Punchs';
// import simpleRestProvider from 'ra-data-simple-rest';
import dataProvider from './component/router/dataProvider';
import CodeTamplate from './component/code/CodeTamplate';
import Project from './component/code/codeComponent/Project';
import Status from './component/code/codeComponent/Status';
import Discipline from './component/code/codeComponent/Discipline';
import Category from './component/code/codeComponent/Category';
import Department from './component/code/codeComponent/Department';
import System from './component/code/codeComponent/System';
import Subsystem from './component/code/codeComponent/Subsystem';
import UserCode from './component/code/codeComponent/UserCode';
import Unit from './component/code/codeComponent/Unit';
import Area from './component/code/codeComponent/Area';
import Drawing from './component/code/codeComponent/Drawing';
// import { TestAuthority } from './TestAuthority';




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
      
      
      // dataProvider={dataProvider} 
      dataProvider={dataProvider}
      authProvider={AuthProvider}
      layout={Layout}
      dashboard={PunchListComponent}


      customRoutes={customRoutes}
    >
      <Resource name="posts" list={PostList} />
      <Resource name="list" list={Punchs} />
      <Resource name="admin" list={ManagementTamplate} />
      <Resource name="code" list={CodeTamplate} />

       {/* code page */}
      <Resource name="authority" list={ListGuesser} />
      <Resource name="project" list={Project} />
      <Resource name="status" list={Status} />
      <Resource name="discipline" list={Discipline} />
      <Resource name="category" list={Category} />
      <Resource name="department" list={Department} />
      <Resource name="systems" list={System} />
      <Resource name="subsystem" list={Subsystem} />
      <Resource name="usercode" list={UserCode} />
      <Resource name="unit" list={Unit} />
      <Resource name="area" list={Area} />
      <Resource name="drawing" list={Drawing} />


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
