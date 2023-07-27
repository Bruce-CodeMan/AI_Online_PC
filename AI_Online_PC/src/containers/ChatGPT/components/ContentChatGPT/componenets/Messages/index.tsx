import Message from "../Message";

const Messages = () => {
  return (
    <div className="flex-1">
      <Message content="Hello Ai" aiMessage={false}/>
      <Message animate content="Hello , I am AI" aiMessage={true}/>
    </div>
  )
}

export default Messages;