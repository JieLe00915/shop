import React from "react";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import "./index.scss";
import logoimg from "../../images/logo.webp";
const { Search } = Input;
const Header = () => {
  function onSearch(value) {
    console.log(value);
  }
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
          <UserOutlined style={{ color: "red", fontSize: "25px" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
