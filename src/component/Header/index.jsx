import React, { useState, useEffect } from "react";
import {
  UserOutlined,
  ShoppingCartOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { NavLink, Link } from "react-router-dom";
import { Input, Button, Space, message } from "antd";
import "./index.scss";
import logoimg from "../../images/logo.webp";
const { Search } = Input;
const Header = () => {
  // 关闭加载
  const [loadings, setLoadings] = useState([]);
  const [user, setUser] = useState("");
  //获取本地用户
  // @ts-ignore
  const users = JSON.parse(window.localStorage.getItem("shopUser"));
  useEffect(() => {
    if (users) {
      setUser(users.username);
    }
  }, [users]);
  console.log(user);
  // 搜索
  function onSearch(value) {
    console.log(value);
  }

  // 退出登录
  const enterLoading = (index) => {
    // @ts-ignore
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      // @ts-ignore
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        // 清空本地
        // @ts-ignore
        window.localStorage.clear("shopUser");
        setUser("");
        message.success("退出登录！");
        return newLoadings;
      });
    }, 2000);
  };
  return (
    <div className="Header">
      <div className="log-bar">
        <img src={logoimg} alt="" width={190} height={42} />
      </div>
      <div className="nav-td">
        <ul>
          <li>
            <NavLink
              to={"/home"}
              className={({ isActive }) =>
                isActive ? " peiqi" : "list-group-item"
              }
            >
              首页 <span>/ HOME</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/shopping"}
              className={({ isActive }) =>
                isActive ? " peiqi" : "list-group-item"
              }
            >
              商城 <span>/ SHOP</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? " peiqi" : "list-group-item"
              }
            >
              关于 <span>/ ABOUT</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/news"}
              className={({ isActive }) =>
                isActive ? " peiqi" : "list-group-item"
              }
            >
              新闻 <span>/ NEWS</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/connet"}
              className={({ isActive }) =>
                isActive ? " peiqi" : "list-group-item"
              }
            >
              联系 <span>/ CONNET</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-left">
        <Search
          className="seach"
          placeholder="请输入商品名称"
          allowClear
          // enterButton="Search"
          size="middle"
          onSearch={onSearch}
        />
        <div className="nav-icon">
          <ShoppingCartOutlined style={{ color: "red", fontSize: "25px" }} />
          <Link to={"/login"}>
            <UserOutlined style={{ color: "red", fontSize: "25px" }} />
          </Link>
        </div>
      </div>
      <div className="admin">
        <p>{user}</p>

        <Space>
          <Button
            type="default"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => enterLoading(2)}
          />
        </Space>
      </div>
    </div>
  );
};

export default Header;
