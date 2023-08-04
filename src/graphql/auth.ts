/*
 * @Date: 2023-08-04 09:08:13
 * @Author: Bruce Hsu
 * @Description: 
 */
import { gql } from "@apollo/client"

// 发送短信验证码
export const SEND_CODE_MSG = gql`
  mutation sendCodeMsg($tel: String!, $invitedCode: String){
    sendCodeMsg(tel: $tel, invitedCode: $invitedCode){
      code
      message
      data
    }
  }
`

// 登录
export const LOGIN = gql`
  mutation login($tel: String!, $code: String!){
    login(tel: $tel, code: $code){
      code
      message
      data
    }
  }
`
