import React from "react";

import { Button } from "antd";
import "./index.scss";
import aboutLeft from "../../images/about.webp";
import aboutR from "../../images/aboutR.webp";
export default function About() {
  return (
    <div className="About">
      <div className="header">
        <div className="contentLeft">
          <div className="content">
            <div className="headerTitle">INTERIOR DESIGN</div>
            <div>设计与品质缺一不可</div>
            <div>致热爱生活的你</div>
            <p>
              不同于其它假响应式品牌，起飞页采用的是真正的响应式引擎。您只需对网站资料进行一次性输入，网站即可根据访问者的设备智能地呈现出完美效果，全程无需人工干预。设备包括但不限于：计算机、Pad、微信、手机和电视。
            </p>
            <Button type="primary" shape="round" size="large">
              查看商品
            </Button>
          </div>
        </div>
        <img src={aboutLeft} alt="about" width={748} height={332} />
      </div>
      <div className="second-home">
        <div className="secContent">
          <h1>OUR TEAM</h1>
          <div>我们的团队</div>
          <p>
            Well done, Shenzhen Ouya Xuan furniture, raw materials elegant,{" "}
          </p>
          <p>
            beautiful and durable, with quality heart steered Well done,
            Shenzhen
          </p>
          <p>Ouya Xuan furniture, raw materials elegant, beautiful and</p>
        </div>
      </div>
      <div className="aboutFooter">
        <ul>
          <li>
            <div>
              <img src={aboutR} alt="" height={250} />
            </div>
            <div className="abTitle">
              团队成员 <span>CEO</span>
            </div>
            <p>
              我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。
            </p>
          </li>
          <li>
            <div>
              <img src={aboutR} alt="" height={250} />
            </div>
            <div className="abTitle">
              团队成员 <span>产品总监</span>
            </div>
            <p>
              我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。
            </p>
          </li>
          <li>
            <div>
              <img src={aboutR} alt="" height={250} />
            </div>
            <div className="abTitle">
              团队成员 <span>高级设计师</span>
            </div>
            <p>
              我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。
            </p>
          </li>
          <li>
            <div>
              <img src={aboutR} alt="" height={250} />
            </div>
            <div className="abTitle">
              团队成员 <span>设计师</span>
            </div>
            <p>
              我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
