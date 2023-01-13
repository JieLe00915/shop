import React from 'react';
import { UserOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import "./index.scss"
const { Search } = Input;
const Header = () => {

  function onSearch(value) {
    console.log(value);
  }
  return (
    <div className='Header'>
      <div className='log-bar'>
        <img src="" alt="" width={190} height={42} />
      </div>
      <div className='nav-td'>
        <ul>
          {/* <li><a href="">ss</a></li>
          <li><a href="">sss</a></li>
          <li><a href="">asd</a></li>
          <li><a href="">sda</a></li>
          <li><a href="">sdas</a></li> */}
          </ul>

      </div>
      <div className='nav-left'>
        <Search
          className='seach'
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
        />
        <div className='nav-icon'>
        <ShoppingCartOutlined style={{ color: 'red', fontSize: '25px' }} />
        <UserOutlined style={{ color: 'red', fontSize: '25px' }}/>
        </div>
    
      </div>
    </div>
  );
}

export default Header;
