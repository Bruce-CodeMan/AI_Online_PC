/*
 * @Date: 2023-08-04 10:05:09
 * @Author: Bruce Hsu
 * @Description: 
 */

// Custom Imports
import Login from "@/containers/Login"
import Home from "@/containers/Home"
import Content from "@/containers/Content"
import NewLogin from "@/containers/NewLogin"

export const ROUTE_CONFIG = [
  {
    key: "login",
    path: "/login",
    element: Login,
    title: "登录"
  },
  {
    key: "home",
    path: "/",
    element: Home,
    title: "首页"
  },
  {
    key: "content",
    path: "/content",
    element: Content,
    title: "主页"
  },
  {
    key: "newLogin",
    path: "/newLogin",
    element: NewLogin,
    title: "新登录界面"
  }
]

