/*
 * @Date: 2023-07-27 13:48:59
 * @Author: Bruce Hsu
 * @Description: 
 */
// Custom Imports
// import ChatGPTLogo from "./componenets/Logo";
import NewMessageInput from "../NewMessageInput";
import Messages from "../Messages";

const ContentChatGPT = () => {


  return (
    <>
        {/* <div  className="bg-white w-full h-full rounded-r-lg flex flex-col">
          <ChatGPTLogo />
        </div> */}
        <div className="bg-white w-full h-full rounded-r-lg flex flex-col">
          <Messages />
          <NewMessageInput />
        </div>
      
    </>
    
  )
}

export default ContentChatGPT;