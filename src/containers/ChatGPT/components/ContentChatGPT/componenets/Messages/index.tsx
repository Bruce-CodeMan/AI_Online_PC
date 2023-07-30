import { useSelector } from "react-redux";

import Message from "../Message";

const Messages = () => {

  const { selectedConversationId, conversations } = useSelector((state:any) => state.dashboard)

  
  const conversation = conversations.find(
    (c: any) => c.id === selectedConversationId
  )

  return (
    <div className="flex-1">
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
    </div>
  )
}

export default Messages;