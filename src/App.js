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
      { id: 0, title: 'Hello, world!' },
      { id: 1, title: 'FooBar' },
  ],
  comments: [
      { id: 0, post_id: 0, author: 'John Doe', body: 'Sensational!' },
      { id: 1, post_id: 0, author: 'Jane Doe', body: 'I agree' },
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
