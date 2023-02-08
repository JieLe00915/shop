import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd'; // or 'antd/dist/antd.less'
//导入store仓库
import store from './store/store';
import { Provider } from 'react-redux';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}  >
    <App />
    </Provider>
    
  </BrowserRouter>
);

