/*
 * @Date: 2023-07-27 13:44:10
 * @Author: Bruce Hsu
 * @Description: 
 */

import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";


const SideBarChatGPT = () => {


  return (
    <div className="w-[15%] bg-[#202123] rounded-l-lg h-full flex flex-col">
      {/* BUTTON */}
      <div 
        className="w-[90%] border-gray-500 border h-12 flex mx-auto mt-2 rounded-lg gap-4 cursor-pointer hover:opacity-75"
      >
        <button className="text-white ml-4">+</button>
        <span className="text-white flex items-center">New Chat</span>
      </div>
      {/* ListItem */}
      <div className="w-[90%] flex flex-col mx-auto mt-2 cursor-pointer pr-2 truncate ...">
        {/* No.1 */}
        
        <div
          className="flex items-center h-9 gap-5 text-white mt-2 cursor-pointer w-full rounded-lg hover:bg-glass hover:opacity-75"
        >
          
          <div className="ml-2">
            <ChatBubbleLeftIcon  className="h-5 w-5"/>
          </div>
          <span className="truncate ...">Demo</span>
        </div>
          
        
        
        {/* list-item end */}
        
      </div>
    </div>
  )
}

export default SideBarChatGPT;