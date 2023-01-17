
import {useRoutes,Outlet} from 'react-router-dom'
import router from './router'
import { Button } from 'antd';
import Header from './component/Header'
import Buttom from './component/Buttom'
import React from 'react';
function App() {
  const Elements=useRoutes(router)
  return (
    <div className="App">
      <Header></Header>
     {Elements}
      <Outlet></Outlet>
      {/* <div></div> */}
      {/* <div style={{height:'500px'}}></div> */}
      <Buttom></Buttom>
    </div>
  );
}

export default App;
