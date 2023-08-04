/*
 * @Date: 2023-08-04 14:34:51
 * @Author: Bruce Hsu
 * @Description: 
 */
import { gql } from "@apollo/client";

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