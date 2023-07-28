import { GrUser } from "react-icons/gr"
import { FcMindMap } from "react-icons/fc";


// Custom Imports
import styles from "./index.module.less"
import { useEffect, useRef, useState } from "react";

interface IPros {
  content: string;
  aiMessage: boolean;
  animate?: boolean;
}

interface ISlowText {
  speed: number;
  text: string;
}

const SlowText = ({ speed, text }: ISlowText) => {
  const [placeholder, setPlaceholder] = useState(text[0])
  const index = useRef(0)

  useEffect(() => {
    function tick(){
      index.current++
      setPlaceholder((prev) => prev + text[index.current])
    }
    if(index.current < text.length - 1){
      let addChar = setInterval(tick, speed)
      return () => clearInterval(addChar)
    }
  }, [placeholder, speed, text])

  return <span>{ placeholder }</span>
}

const Message = ({ content, aiMessage, animate }: IPros) => {
 return (
  <div
    className={`${styles.message_container}`}
    style={{ background: aiMessage? 'rgb(247,247,248)': 'white' }}
  >  
    <div className={`${styles.message_avatar_container}`}>
      {aiMessage ? <FcMindMap /> : <GrUser />}
    </div>
    <p className={`${styles.message_text}`}>
      {animate ? <SlowText speed={80} text={content}/> : content }
    </p>
  </div>
 )   
}

export default Message;