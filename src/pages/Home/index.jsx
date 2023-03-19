// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./index.scss";
import { Button, Image } from "antd";
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
      id: 12,
      title: "ST 890",
      price: 34134,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9iNWM2MmFmYTU1YmM0YTY2MjllNDU4ZDZlZDMxYTkwOS02MDB4NjAwLTkwLndlYnA_p_p100_p_3D.webp",
      cid: 2132,
      desc: '对得起我佛起飞后啊十四大',
      category:'椅子'
    },
    {
      id: 31,
      title: "ST 283",
      price: 34134,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC8wYmJmOWU5N2U1ZTQxOTk1MjZhZGMwYzIzNzQ1MTRmMC02MDB4NjAwLTkwLndlYnA_p_p100_p_3D.webp",
      desc: '对得起我佛起飞后啊十四大',
      category:'椅子'
    },
    {
      id: 12,
      title: "SAU 788",
      price: 21312,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9hOWU5YTYwYWJmZDVlNGMwZjNiYmU1ODFiNThmNjliMS02MDB4NjAwLTkwLndlYnA_p_p100_p_3D.webp",
      desc: '对得起我佛起飞后啊十四大',
      category:'椅子',
      cid:213662
    },
    {
      id: 34,
      title: "SAT 341",
      price: 34543,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC8wYTM0YTU1MTE5N2U0YmYyOWJlNmY1ZDJkYmE5NmU4MC02MDB4NjAwLTkwLndlYnA_p_p100_p_3D.webp",
      cid: 2132,
      desc: '对得起我佛起飞后啊十四大',
      category:'椅子'
    },
    {
      id: 12,
      title: "BUJ 982",
      price: 34134,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC81Nzg3OGZmOWE0NzU3OTIyYmQ4YTExYzU0YTI4N2JiNi02MDB4NjAwLTkwLndlYnA_p_p100_p_3D.webp",
      cid: 2132,
      desc: '对得起我佛起飞后啊十四大',
      category:'椅子'
    },
    {
      id: 334,
      title: "UIJN 934",
      price: 8723,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9hNjFmODQ5NzlmOTA3ZDAwZTIyMWQ5NWFhNmJmNjg1MC02MDB4NjAwLTkwLndlYnA_p_p100_p_3D.webp",
      cid: 2132,
      desc: '对得起我佛起飞后啊十四大',
      category:'椅子'
    },
    {
      id: 34,
      title: "LIHN 987",
      price: 8976,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9mZWU5YzgwNDk5N2QxYTE0NGU3Y2ZmODQxZGVjMDRlNC02MDB4NjAwLTkwLndlYnA_p_p100_p_3D.webp",
      cid: 2132,
      desc: '对得起我佛起飞后啊十四大',
      category:'椅子'
    },

    {
      id: 34,
      title: "JKS 098",
      price: 6743,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9jMWM3ZTEzYmRlYjZhODMxYjVjNDllNTk5YjlhNDZiYi02MDB4NjAwLTkwLndlYnA_p_p100_p_3D.webp",
      cid: 2132,
      desc: '对得起我佛起飞后啊十四大',
      category:'椅子'
    },
  ];
  return (
    <div className="homeHeader">
      <div className="header">
        <ul>
          <li style={{ width: "930px", height: "647px" }}>
            <Carousel autoplay>
              <div>
                <img src={hoLb1} alt="1" height={647} />
              </div>
              <div>
                <img src={hoLb2} alt="1" height={647} />
              </div>
              <div>
                <img src={hoLb3} alt="1" height={647} />
              </div>
            </Carousel>
          </li>
          <li style={{ height: "645px" }}>
            <Popover placement="top" title="商品名称" content={<>灯具</>}>
              <Image  height={647}  src={home1} preview='ss'/>
            </Popover>
          </li>
          <li style={{ height: "647px" }}>
            <Popover placement="top" title="商品名称" content={<>椅子</>}>
            <Image  height={647}  src={home2}/>
            </Popover>
          </li>
          <li style={{ height: "487px", width: "467px" }}>
            <Popover placement="top" title="商品名称" content={<>装饰品</>}>
            <Image  height={487}  src={home3}/>
            </Popover>
          </li>
          <li style={{ height: "487px", width: "467px" }}>
            <Popover placement="top" title="商品名称" content={<>电视柜</>}>
            <Image  height={487}  src={home4}/>
            </Popover>
          </li>
          <li style={{ width: "925px", height: "487px" }}>
            <Popover placement="top" title="商品名称" content={<>沙发</>}>
              <Image height={487} src={home5} style={{zIndex:'-1299'}} />
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
                <Link  key={index}  to={"/shopcar"} state={{
              src: ele.src,
              cid: ele.cid,
              title: ele.title,
              desc: ele.desc,
              price: ele.price,
              category:ele.category,
            }}>
              <Card
             
              hoverable
              style={{ width: 282, height: 344 }}
              cover={<img alt="example" src={ele.src} height={282} />}
              
            >
              <Meta title={ele.title} description={"¥ " + ele.price} />
            </Card>
              </Link >
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
                  state={{
                    title: "如何选择室内装饰画",
                    url: "/static/media/ft-ho1.6d54d8a915ab5ace3858.webp",
                    data: "2019/ 04/15 14：25",
                    content:
                      "1.装饰画的“内容”选择装饰画的“内容”较多，大致有抽象、艺术，“增厚”空间内容、艺术感；动物，常会选择有某种寓意或与当地风俗相关的动物装饰画，比如大象装饰画被赋予了吉祥、如意、吸财等的寓意；人物，亦有漫画、肖像画、人物抽象画等之分，人物情绪会对空间“情绪”产生一定程度的影响；植物，清新、希望、休闲、生命力；风景、山水，神秘、大气磅礴、意境……几种，结合家庭成员喜好、想要营造的客厅效果、所在地区风俗等选择；",
                    content1:
                      "2.依据墙体尺寸 悬挂装饰画或是前方没有参照物，或是忽略参照物的存在，以装饰画可占用客厅区墙体，或当客厅与其它区域相连，并共用同面“不间断”墙体时，可占用的该“共用墙体”面积为参照，面积长度较大，单幅装饰画宽度或组合装饰画的“总宽度”是它的2/3左右较合适，面积长度较小，单幅装饰画宽度或组合装饰画的“总宽度”是它的0.8倍左右较合适，有较饱满的装饰感，对于“公用墙体”而言，还有将相连区域“合二为一”，扩大区域面积感的效果，但装饰画只占用客厅区墙体，且墙体前方有参照物的情况，会有一定的压迫感产生，考虑在内；",
                  }}
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
                    url: "/static/media/ft-ho1.6d54d8a915ab5ace3858.webp",
                    data: "2017/ 05/23 18：05",
                    content:
                      "1. 客厅照片墙客厅是居家生活中人们最常聚集的场所，也是一个家庭待客的地方。在客厅将自己喜欢的照片展示出来，既能勾起内心深处的回忆，营造出非常温馨的空间氛围，还能将自己的故事以图像方式讲述给客人。在客厅设置照片墙，常见的位置是沙发背景墙，也可以在两面墙的转角处设置，形成呼应效果。客厅照片墙除了可以选择沙发后面的位置。相框颜色保持与整体风格一致，效果会更加好看，也更加协调。",
                    content1:
                      "2. 餐厅照片墙照片墙用在餐厅空间也是常见的。一般来说，餐厅空间没有客厅那么大，因此可以根据空间的大小不同，选择单一大张照片，也可选用系列照片装饰。 照片除了常见的悬挂方式外，也可以做成支架进行摆放。墙面上的装饰和摆台上的装饰，可以丰富墙面的层次感，也是颇为美观的。台面的装饰照片除了可以选择悬挂的方式，还可以选择这种摆放的方式，墙面装饰和摆台上装饰相互呼应，使平面的墙体富有立体感。这样的装饰方式，马上能让立体感、空间感体现出来，效果会大不一样。在餐厅的一面墙上，可以没有特定规则，随意选取喜欢的照片贴上，也是一种往日重现的景象。照片的尺寸可以根据照片墙的空间自行调节，适当留白处理会让空间更加富有文艺气息。如果空间整体色调偏冷，那么适当选取一些暖色调的软装进行装饰也是不错的。",
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
                    url: "/static/media/ft-ho2.8c7551ea7a246287156a.webp",
                    data: "2019/ 04/15  9：52",
                    content:
                      " 1.总体概念的动态趋势是星级酒店设计从以前的标志性趋势到社会服务，空间设计从封闭趋势到开放，空间装饰风格从单一趋势到多样化，从只注重社会效益的趋势到更注重经济效益，管理形式趋于人性化的社会服务。星级酒店设计.星级酒店设计观念发生变化：现代星级酒店设计观念总体上已经从从前注重社会形象上的标志性转向社会服务性，空间区域布局由封闭型趋向开放型，服务的项目也从传统的综合性转变为突出品牌与特色。装修风格也单一向多元化转变。",
                    content1:
                      " 2.服务项目的动态趋势服务项目由综合性转变为突出品牌和特色酒店类型。许多以旅游为主的酒店向多层次、多类别的星级酒店转变。客房主要由过去的双标准客房组成，包括单人房、双人房、灵活三人房、商务套房等多元化客房。客房空间的平面形状、尺寸和配套设施趋于多样化和特色。餐饮空间从以往的模式趋向星级酒店的餐饮质量和服务水平、运营和成本控制更加专业化和模式化。服务功能的动态趋势是服务功能从原来的封闭状态转变为面向全社会的趋势。根据实际需要独立选择服务功能类别和项目，以便更好地生存和发展。近年来，由于酒店客户结构的变化，不同客户需要不同层次的市场，需要更详细的市场定位和分工，使其服务功能更专业、更高质量。",
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
