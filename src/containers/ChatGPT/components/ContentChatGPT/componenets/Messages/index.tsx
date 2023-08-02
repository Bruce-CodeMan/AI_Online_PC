/*
 * @Date: 2023-07-31 13:02:49
 * @Author: Bruce Hsu
 * @Description: 
 */
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import Message from "../Message";
import styles from "./index.module.less"

const Messages = () => {

  const { selectedConversationId, conversations } = useSelector((state:any) => state.dashboard)

  const scrollRef = useRef<HTMLDivElement>(null);
  
  const conversation = conversations.find(
    (c: any) => c.id === selectedConversationId
  )

  const scrollToButton = () => {
    scrollRef.current?.scrollIntoView({behavior: "smooth"})
  }

  useEffect(scrollToButton, [conversation?.messages])

  return (
    <div className={`${styles.chat_messages_container}`}>
      {
        conversation?.messages.map((m: any, index: number) => (
          
          <Message 
            key={m.id}
            content={m.content}
            aiMessage={m.aiMessage}
            animate={index === conversation.messages.length -1 && m.aiMessage}
          />
        ))
      }
      <div ref={scrollRef}></div>
    </div>
  )
}

export default Messages;