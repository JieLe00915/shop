import React from 'react';
import {useLocation  } from "react-router-dom";
const IteriorPainting = (props) => {
  const location = useLocation()
  const {title,url}=location.state
  return (
    <div>
      <div>{ title}</div>
      <img src={url} alt="" />
    </div>
  );
}

export default IteriorPainting;
