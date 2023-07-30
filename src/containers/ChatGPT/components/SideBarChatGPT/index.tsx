/*
 * @Date: 2023-07-27 13:44:10
 * @Author: Bruce Hsu
 * @Description: 
 */

import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

interface IProps {
  handleSetSelectedChat: (value: string) => void;
}

const SideBarChatGPT = ({ handleSetSelectedChat }: IProps) => {

  const handleChooseNewChat = () => {
    handleSetSelectedChat("new")
  }

  const conversations = useSelector((state: any) => state.dashboard.conversations)
  console.log(conversations)

  return (
    <div className="w-[15%] bg-[#202123] rounded-l-lg h-full flex flex-col">
      {/* BUTTON */}
      <div 
        className="w-[90%] border-gray-500 border h-12 flex mx-auto mt-2 rounded-lg gap-4 cursor-pointer hover:opacity-75"
        onClick={handleChooseNewChat}
      >
        <button className="text-white ml-4">+</button>
        <span className="text-white flex items-center">New Chat</span>
      </div>
      {/* ListItem */}
      <div className="w-[90%] flex flex-col mx-auto mt-2 cursor-pointer pr-2 truncate ...">
        {/* No.1 */}
        {
          conversations.map((c: any) => (
            <div
              key={c.id} 
              className="flex items-center h-9 gap-5 text-white mt-2 cursor-pointer w-full rounded-lg hover:bg-glass hover:opacity-75"
              onClick={() => handleSetSelectedChat(c.id)}
            >
              
              <div className="ml-2">
                <ChatBubbleLeftIcon  className="h-5 w-5"/>
              </div>
              <span className="truncate ...">{c.messages[0].content}</span>
            </div>
          ))
        }
        
        {/* list-item end */}
        
      </div>
    </div>
  )
}

export default SideBarChatGPT;