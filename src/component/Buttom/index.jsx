import React from 'react'
import './index.scss'
import buttomImg from '../../images/buttom.png'
import qRImg from '../../images/btqr.webp'
import btImg from '../../images/btnright.webp'
import bt1 from '../../images/bt-1.webp'
import bt2 from '../../images/bt-2.webp'
import bt3 from '../../images/bt-3.webp'
import bt4 from '../../images/bt-4.webp'
import bt5 from '../../images/bt-5.webp'
export default function Button() {
  return (
    <div className='buttom-header'>
      <div className='btHeaderImg'>
        <ul>
          <li><img src={bt1} alt="1" /></li>
          <li><img src={bt2} alt="1" /></li>
          <li><img src={bt3} alt="1" /></li>
          <li><img src={bt4} alt="1" /></li>
          <li><img src={bt5} alt="1" /></li>
        </ul>
      </div>
      <ul>
        <li style={{height:'197px'}}>
          <div className='customer-service'>
            <p>售后客服热线：400-000-0000</p>
            <p>商务合作邮箱：email@qifeiye.com</p>
            <img className='btLeftImg' src={buttomImg} alt="1"  height={35}/>
          </div>
        </li>
        <li style={{ background: '#f0f0f0' }}>
          <div className='QRcodes'>
          <div className='QRcode'>
            <p>微信客服</p>
            <img src={qRImg} alt="1" />
          </div>
          <div className='QRcode'>
            <p>微信客服</p>
            <img src={qRImg} alt="1" />
          </div>
          </div>
        
        </li>
        <li style={{height:'197px'}}>
          <div className='customer-service'>
            <p>隐私政策  服务条款</p>
            <p>版权所有 20213-2078 家居用品商城模板  </p>
            <img className='btLeftImg' src={btImg} alt="1"  height={35}/>
          </div>
        </li>
      </ul>
    </div>
  )
}

