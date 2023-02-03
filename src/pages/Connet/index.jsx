import React from "react";

import "./index.scss";
import shopbg from "../../images/shop.webp";
import connet1 from "../../images/connet.webp";
export default function Connet() {
  return (
    <div className="connet">
      <div className="connetImg">
        <img src={shopbg} alt="" />
      </div>
      <div className="cnfooter">
        <div className="content">
          <div className="contentLeft">
            <div style={{ margin: "20px 0", fontSize: "24px", color: "#333" }}>
              联系我们/ CONTACT US
            </div>
            <p>地址：苏州市工业园区金鸡湖大道00号零零大厦00号</p>
            <p>TEL：(010)5555-6666</p>
            <p>FAX：(010)5555-5555</p>
            <p>Email：email@information.com</p>
            <p style={{ marginTop: "30px" }}>营业时间</p>
            <p>周一至周六（Mon-Sat）AM11：00-PM9：00</p>
            <p>周日(Sun) AM11：00-PM7：30</p>
          </div>
          <div>
            <img src={connet1} alt="" width={558} />
          </div>
        </div>
      </div>
    </div>
  );
}
