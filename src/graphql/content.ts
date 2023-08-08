/*
 * @Date: 2023-08-07 21:51:23
 * @Author: Bruce Hsu
 * @Description: 
 */
import { gql } from "@apollo/client";


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