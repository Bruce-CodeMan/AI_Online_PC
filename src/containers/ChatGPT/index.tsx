/*
 * @Date: 2023-07-27 10:31:58
 * @Author: Bruce Hsu
 * @Description: 
 */

// Custom Imports
import SideBarChatGPT from "@/containers/ChatGPT/components/SideBarChatGPT";
import ContentChatGPT from "@/containers/ChatGPT/components/ContentChatGPT";

const ChatGPT = () => {

  return (
      <div className="flex w-full h-full">
      {/* SIDEBAR */}
      <SideBarChatGPT />
      {/* CHAT CONTENT */}
      <ContentChatGPT />
    </div>
    
  )
}

export default ChatGPT; 