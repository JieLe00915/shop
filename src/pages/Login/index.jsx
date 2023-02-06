import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input,Popover } from "antd";
import {
  QqOutlined
} from '@ant-design/icons';

import news1 from "../../images/news2.webp";
import loginbg from "../../images/loginbg.webp";

const Login = () => {
  const navigate=useNavigate()
  const content = (
    <div>
      <img src={ news1} alt="" width={70} height={ 70} />
    </div>
  );
  const onFinish = (values) => {
    console.log("Success:", values);
    const personObj = {
      username: values.username,
      password: values.password
    }
   console.log(personObj, 11);
   navigate(-1)
   window.localStorage.setItem('shopUser',JSON.stringify(personObj));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
