import React, { useEffect, useState } from "react";
import shopbg from "../../images/shop.webp";
import "./index.scss";
import { Button, Tooltip, Card } from "antd";
const { Meta } = Card;
const customColors = ["椅子", "沙发", "电视柜", "灯饰", "装饰"];
export default function Shopping() {
  const [addDatas, setAddDatas] = useState([]);

  const [seachKey, setSeachKey] = useState("");
  //点击关键字 搜索
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
  function clickSerch(e) {
    console.log(e.target.innerText);
    setSeachKey(e.target.innerText);
  }
  console.log(111, seachKey);
  return (
    <div className="warp">
      <div>
        <img src={shopbg} alt="bg" height={337} />
      </div>
      <div className="second-home">
        <div className="secContent">
          <h1>DECORATE YOUR OWN HOME</h1>
          <div>装饰你的家</div>
          <p>艺术并非是偶有闲情时的欣赏，而是生活中的点点滴滴与不可或缺 </p>
          <p>
            其实，家中的一抹绿意，一束恰到好处的灯光，令人安心的香气，都可以成为家中的艺术装点
          </p>
          <div className="shopTag">
            {customColors.map((color) => (
              <Tooltip color={color} key={color}>
                <Button onClick={clickSerch}>{color}</Button>
              </Tooltip>
            ))}
          </div>
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
    </div>
  );
}
