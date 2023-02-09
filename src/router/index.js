import React from "react";
import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Connet from "../pages/Connet";
import News from "../pages/News";
import Shopping from "../pages/Shopping";
import InteriorPainting from "../pages/InteriorPainting";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ShopCar from "../pages/ShopCar";
import ShopCarOrder from "../pages/ShopCarOrder";
import Oderbill from "../pages/Oderbill";
const router = [
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/connet", element: <Connet /> },
  { path: "/news", element: <News /> },
  { path: "/shopping", element: <Shopping /> },
  { path: "/interior", element: <InteriorPainting /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/shopcar",
    element: <ShopCar />,
  },
  { path: "/oderbill", element: <Oderbill /> },
  { path: "shopcarorder", element: <ShopCarOrder /> },
  // 重定向
  { path: "/", element: <Navigate to={"/home"} /> },
  // 404找不到
  // { path: '*', element: <NotFound /> }
];

export default router;
