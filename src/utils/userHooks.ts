/*
 * @Date: 2023-08-04 14:05:08
 * @Author: Bruce Hsu
 * @Description: 
 */
import { useQuery } from "@apollo/client";

// Custom Imports
import { connectFactory, useAppContext } from "@/utils/contextFactory";
import { GET_USER } from "@/graphql/user";
import { IUser } from "./types";


const KEY = "userInfo"
const DEFAULT_VALUE = {}

export const useUserContext = () => useAppContext<IUser>(KEY)

export const connect = connectFactory(KEY, DEFAULT_VALUE)

export const useGetUser = () => {
  const { setStore } = useUserContext()
  useQuery<{ getUserInfo: IUser }>(GET_USER, {
    onCompleted: (data) => {
      const { id, name, avatar, gpt3Value, gpt4Value } = data.getUserInfo
      if(data.getUserInfo){
        setStore({
          id,
          name,
          avatar,
          gpt3Value,
          gpt4Value
        })
      }
    }
  })
}