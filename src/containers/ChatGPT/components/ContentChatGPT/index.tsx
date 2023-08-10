/*
 * @Date: 2023-07-27 13:48:59
 * @Author: Bruce Hsu
 * @Description: 
 */
// Custom Imports
import ChatGPTLogo from "@/containers/ChatGPT/components/Logo";
import NewMessageInput from "@/containers/ChatGPT/components/NewMessageInput";

interface IProp {
  curKey: string;
}

const ContentChatGPT = ({ curKey }: IProp) => {

  

  return (
    <>
        {
          curKey 
          ? (
            <div className="bg-white w-full h-full rounded-r-lg flex flex-col">
              <NewMessageInput curKey={ curKey }/>
            </div>
          ) : (
            <div  className="bg-white w-full h-full rounded-r-lg flex flex-col">
              <ChatGPTLogo />
            </div>
          )
        }
      
    </>
    
  )
}

export default ContentChatGPT;