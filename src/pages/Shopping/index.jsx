import React, { useEffect, useState } from "react";
import shopbg from "../../images/shop.webp";
import "./index.scss";
import { Link ,useLocation} from "react-router-dom";
import { Button, Tooltip, Card } from "antd";
const { Meta } = Card;
const customColors = ["椅子", "沙发", "电视柜", "灯饰", "装饰"];
export default function Shopping() {
  const [addDatas, setAddDatas] = useState([]);
  // 关键字
  const location = useLocation()
  const {key}=location.state
  console.log(11,key);
  const [seachKey, setSeachKey] = useState("");
 
  useEffect(() => {
    // @ts-ignore
    setAddDatas(resgoods);
  }, []);
  const resgoods = [
    {
      id: 34,
      title: "椅子",
      price: 34134,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC8wYmJmOWU5N2U1ZTQxOTk1MjZhZGMwYzIzNzQ1MTRmMC02MDB4NjAwLTkwLndlYnA_p_p100_p_3D.webp",
      cid: 2132,
      desc: '对得起我佛起飞后啊十四大',
      category:'椅子'
    },
    {
      id: 34,
      title: "椅子",
      price: 34134,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9iNWM2MmFmYTU1YmM0YTY2MjllNDU4ZDZlZDMxYTkwOS0xMjAweDgwMC05MC53ZWJw.webp",
      desc: '对得起我佛起飞后啊十四大',
      category:'椅子'
    },
    {
      id: 34,
      title: "椅子",
      price: 34134,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9hOWU5YTYwYWJmZDVlNGMwZjNiYmU1ODFiNThmNjliMS02MDB4NjAwLTkwLndlYnA_p_p100_p_3D.webp",
      desc: '对得起我佛起飞后啊十四大',
      category:'椅子',
      cid:213662
    },
    {
      id: 34,
      title: "椅子",
      price: 34134,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC8wYTM0YTU1MTE5N2U0YmYyOWJlNmY1ZDJkYmE5NmU4MC02MDB4NjAwLTkwLndlYnA_p_p100_p_3D.webp",
      cid: 2132,
      desc: '对得起我佛起飞后啊十四大',
      category:'椅子'
    },
    {
      id: 34,
      title: "椅子",
      price: 34134,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC81Nzg3OGZmOWE0NzU3OTIyYmQ4YTExYzU0YTI4N2JiNi02MDB4NjAwLTkwLndlYnA_p_p100_p_3D.webp",
      cid: 214332,
      desc: '对得起我佛起飞后啊十四大',
      category:'椅子'
    },
    {
      id: 34,
      title: "椅子",
      price: 34134,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9hNjFmODQ5NzlmOTA3ZDAwZTIyMWQ5NWFhNmJmNjg1MC02MDB4NjAwLTkwLndlYnA_p_p100_p_3D.webp",
      cid: 342132,
      desc: '对得起我佛起飞后啊十四大',
      category:'椅子'
    },
    {
      id: 34,
      title: "LI-341",
      price: 52344,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9mZWU5YzgwNDk5N2QxYTE0NGU3Y2ZmODQxZGVjMDRlNC02MDB4NjAwLTkwLndlYnA_p_p100_p_3D.webp",
      cid: 213323,
      desc: '对得起我佛起飞后啊十四大',
      category:'吊灯'
    },

    {
      id: 34,
      title: "椅子",
      price: 34134,
      src: "https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9jMWM3ZTEzYmRlYjZhODMxYjVjNDllNTk5YjlhNDZiYi02MDB4NjAwLTkwLndlYnA_p_p100_p_3D.webp",
      cid: 213432,
      desc: '对得起我佛起飞后啊十四大',
      category:'椅子'
    },
  ];
   //点击关键字 搜索
  function clickSerch(e) {
    console.log(e.target.innerText);
    setSeachKey(e.target.innerText);
   
  }
  return (
    <div className="warp">
      <div className="shopImg">
        <img src={shopbg} alt="bg" />
      </div>
      <div className="second-home">
        <div className="secContent">
          <h1>DECORATE YOUR OWN HOME</h1>
          <div>装饰你的家</div>
          <p>艺术并非是偶有闲情时的欣赏，而是生活中的点点滴滴与不可或缺 </p>
          <p style={{marginBottom:'50px'}}>
            其实，家中的一抹绿意，一束恰到好处的灯光，令人安心的香气，都可以成为家中的艺术装点
          </p>
          <div className="shopTag">
            {customColors.map((color) => (
              <Tooltip  key={color}>
                <Button onClick={clickSerch}>{color}</Button>
              </Tooltip>
            ))}
          </div>
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
    </div>
  );
}
