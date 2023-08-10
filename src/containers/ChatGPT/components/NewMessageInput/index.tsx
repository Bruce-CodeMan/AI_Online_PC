/*
 * @Date: 2023-07-28 08:45:34
 * @Author: Bruce Hsu
 * @Description: 
 */
import { BsSend } from "react-icons/bs";
import { v4 as uuid } from "uuid"
import { useState, useEffect } from "react";
import { useRef } from "react";

// Custom Imports
import styles from "./index.module.less"
import { useMutation, useQuery } from "@apollo/client";
import { COMMIT_CONTENT_INFO, GET_CONTENT_INFO } from "@/graphql/content";
import Message from "../Message";
import { CHATGPT_URL } from "@/utils/constant";

interface IProp {
  curKey: string;
}

const NewMessageInput = ({ curKey }: IProp) => {

  const [content, setContent] = useState("")
  const [detailContent, setDetailContent] = useState<{ id: string; sender: string; message: string }[]>([]);
  const [isSendMsg, setIsSendMsg] = useState(false)

  const [ sendMessage ] = useMutation(COMMIT_CONTENT_INFO)

  const {data, refetch} = useQuery(GET_CONTENT_INFO, {
    variables: {
      id: curKey
    }
  })

  useEffect(() => {
    if (data?.getContentInfo.data) {
      setDetailContent(data.getContentInfo.data.detailContent);
    }
  }, [data]);

  const scrollRef = useRef<HTMLDivElement>(null);


  const scrollToButton = () => {
    scrollRef.current?.scrollIntoView({behavior: "smooth"})
  }

  useEffect(scrollToButton, [detailContent])

  const processMessage = async () => {

    console.log("curKey: ", curKey)
    console.log("content: ", content)

    await sendMessage({
      variables: {
        "params": {
          "id": curKey,
          "detailContent": {
            "id": uuid(),
            "sender": "USER",
            "message": content
          }
        }
      }
    })
    refetch()
    setIsSendMsg(true)
    

    fetch(CHATGPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: content
      })
    }).then(response => {
      setDetailContent(prevDetailContent => [...prevDetailContent, {id: uuid(), sender: 'AI', message: ""}])
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      let fullMessage = ""

      reader?.read().then(async function process({ done, value }): Promise<any> {
        if(done) {
          setIsSendMsg(false)
          try{
            await sendMessage({
              variables: {
                "params": {
                  "id": curKey,
                  "detailContent": {
                    "id": uuid(),
                    "sender": "AI",
                    "message": fullMessage
                  }
                }
              }
            })
            await refetch()
          } catch{
            console.log("ERROR")
          }
          return Promise.resolve()
        }
        const message = decoder.decode(value)
        fullMessage += message
        setDetailContent(prevDetailContent => {
          const lastElement = prevDetailContent[prevDetailContent.length - 1]
          if(lastElement){
            lastElement.message += message
          }
          return [...prevDetailContent]
        })

        return reader.read().then(process)
      })
    })
  }

  const sendMessageHandler = () => {
    if(content.length > 0) {
      processMessage()
      setContent("")
    }
  }

  const keyProcessedHandler = (event: any) => {
    if(event.code === "Enter" && content.length > 0) {
      processMessage()
      setContent("")
    }
  }

  return (
    <>

      {/* 消息的展示列表 - start */}
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
      {/* 消息的展示列表 - end */}
    
      {/* Input 的输入框 - start   */}
      <div className="relative bottom-0 h-24 w-full rounded-br-lg flex items-center justify-center">
        <input
          placeholder="Send a message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={`${styles.new_message_input}`}
          onKeyDown={keyProcessedHandler}
          disabled={isSendMsg}
        />
        <div 
          className="relative right-8 cursor-pointer"
          onClick={sendMessageHandler}
        >
          <BsSend color="gray" rotate={180}/>
        </div>
      </div>
      {/* Input 的输入框 - end */}
    </>
    
  )
}

export default NewMessageInput;