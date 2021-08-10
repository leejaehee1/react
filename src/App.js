import React from 'react';
import NavCss from './component/navbar/NavCss';
import AppRouter from './component/router/RouterComponent';
import { BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavCss />
      <BrowserRouter>
        <AppRouter />
     </BrowserRouter> 
    </div>
  );
}

export default App;
