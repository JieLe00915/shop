import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./index.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addShop, deleteShop } from "../../store/reducers/shopcar";
import { Breadcrumb, Button, InputNumber, Drawer, Tabs } from "antd";
import Magnifier from "./magnifier";
import shopcar from "../../images/shopcar.webp";
import Comment from "./Comment";
const ShopCar = () => {
  const location = useLocation();
  const { title, src, desc, price, cid, category } = location.state;
  // redux
  const shopObj = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const resPrice = shopObj.reduce((total, ele, index) => {
    return total + ele.count * ele.price;
  }, 0);
  const [count, setCount] = useState(1);
  // 抽屉
  const [open, setOpen] = useState(false);
  // 数量
  const onChange = (value) => {
    console.log("changed", value);
    setCount(value);
  };
  // 抽屉
  const showDrawer = () => {
    dispatch(
      addShop({
        title: title,
        price: price,
        src: src,
        count: count,
        cid: cid,
        key:Math.random() *1234
      })
    );
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // tab
  const tabChange = (key) => {
    console.log(999, key);
  };
  // 删除购物车商品
  function deleteshop(ele) {
    return () => {
      console.log(111, ele);
      // @ts-ignore
      dispatch(deleteShop({cid:ele.cid}))

      }
  }
  return (
    <div className="shopcar">
      <div className="header">
        
        <div>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item href="/shopping">商城</Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className="body">
        <div className="magnifier">
          <Magnifier imgUrl={src} />
        </div>
        <div className="content">
          <h1>{title}</h1>
          <div className="line"></div>
          <div className="price">¥ {price}</div>
          <p>是否拆洗：否</p>
          <p>产品品牌：JIe Sen</p>
          <p>产品编号：{cid}</p>
          <p>产品分类：{category}</p>
          <p style={{ marginBottom: "30px" }}>产品描述：{desc}</p>
          <Button type="primary" onClick={showDrawer}>
            加入购物车
          </Button>
          <InputNumber
            className="addnum"
            min={1}
            max={999}
            defaultValue={1}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="footer">
        <Tabs
          className="tabFont"
          defaultActiveKey="1"
          onChange={tabChange}
          items={[
            {
              label: `描述`,
              key: "1",
              children: (
                <div className="tabparams">
                  <img src={shopcar} alt="bg" />
                </div>
              ),
            },
            {
              label: `其他信息`,
              key: "2",
              children: (
                <>
                  <div className="tabsize">
                    <div>尺寸</div>
                    <p>S, L, M</p>
                  </div>
                </>
              ),
            },
            {
              label: `用户评论`,
              key: "3",
              children: (
                <>
                  <Comment />
                </>
              ),
            },
          ]}
        />
      </div>
      <Drawer title="购物车" placement="right" onClose={onClose} open={open}>
        <ul
          className="shopUl"
          style={{
            width: "100%",
            marginBottom: "10px",
          }}
        >
          {shopObj.map((ele, index) => {
            return (
              <li
                key={index}
                style={{
                  width: "260px",
                  height: "88px",
                  padding: "15px 0",
                  borderBottom: "1px solid #cecece",
                  display: "flex",
                }}
              >
                <img
                  src={ele.src}
                  alt="bg"
                  style={{ width: "86px", height: "57px" }}
                />
                <div
                  style={{
                    width: "173px",
                    color: "#777",
                    fontSize: "14px",
                    paddingLeft: "20px",
                    position:'relative'
                  }}
                >
                  <p>{ele.title}</p>
                  <button
                    style={{
                      position: 'absolute',
                      right: '0',
                      top: '0',
                    }}
                    // @ts-ignore
                    onClick={deleteshop(ele)}
                  >
                    x
                  </button>
                  <p>
                    {ele.count} x ¥{ele.price}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <div
          style={{
            fontSize: "15px",
            textAlign: "center",
            marginBottom: "15px",
          }}
        >
          小计¥ {resPrice}
        </div>
        <div style={{ width: "114px", margin: "0 auto" }}>
          <Link to={"/shopcarorder"}>
            <Button
              type="primary"
              shape="round"
              size={"large"}
              style={{ marginBottom: "10px", width: "120px" }}
            >
              查看购物车
            </Button>
          </Link>

          <Link to={"/shopcarorder"}>
            <Button
              type="primary"
              shape="round"
              size={"large"}
              style={{ marginBottom: "10px", width: "120px" }}
            >
              立即结算
            </Button>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default ShopCar;
