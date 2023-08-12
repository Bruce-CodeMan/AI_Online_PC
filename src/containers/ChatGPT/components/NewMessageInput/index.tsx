/*
 * @Date: 2023-07-28 08:45:34
 * @Author: Bruce Hsu
 * @Description: 
 */
import { BsSend } from "react-icons/bs";
import { v4 as uuid } from "uuid"
import { useState, useEffect, Fragment } from "react";
import { useRef } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

// Custom Imports
import styles from "./index.module.less"
import { COMMIT_CONTENT_INFO, GET_CONTENT_INFO } from "@/graphql/content";
import Message from "../Message";
import { CHATGPT_URL } from "@/utils/constant";
import { useUserContext } from "@/utils/userHooks";

const model = [
  { name: 'GPT-3.5-turbo', value: "gpt-3.5-turbo" },
  { name: 'GPT-3.5-turbo-0613', value: "gpt-3.5-turbo-0613" },
  { name: 'GPT-3.5-turbo-16k', value: "gpt-3.5-turbo-16k" },
  { name: 'GPT-3.5-turbo-16k-0613', value: "gpt-3.5-turbo-16k-0613" },
  { name: 'GPT-4', value: "gpt-4" },
  { name: 'GPT-4-0314', value: "gpt-4-0314" },
  { name: 'GPT-4-0613', value: "gpt-4-0613" },
  { name: 'GPT-4-32k', value: "gpt-4-32k" },
  { name: 'GPT-4-32k-0314', value: "gpt-4-0314" },
  { name: 'GPT-4-32k-0613', value: "gpt-4-0613" },
]

interface IProp {
  curKey: string;
}

const NewMessageInput = ({ curKey }: IProp) => {

  const [content, setContent] = useState("")
  const [detailContent, setDetailContent] = useState<{ id: string; sender: string; message: string }[]>([]);
  const [isSendMsg, setIsSendMsg] = useState(false)

  const { store } = useUserContext();

  const [selectedModel, setSelectedModel] = useState(model[0])
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

  // 输入框发送消息给后端
  const processMessage = async () => {

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
        message: content,
        model: selectedModel.value,
        userId: store.id
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
        const obj = {
          message: ''
        };
        obj.message = decoder.decode(value)
        fullMessage += obj.message
        setDetailContent(prevDetailContent => {
          const lastElement = prevDetailContent[prevDetailContent.length - 1]
          if(lastElement){
            lastElement.message += obj.message
          }
          return [...prevDetailContent]
        })

        return reader.read().then(process)
      })
    })
  }

  // 点击按钮发送消息
  const sendMessageHandler = () => {
    if(content.length > 0) {
      processMessage()
      setContent("")
    }
  }

  // 按住回车进行发送消息
  const keyProcessedHandler = (event: any) => {
    if(event.code === "Enter" && content.length > 0) {
      processMessage()
      setContent("")
    }
  }

  return (
    <>
      {/* 模型的选择 -start */}
      <div className="relative top-0 h-14 w-full min-h-[60px] rounded-tr-lg border-b-2 flex items-center justify-center">
      <div className="w-72">
      <Listbox value={selectedModel} onChange={setSelectedModel}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedModel.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {model.map((m, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={m}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {m.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      </div>

      </div>
      {/* 模型的选择 - end */}

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
      <div className="relative bottom-0 h-24 w-full min-h-[96px] rounded-br-lg flex items-center justify-center">
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
