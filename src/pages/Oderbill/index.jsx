import React from "react";
import "./index.scss";
import Address from "./address";
import {useNavigate} from 'react-router-dom';
import { Radio, Button, Form, Input,message } from "antd";
import { useSelector } from "react-redux";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "输入不能为空!",
};
const Orderbill = () => {
  const navigate=useNavigate()
  // redux
  const shopObj = useSelector((state) => state.counter);
  const resPrice = shopObj.reduce((total, ele, index) => {
    return total + ele.count * ele.price;
  }, 0);
  // 表单
  const user = window.localStorage.getItem('etshopUser');
  const error = () => {
    message.error('请先登录您的账户！');
  };
  const onFinish = (values) => {
   
    if (user) {
      console.log(values);
    } else {
      error()
      navigate('/login')
    }
  };
  return (
    <div className="orderBill">
      <div className="content">
        <div className="left">
          <h2>账单地址</h2>
          <div className="addres">
            <p>省市区</p>
            <div>
              {" "}
              <Address />
            </div>
          </div>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            // @ts-ignore
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="姓名"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "tel"]}
              label="电话号码"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "address"]}
              label="详细地址"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name={["user", "desc"]}
              label="订单备注"
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit">
                提交并支付
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="right">
          <h2>订单详情</h2>
          <p style={{ borderBottom: "3px solid #ccc" }}>
            商品 <span>合计</span>
          </p>
          <ul className="rightUL">
            {shopObj.map((ele, index) => {
              return (
                <li key={index}>
                  <p>
                    {ele.title} x {ele.count}
                    <span> {ele.count * ele.price}</span>
                  </p>
                </li>
              );
            })}
          </ul>
          <p>
            订单小计<span>¥ {resPrice}</span>
          </p>
          <p style={{ borderBottom: "3px solid #ccc" }}>
            订单总计 <span>¥ {resPrice}</span>
          </p>
          <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={1}>银联支付(线下)</Radio>
            <br />
            <Radio value={2}>
              支付宝支付{" "}
              <img
                src="http://5c9dc87c09aae.t73.qifeiye.com/qfy-content/plugins/alipay-for-bitcommerce/images/alipay.png"
                alt=""
              />
            </Radio>
            <br />
            <Radio value={3}>
              微信支付{" "}
              <img
                src="http://5c9dc87c09aae.t73.qifeiye.com/qfy-content/plugins/wc-wechatpay/images/qfy_weixinpay_for_wc.png"
                alt=""
              />
            </Radio>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

export default Orderbill;
