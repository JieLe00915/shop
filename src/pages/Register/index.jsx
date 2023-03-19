import React from "react";
import "./index.scss";
import { Button, message, Form, Input, Popover } from "antd";
import { useNavigate } from "react-router-dom";
import {
  QqOutlined
} from '@ant-design/icons';

import news1 from "../../images/news2.webp";
import loginbg from "../../images/loginbg.webp";
import api from '../../api';
const Register = () => {
  const navigate=useNavigate()
  const content = (
    <div>
      <img src={ news1} alt="" width={70} height={ 70} />
    </div>
  );
  const onFinish = async(values) => {
    const res=await api.getregister({
      username: values.username,
      password: values.password,
      email:values.email
    })
    if (res.data.status ===200) {
      message
      .loading('正在注册中...', 2.5)
      .then(() => message.success('注册成功!', 2.5))
      .then(() => message.info('马上跳转到登录页面', 2.5))
      .then(()=>  navigate('/login'));
     ;
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // 注册成功
  const success = () => {
     
  };
  return (
    <div className="register">
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
                label="注册用户名"
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
                label="邮箱"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
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
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" className="btn" >
                马上注册
                </Button>

                <Button type="default" className="btn" onClick={() => {
                   navigate('/login');
                }}>
                  立即登录
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

export default Register;
