/*
 * @Date: 2023-07-27 10:31:58
 * @Author: Bruce Hsu
 * @Description: 
 */

import { useDispatch } from "react-redux";

// Custom Imports
import SideBarChatGPT from "@/containers/ChatGPT/components/SideBarChatGPT";
import ContentChatGPT from "@/containers/ChatGPT/components/ContentChatGPT";
import { setSelectedConversationId } from "@/utils/dashboardSlice";

const ChatGPT = () => {

  const dispatch = useDispatch();

  const handleSetSelectedChat = (id: string) => {
    dispatch(setSelectedConversationId(id))
  }

  return (
      <div className="flex w-full h-full">
      {/* SIDEBAR */}
      <SideBarChatGPT handleSetSelectedChat={handleSetSelectedChat}/>
      {/* CHAT CONTENT */}
      <ContentChatGPT />
    </div>
    
  )
}

export default ChatGPT;