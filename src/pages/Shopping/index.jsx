import React, { useEffect, useState } from "react";
import shopbg from "../../images/shop.webp";
import "./index.scss";
import { Link ,useLocation} from "react-router-dom";
import { Button, Tooltip, Card } from "antd";
import api from '../../api/index'
const { Meta } = Card;
const customColors = ["椅子", "沙发", "电视柜", "灯", "装饰"];

export default function Shopping() {
  const [addDatas, setAddDatas] = useState([]);
  // 关键字
  const location = useLocation()
  const keys=location.state?.key
  useEffect(() => {
    // @ts-ignore
   
    if(keys){
      clickSerch(keys)
    }else{
      showShop()
    }
  }, [keys]);
  // 商品展示
  async function showShop() {
    const res=await api.getGoodsList()
    setAddDatas(res.data.data);
  }
   //点击关键字 搜索
   async function clickSerch(params) {
    const res=await api.getSearch({
      search:params
    })
    console.log(11,res.data.result);
    if (res.data.status ===200) {
      setAddDatas(res.data.result)
    }else{
      setAddDatas([])
    }
   
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
            {customColors.map((ele,index) => (
              <Tooltip  key={index}>
                <Button onClick={()=>clickSerch(ele)}>{ele}</Button>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
      <div className="three-home">
        {addDatas.map((ele, index) => {
          return (
            <Link  key={index}  to={"/shopcar"} state={{
              src: ele.image,
              cid: ele.cid,
              title: ele.title,
              desc: ele.sellPoint,
              price: ele.price,
              category:ele.category,
            }}>
              <Card
             
              hoverable
              style={{ width: 282, height: 344 }}
              cover={<img alt="example" src={ele.image} height={282} />}
              
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
