import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import './index.scss'
import newbg from "../../images/newBg.webp";
import news1 from "../../images/news2.webp";
export default function News() {
  const [datas,setDatas]=useState([])
  const list=[
    {
      src:"https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cDovLzVjOWRjODdjMDlhYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNC9mMGVlMjA3NTNkZWNlYzA4OWVkZDhjYTMzMWNlOTFkYi05MC53ZWJw.webp",
      title:"如何选择室内装饰画",
      data:'2019/ 04/15 14：25',
      descr:'如果你对一个程序员说：你的代码有bug。',
      descr1:'他的第一反应是：我去检查一下',
      id:1,
      content:'1.装饰画的“内容”选择装饰画的“内容”较多，大致有抽象、艺术，“增厚”空间内容、艺术感；动物，常会选择有某种寓意或与当地风俗相关的动物装饰画，比如大象装饰画被赋予了吉祥、如意、吸财等的寓意；人物，亦有漫画、肖像画、人物抽象画等之分，人物情绪会对空间“情绪”产生一定程度的影响；植物，清新、希望、休闲、生命力；风景、山水，神秘、大气磅礴、意境……几种，结合家庭成员喜好、想要营造的客厅效果、所在地区风俗等选择；',
      content1:'2.依据墙体尺寸 悬挂装饰画或是前方没有参照物，或是忽略参照物的存在，以装饰画可占用客厅区墙体，或当客厅与其它区域相连，并共用同面“不间断”墙体时，可占用的该“共用墙体”面积为参照，面积长度较大，单幅装饰画宽度或组合装饰画的“总宽度”是它的2/3左右较合适，面积长度较小，单幅装饰画宽度或组合装饰画的“总宽度”是它的0.8倍左右较合适，有较饱满的装饰感，对于“公用墙体”而言，还有将相连区域“合二为一”，扩大区域面积感的效果，但装饰画只占用客厅区墙体，且墙体前方有参照物的情况，会有一定的压迫感产生，考虑在内；',
    },
    {
      src:"https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cHM6Ly81YzlkYzg3YzA5YWFlLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvNDdiNTE3NTJhNTE2NjUwOTc5MDUxZWE1MzBkZTUxZTktNTAweDQwMC05MC53ZWJw.webp",
      title:"说到墙面装饰，你一定会想起来的照片墙",
      data:'2017/ 05/23 18：05',
      descr:'面试官：你是专业设计师是吧，那你说说我身上这件衣服的色值多少？',
      descr1:'求职者：……',
      id:3,
      content:'1. 客厅照片墙客厅是居家生活中人们最常聚集的场所，也是一个家庭待客的地方。在客厅将自己喜欢的照片展示出来，既能勾起内心深处的回忆，营造出非常温馨的空间氛围，还能将自己的故事以图像方式讲述给客人。在客厅设置照片墙，常见的位置是沙发背景墙，也可以在两面墙的转角处设置，形成呼应效果。客厅照片墙除了可以选择沙发后面的位置。相框颜色保持与整体风格一致，效果会更加好看，也更加协调。',
      content1:'2. 餐厅照片墙照片墙用在餐厅空间也是常见的。一般来说，餐厅空间没有客厅那么大，因此可以根据空间的大小不同，选择单一大张照片，也可选用系列照片装饰。 照片除了常见的悬挂方式外，也可以做成支架进行摆放。墙面上的装饰和摆台上的装饰，可以丰富墙面的层次感，也是颇为美观的。台面的装饰照片除了可以选择悬挂的方式，还可以选择这种摆放的方式，墙面装饰和摆台上装饰相互呼应，使平面的墙体富有立体感。这样的装饰方式，马上能让立体感、空间感体现出来，效果会大不一样。在餐厅的一面墙上，可以没有特定规则，随意选取喜欢的照片贴上，也是一种往日重现的景象。照片的尺寸可以根据照片墙的空间自行调节，适当留白处理会让空间更加富有文艺气息。如果空间整体色调偏冷，那么适当选取一些暖色调的软装进行装饰也是不错的。',
    },
    {
      src:"https://ccdn.goodq.top/caches/f3e2686ae5c8d478262426df3f106330/aHR0cHM6Ly81YzlkYzg3YzA5YWFlLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDQvZDllMjUyNWYzZWIzNzNhNGU5YTZiZDc1YTYyNjFkNjUtNTAweDQwMC05MC53ZWJw.webp",
      title:"现代星级酒店设计的动态变化趋势",
      data:'2019/ 04/15  9：52',
      descr:'前阵子，公司一个人遇到个记者，记者问他："看您身板硬朗、精神矍铄，请问您养生秘诀是什么？',
      descr1:'',
      id:2,
      content:' 1.总体概念的动态趋势是星级酒店设计从以前的标志性趋势到社会服务，空间设计从封闭趋势到开放，空间装饰风格从单一趋势到多样化，从只注重社会效益的趋势到更注重经济效益，管理形式趋于人性化的社会服务。星级酒店设计.星级酒店设计观念发生变化：现代星级酒店设计观念总体上已经从从前注重社会形象上的标志性转向社会服务性，空间区域布局由封闭型趋向开放型，服务的项目也从传统的综合性转变为突出品牌与特色。装修风格也单一向多元化转变。',
      content1:' 2.服务项目的动态趋势服务项目由综合性转变为突出品牌和特色酒店类型。许多以旅游为主的酒店向多层次、多类别的星级酒店转变。客房主要由过去的双标准客房组成，包括单人房、双人房、灵活三人房、商务套房等多元化客房。客房空间的平面形状、尺寸和配套设施趋于多样化和特色。餐饮空间从以往的模式趋向星级酒店的餐饮质量和服务水平、运营和成本控制更加专业化和模式化。服务功能的动态趋势是服务功能从原来的封闭状态转变为面向全社会的趋势。根据实际需要独立选择服务功能类别和项目，以便更好地生存和发展。近年来，由于酒店客户结构的变化，不同客户需要不同层次的市场，需要更详细的市场定位和分工，使其服务功能更专业、更高质量。',
    },

  ]
  useEffect(()=>{

    setDatas(list)
  },[])

  return (
    <div className='news'>
      <div className="newsImg">
        <img src={newbg} alt="bg" />
      </div>
      <div className="second-home">
        <div className="secContent">
          <h1>OUR NEWS</h1>
          <div>新闻动态</div>
          <p>艺术并非是偶有闲情时的欣赏，而是生活中的点点滴滴与不可或缺</p>
          <p>
            其实，家中的一抹绿意，一束恰到好处的灯光，令人安心的香气，都可以成为家中的艺术装点
          </p>
        </div>
      </div>
      <ul>
        {
          datas.map(((ele,index)=>{
              return    <Link key={ele.id}
              to={"/interior"}
              state={{
                title: ele.title,
                url: ele.src,
                data: ele.data,
                content:ele.content,
                content1:ele.content1
              }}
              >
               <li>
              <div className='liImg'>
                <img src={ele.src} alt="bg" />
              </div>
              <div className='newsRight'>
                <div className='newstitle'>{ele.title}</div>
                <div className='newsdata'>{ele.data}</div>
                <p>{ele.descr}</p>
                <p>{ele.descr1}</p>
              </div>
            </li>
              </Link>
          }))
        }

      </ul>
    </div>
  )
}
