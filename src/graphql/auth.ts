import { gql } from "@apollo/client"

export const SEND_CODE_MSG = gql`
  mutation sendCodeMsg($tel: String!, $invitedCode: String){
    sendCodeMsg(tel: $tel, invitedCode: $invitedCode){
      code
      message
      data
    }
  }
`

export const LOGIN = gql`
  mutation login($tel: String!, $code: String!){
    login(tel: $tel, code: $code){
      code
      message
      data
    }
  }
`
