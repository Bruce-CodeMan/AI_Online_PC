/*
 * @Date: 2023-07-27 10:31:58
 * @Author: Bruce Hsu
 * @Description: 
 */
import { useState } from "react";

// Custom Imports
import SideBarChatGPT from "@/containers/ChatGPT/components/SideBarChatGPT";
import ContentChatGPT from "@/containers/ChatGPT/components/ContentChatGPT";


const ChatGPT = () => {

  const [curKey, setCurKey] = useState("");

  return (
      <div className="flex w-full h-full">
      {/* SIDEBAR */}
      <SideBarChatGPT curKey={curKey} setCurKey={setCurKey}/>
      {/* CHAT CONTENT */}
      <ContentChatGPT curKey={curKey}/>
    </div>
    
  )
}

export default ChatGPT; 