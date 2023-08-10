/*
 * @Date: 2023-08-07 21:51:23
 * @Author: Bruce Hsu
 * @Description: 
 */
import { gql } from "@apollo/client";

// 获取对话内容
export const GET_CONTENT_INFO = gql`
query getContentInfo($id: String!){
  getContentInfo(id: $id){
    code
    message
    data{
      id
      detailContent{
        id
        sender
        message
      }
    }
  }
}
`

// 发送想要问的问题
export const COMMIT_CONTENT_INFO = gql`
mutation commitContentInfo($params: ContentInput!){
  commitContentInfo(params: $params){
    code
    message
    data{
      id
      detailContent{
        id
        sender
        message
      }
    }
  }
}
`

// 添加聊天对话框
export const ADD_NEW_DIALOG = gql`
mutation addNewDialog{
  addNewDialog{
    code
    data
    message
  }
}
`