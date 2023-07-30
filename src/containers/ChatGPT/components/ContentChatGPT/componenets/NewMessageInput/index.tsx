/*
 * @Date: 2023-07-28 08:45:34
 * @Author: Bruce Hsu
 * @Description: 
 */
import { BsSend } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid"

// Custom Imports
import styles from "./index.module.less"
import { useState } from "react";
import { addMessage, setSelectedConversationId } from "@/utils/dashboardSlice";
import { sendConversationMessage } from "@/utils/socketConn";

const NewMessageInput = () => {

  const [content, setContent] = useState("")

  const dispatch = useDispatch()

  const selectedConversationId = useSelector((state:any) => state.dashboard.selectedConversationId)

  const processMessage = () => {
    const message = {
      aiMessage: false,
      content,
      id: uuid(),
      animate: false,
    }

    const conversationId =
      selectedConversationId === "new" ? uuid() : selectedConversationId;

    console.log(conversationId)

    // append this message to our local store
    dispatch(
      addMessage({
        conversationId,
        message
    }))

    dispatch(setSelectedConversationId(conversationId))

    // send message to the server
    sendConversationMessage(message, conversationId)
    // reset the value of the input
    setContent("")
  }

  const sendMessageHandler = () => {
    if(content.length > 0) {
      processMessage()
    }
  }

  const keyProcessedHandler = (event: any) => {
    if(event.code === "Enter" && content.length > 0) {
      processMessage()
    }
  }

  return (
    <div className="relative bottom-0 h-24 w-full rounded-br-lg flex items-center justify-center">
      <input
        placeholder="Send a message"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={`${styles.new_message_input}`}
        onKeyDown={keyProcessedHandler}
      />
      <div 
        className="relative right-8 cursor-pointer"
        onClick={() => sendMessageHandler()}
      >
        <BsSend color="gray" rotate={180}/>
      </div>
    </div>
  )
}

export default NewMessageInput;