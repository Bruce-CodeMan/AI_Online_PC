/*
 * @Date: 2023-07-28 08:45:34
 * @Author: Bruce Hsu
 * @Description: 
 */
import { BsSend } from "react-icons/bs";

// Custom Imports
import styles from "./index.module.less"
import { useState } from "react";

const NewMessageInput = () => {

  const [content, setContent] = useState("")

  const processMessage = () => {
    const message = {
      aiMessage: false,
      content,
      id: "1",
      animate: false,
    }
    console.log(message)
    // append this message to our local store

    // send message to the server

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