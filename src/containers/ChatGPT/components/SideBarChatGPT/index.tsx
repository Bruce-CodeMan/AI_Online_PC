/*
 * @Date: 2023-07-27 13:44:10
 * @Author: Bruce Hsu
 * @Description: 
 */
import { ADD_NEW_DIALOG } from "@/graphql/content";
import { GET_MENU } from "@/graphql/user";
import { useMutation, useQuery } from "@apollo/client";

import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface IProp {
  curKey: string;
  setCurKey: (value: string) => void;
}


const SideBarChatGPT = ({ curKey, setCurKey }: IProp) => {
  
  const [ menu, setMenu ] = useState([]);
  const [ addNewDialog ] = useMutation(ADD_NEW_DIALOG)

  // 获取菜单栏的信息
  const {refetch} = useQuery(GET_MENU, {
    onCompleted: (data) => {
      setMenu(data.getAllMenus.data.menu)
    }
  })

  // 添加一个新的对话框
  const addNewDialogHandler = async () => {
    const { data } = await addNewDialog()
    setCurKey(data)
    refetch()
  }

  return (
    <div className="w-[15%] bg-[#202123] rounded-l-lg h-full flex flex-col">
      {/* BUTTON */}
      <div 
        className="w-[90%] border-gray-500 border h-12 flex mx-auto mt-2 rounded-lg gap-4 cursor-pointer hover:opacity-75"
        onClick={addNewDialogHandler}
      >
        <button className="text-white ml-4">+</button>
        <span className="text-white flex items-center">New Chat</span>
      </div>
      {/* ListItem */}
      <div className="w-[90%] flex flex-col mx-auto mt-2 cursor-pointer pr-2 truncate ...">
        {/* 遍历整个菜单栏 */}
        {
          menu.slice(0).reverse().map((item: any) => (
            <div
              className={`flex ${curKey === item.key ? 'bg-glass' : ''} items-center h-9 gap-5 text-white mt-2 cursor-pointer w-full rounded-lg hover:bg-glass hover:opacity-751`}
              key={item.key}
              onClick={() => setCurKey(item.key)}
            >
              
              <div className="ml-2">
                <ChatBubbleLeftIcon  className="h-5 w-5"/>
              </div>
              <span className="truncate ...">{ item.title }</span>
            </div>
          ))
        }
        
        {/* list-item end */}
        
      </div>
    </div>
  )
}

export default SideBarChatGPT;