/*
 * @Date: 2023-07-27 13:48:59
 * @Author: Bruce Hsu
 * @Description: 
 */
import { useSelector } from "react-redux";
// Custom Imports
import ChatGPTLogo from "./componenets/Logo";
import NewMessageInput from "./componenets/NewMessageInput";
import Messages from "./componenets/Messages";

const ContentChatGPT = () => {

  const selectedConversationId = useSelector(
    (state: any) => state.dashboard.selectedConversationId
  )

  return (
    <>
    {
      !selectedConversationId
      ? (
        <div  className="bg-white w-full h-full rounded-r-lg flex flex-col">
          <ChatGPTLogo />
        </div>
      ): (
        <div className="bg-white w-full h-full rounded-r-lg flex flex-col">
          <Messages />
          <NewMessageInput />
        </div>
      )
    }
    </>
    
  )
}

export default ContentChatGPT;