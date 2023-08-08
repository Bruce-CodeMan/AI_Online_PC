/*
 * @Date: 2023-07-31 13:02:49
 * @Author: Bruce Hsu
 * @Description: 
 */
import { useRef } from "react";

import Message from "../Message";
import styles from "./index.module.less"
import { useQuery } from "@apollo/client";
import { GET_CONTENT_INFO } from "@/graphql/content";

interface IProp {
  curKey: string;
}

const Messages = ({curKey}: IProp) => {

  console.log("curKey: ", curKey)

  const {data} = useQuery(GET_CONTENT_INFO, {
    variables: {
      id: curKey
    }
  })
  let detailContent = []
  if(data?.getContentInfo.data){
    detailContent = data.getContentInfo.data.detailContent
  }

  console.log(detailContent)

  const scrollRef = useRef<HTMLDivElement>(null);


  const scrollToButton = () => {
    scrollRef.current?.scrollIntoView({behavior: "smooth"})
  }


  return (
    <div className={`${styles.chat_messages_container}`}>
        {
          detailContent.map((item: any) => (
            <Message 
              key={item.id}
              content={item.message} 
              aiMessage={item.sender}
            />
          ))
        }
          
          
      <div ref={scrollRef}></div>
    </div>
  )
}

export default Messages;