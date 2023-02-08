import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Comment, Tooltip } from 'antd';
import './index.scss'
import React, { createElement, useState,useEffect } from 'react';
const Comments = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const [user, setUser] = useState('');
  console.log(1345135, user);
  useEffect(() => {
    setUser(window.localStorage.getItem('shopUser'))
   
  }, [user]);
  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };
  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };
  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
  return (
    
      user ? 
      <>
      <Comment
       actions={actions}
       author={<a>Han Solo</a>}
       avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
       content={
         <p>
           We supply a series of design principles, practical patterns and high quality design
           resources (Sketch and Axure), to help people create their product prototypes beautifully
           and efficiently.
         </p>
       }
       datetime={
         <Tooltip title="2016-11-22 11:22:33">
           <span>8 hours ago</span>
         </Tooltip>
       }
       />
        <Comment
       actions={actions}
       author={<a>Han Solo</a>}
       avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
       content={
         <p>
           We supply a series of design principles, practical patterns and high quality design
           resources (Sketch and Axure), to help people create their product prototypes beautifully
           and efficiently.
         </p>
       }
       datetime={
         <Tooltip title="2016-11-22 11:22:33">
           <span>8 hours ago</span>
         </Tooltip>
       }
       />
       
      </> :
       <div className="tabcomment">
       <div>目前还未有评论</div>
       <div>只有买过此商品的客户登录后才能发表评论</div>
     </div>
    
   
   
    
  );
};
export default Comments;