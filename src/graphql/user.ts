/*
 * @Date: 2023-08-04 14:34:51
 * @Author: Bruce Hsu
 * @Description: 
 */
import { gql } from "@apollo/client";

// 通过上下文来获取用户信息
export const GET_USER = gql`
  query getUserInfo{
    getUserInfo{
      id
      name
      avatar
      gpt3Value
      gpt4Value
    }
  }
`

// 获取用户的对话框
export const GET_MENU = gql`
  query getMenu{
    getAllMenus{
      data{
        menu{
          key
          title
        }
      }
    }
  }
`