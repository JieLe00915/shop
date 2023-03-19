import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input,Popover ,message} from "antd";
import {
  QqOutlined
} from '@ant-design/icons';

import news1 from "../../images/news2.webp";
import qrcod from "../../images/qrcod.jpg";
import loginbg from "../../images/loginbg.webp";
import api from '../../api';
const Login = () => {
  const navigate=useNavigate()
  const content = (
    <div>
      <img src={ qrcod} alt="" width={70} height={ 70} />
    </div>
  );
  const onFinish = async(values) => {
    const personObj = {
      username: values.username,
      password: values.password
    }
    const res = await api.getLogin({
      username:personObj.username,
      password:personObj.password,
    })
    if (res.data.status===200) {
      navigate(-1)
   window.localStorage.setItem('shopUser',JSON.stringify(personObj));
    }else{
      message.error('您输入的账号密码错误，请重新输入！');
    }
   
  };
  const onFinishFailed = (errorInfo) => {
    message.error('您输入的账号密码错误，请重新输入！');
  };
  return (
    <div className="login">
      <div className="bg">
        <div className="content">
          <div className="contentLeft">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>记住密码</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" className="btn">
                  立即登陆
                </Button>

                <Button type="default" className="btn" onClick={() => {
                  navigate('/register');
                }}>
                  立即注册
                </Button>
                <div></div>
              </Form.Item>
            </Form>

            <div className="lg-three">
              <p>第三方登录</p>
            <Popover content={content}  className="popover">
            <QqOutlined />
            </Popover>
            </div>
          </div>
          <div className="contentRight">
            <img src={loginbg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
