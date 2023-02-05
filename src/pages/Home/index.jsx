// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./index.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { Carousel, Popover, Card } from "antd";
import home1 from "../../images/home-1.webp";
import home2 from "../../images/home-2.webp";
import home3 from "../../images/home-3.webp";
import home4 from "../../images/home-4.webp";
import home5 from "../../images/home-5.webp";
import hoLb1 from "../../images/hoLb1.webp";
import hoLb2 from "../../images/hoLb2.webp";
import hoLb3 from "../../images/hoLb3.webp";
import bgho from "../../images/bg-ho.webp";
import ftHo from "../../images/ft-ho.webp";
import ftHo1 from "../../images/ft-ho1.webp";
import ftHo2 from "../../images/ft-ho2.webp";

const { Meta } = Card;
export default function Home() {
  const [addDatas, setAddDatas] = useState([]);

  useEffect(() => {
    // @ts-ignore
    setAddDatas(resgoods);
  }, []);
  const resgoods = [
    {
      id: 34,
      title: "椅子",
      price: 34134,
      src: "http://localhost:3000/static/media/hoLb1.e700a08430757a29ed1a.webp",
    },
    {
      id: 34,
      title: "椅子",
      price: 34134,
      src: "http://localhost:3000/static/media/hoLb1.e700a08430757a29ed1a.webp",
    },
    {
      id: 34,
      title: "椅子",
      price: 34134,
      src: "http://localhost:3000/static/media/hoLb1.e700a08430757a29ed1a.webp",
    },
    {
      id: 34,
      title: "椅子",
      price: 34134,
      src: "http://localhost:3000/static/media/hoLb1.e700a08430757a29ed1a.webp",
    },
    {
      id: 34,
      title: "椅子",
      price: 34134,
      src: "http://localhost:3000/static/media/hoLb1.e700a08430757a29ed1a.webp",
    },
    {
      id: 34,
      title: "椅子",
      price: 34134,
      src: "http://localhost:3000/static/media/hoLb1.e700a08430757a29ed1a.webp",
    },
    {
      id: 34,
      title: "椅子",
      price: 34134,
      src: "http://localhost:3000/static/media/hoLb1.e700a08430757a29ed1a.webp",
    },

    {
      id: 34,
      title: "椅子",
      price: 34134,
      src: "http://localhost:3000/static/media/hoLb1.e700a08430757a29ed1a.webp",
    },
  ];
  return (
    <div className="homeHeader">
      <div className="header">
        <ul>
          <li style={{ width: "945px", height: "647px" }}>
            <Carousel autoplay>
              <div>
                <img src={hoLb1} alt="1" height={647}/>
              </div>
              <div>
                <img src={hoLb2} alt="1" height={647}/>
              </div>
              <div>
                <img src={hoLb3} alt="1" height={647}/>
              </div>
            </Carousel>
          </li>
          <li style={{ height: "647px" }}>
            <Popover placement="top" title="商品名称" content={<>灯具</>}>
              <img src={home1} alt="1" />
            </Popover>
          </li>
          <li style={{ height: "647px" }}>
            <Popover placement="top" title="商品名称" content={<>椅子</>}>
              <img src={home2} alt="1" />
            </Popover>
          </li>
          <li style={{ height: "487px" ,width:"467px"}}>
            <Popover placement="top" title="商品名称" content={<>装饰品</>}>
              <img src={home3} alt="1" />
            </Popover>
          </li>
          <li style={{ height: "487px",width:"467px" }}>
            <Popover placement="top" title="商品名称" content={<>电视柜</>}>
              <img src={home4} alt="1" />
            </Popover>
          </li>
          <li style={{ width: "938px", height: "487px" }}>
            <Popover placement="top" title="商品名称" content={<>沙发</>}>
              <img src={home5} alt="1" />
            </Popover>
          </li>
        </ul>
      </div>
      <div className="second-home">
        <div className="secContent">
          <h1>NEW ARRIVAL</h1>
          <div>新品上市</div>
          <p>Well done, Shenzhen Ouya Xuan furniture, raw materials </p>
          <p>
            elegant, beautiful and durable, with quality heart steered Well
            done,{" "}
          </p>
          <p>
            Shenzhen Ouya Xuan furniture, raw materials elegant, beautiful and
          </p>
        </div>
      </div>
      <div className="three-home">
        {addDatas.map((ele, index) => {
          return (
            <Card
              key={index}
              hoverable
              style={{ width: 282, height: 344 }}
              cover={<img alt="example" src={ele.src} height={282} />}
            >
              <Meta title={ele.title} description={"¥ " + ele.price} />
            </Card>
          );
        })}
      </div>
      <div className="fourbg-home">
        <div className="fourImg">
          <img src={bgho} alt="" width={564} />
        </div>
        <div className="fourContent">
          <div className="title">
            <p>ST-E80 简约椅子</p>
            <p style={{ fontSize: "36px" }}>￥559</p>
          </div>
          <div className="content">
            <p>
              起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。
            </p>
          </div>

          <div className="size">
            <p style={{ fontSize: "20px" }}>尺寸：</p>
            <p style={{ fontSize: "14px" }}>长63cm x 宽64cm x 高72cm</p>
          </div>
          <div className="size">
            <p style={{ fontSize: "20px" }}>产品材质：</p>
            <p style={{ fontSize: "14px" }}>
              棉麻，硬杂木，橡胶木，高弹海棉，白杨夹板
            </p>
          </div>
          <Button
            type="primary"
            shape="round"
            size="large"
            style={{ marginTop: "30px" }}
          >
            立即购买
          </Button>
        </div>
      </div>
      <div className="fixBgHome">
        <div className="modalBox"></div>
        <div className="fixBgCotent">
          <div className="second-home">
            <div className="secContent">
              <h1>OUR NEWS</h1>
              <div>公司动态</div>
              <p>Well done, Shenzhen Ouya Xuan furniture, raw materials </p>
              <p>
                elegant, beautiful and durable, with quality heart steered Well
                done,
              </p>
              <p>
                Shenzhen Ouya Xuan furniture, raw materials elegant, beautiful
                and
              </p>
            </div>
          </div>
          <div className="fgFooter">
            <ul>
              <li>
                <Link
                  to={"/interior"}
                  state={{ title: "如何选择室内装饰画", url: '/static/media/ft-ho1.6d54d8a915ab5ace3858.webp' }}
                >
                  <img src={ftHo} alt="1" />
                  <div>如何选择室内装饰画</div>
                  <p>如果你对一个程序员说：你的代码有bug。</p>
                  <p>他的第一反应是：</p>
                  <div style={{ fontSize: "12px" }}>MORE → </div>
                </Link>
              </li>
              <li>
                <Link
                  to={"/interior"}
                  state={{
                    title: "说到墙面装饰，你一定会想起来的照片墙",
                    url: '/static/media/ft-ho1.6d54d8a915ab5ace3858.webp',
                  }}
                >
                  <img src={ftHo1} alt="1" />
                  <div>说到墙面装饰，你一定会想起来的照片墙</div>
                  <p>
                    面试官：你是专业设计师是吧，那你说说我身上这件衣服的色值多少？
                  </p>
                  <p>求职者：…… </p>
                  <div style={{ fontSize: "12px" }}>MORE → </div>
                </Link>
              </li>
              <li>
                <Link
                  to={"/interior"}
                  state={{
                    title: "现代星级酒店设计的动态变化趋势",
                    url: '/static/media/ft-ho2.8c7551ea7a246287156a.webp',
                  }}
                >
                  <img src={ftHo2} alt="1" />
                  <div>现代星级酒店设计的动态变化趋势</div>
                  <p>
                    前阵子，公司一个人遇到个记者，记者问他："看您身板硬朗、精神
                  </p>
                  <p>矍铄，请问您养生秘诀是什么？"</p>
                  <div style={{ fontSize: "12px" }}>MORE → </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
