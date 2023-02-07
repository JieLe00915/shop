import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import "./index.scss";
import { Breadcrumb ,Button,InputNumber,Drawer} from "antd";
import Magnifier from './magnifier';
const ShopCar = () => {
  const location = useLocation();
  const { title, src, desc, price, cid ,category} = location.state;
  // 抽屉
  const [open, setOpen] = useState(false);
  
  console.log(11, location);
   // 数量
  const onChange = (value) => {
    console.log('changed', value);
  };
  // 抽屉
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="shopcar">
      <div className="header">
        <div>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item href="/news">装饰</Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className="body">
        <div className="magnifier">
          <Magnifier imgUrl={ src} />
        </div>
        <div className="content">
          <h1>{title}</h1>
          <div className="line"></div>
          <div className="price">¥ {price}</div>
          <p>是否拆洗：否</p>
          <p>产品品牌：JIe Sen</p>
          <p>产品编号：{cid}</p>
          <p>产品分类：{ category}</p>
          <p style={{marginBottom:'30px'}}>产品描述：{desc}</p>
          <Button type="primary" onClick={showDrawer}>加入购物车</Button>
          <InputNumber className="addnum" min={1} max={999} defaultValue={1} onChange={onChange} />
        </div>
      </div>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default ShopCar;
