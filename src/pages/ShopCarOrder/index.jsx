import React from "react";
import "./index.scss";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteShop } from "../../store/reducers/shopcar";
import { Space, Table, Button } from "antd";

const ShopCarOrder = () => {
  // redux
  const shopObj = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const resPrice = shopObj.reduce((total, ele, index) => {
    return total + ele.count * ele.price;
  }, 0);
  const columns = [
    {
      title: "名称",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "商品编号",
      dataIndex: "cid",
      key: "cid",
    },
    {
      title: "价格",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "数量",
      key: "count",
      dataIndex: "count",
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              dispatch(deleteShop(record));
            }}
          >
            删除
          </a>
        </Space>
      ),
    },
  ];
  return (
    <div className="shoporder">
      <div className="header">
        <div className="left">
          <Table columns={columns} dataSource={shopObj} />
        </div>
        <div className="right">
          <div>购物车总计 </div>
          <p>
            购物车小计 <span>¥ { resPrice}</span>
          </p>
          <p style={{ borderBottom: "3px solid #ccc" }}>
            订单总计 <span>¥ {resPrice}</span>
          </p>
          <Link to={'/'}>
          <Button
            type="primary"
            style={{ width: "370px", marginTop: "10px", height: "40px" }}
          >
            前往收银台
          </Button>
            </Link>
       
        </div>
      </div>
    </div>
  );
};

export default ShopCarOrder;
