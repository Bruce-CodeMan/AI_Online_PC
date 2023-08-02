/*
 * @Date: 2023-07-31 13:02:49
 * @Author: Bruce Hsu
 * @Description: 
 */
import { useRef } from "react";

import Message from "../Message";
import styles from "./index.module.less"

const Messages = () => {


  const scrollRef = useRef<HTMLDivElement>(null);


  const scrollToButton = () => {
    scrollRef.current?.scrollIntoView({behavior: "smooth"})
  }


  return (
    <div className={`${styles.chat_messages_container}`}>
          
          
      <div ref={scrollRef}></div>
    </div>
  )
}

export default Messages;