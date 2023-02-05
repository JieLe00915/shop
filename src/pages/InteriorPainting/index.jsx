import React from 'react';
import { useLocation } from "react-router-dom";
import { Breadcrumb } from 'antd';
import "./index.scss"
const IteriorPainting = () => {
  const location = useLocation()
  const { title, url, data, content ,content1} = location.state
  return (
    <div className='interior'>
      <div className='header'>
        <div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item href="/news">新闻/NEWS</Breadcrumb.Item>
          <Breadcrumb.Item>{title}</Breadcrumb.Item>
        </Breadcrumb>
        </div>
   
      </div>
      <div className='body'>
        <div className='title'>{title}</div>
        <div className='data'>发布日期： {data}</div>
        <img src={url} alt="bg" />
        <p>{content}</p>
        <p>{content1}</p>
      </div>
    </div>
  );
}

export default IteriorPainting;
