/*
 * @Date: 2023-07-28 08:45:34
 * @Author: Bruce Hsu
 * @Description: 
 */
import { GrUser } from "react-icons/gr"
import { FcMindMap } from "react-icons/fc";
import {Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

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

function ChatGptResponse(response: string ) {
  const codeRegex = /(```)([^`]+)(```)/g;
  const parts = response.split(codeRegex);
  return (
    <>
      {parts.map((part: any, index) => {
        console.log(part)
        if (codeRegex.test(part)) {
          const code = parts[index + 1];
          return (
            <SyntaxHighlighter key={index} language="javascript" style={a11yDark}>
              {code}
            </SyntaxHighlighter>
          );
        } else {
          return <span key={index}>{part}</span>;
        }
      })}
    </>
  );
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


  const codeRegex = /(```)([^`]+)(```)/g;
  const parts = placeholder.split(codeRegex);
  return (
    <>
      {parts.map((part: any, index) => {
        console.log(part)
        if (codeRegex.test(part)) {
          const code = parts[index + 1];
          return (
            <SyntaxHighlighter key={index} language="javascript" style={a11yDark}>
              {code}
            </SyntaxHighlighter>
          );
        } else {
          return <span key={index}>{part}</span>;
        }
      })}
    </>
  );
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
      { animate 
        ? <SlowText speed={20} text={content}/> 
        : content }
    </p>
  </div>
 )   
}

export default Message;