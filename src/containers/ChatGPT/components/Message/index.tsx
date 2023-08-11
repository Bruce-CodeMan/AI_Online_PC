/*
 * @Date: 2023-07-28 08:45:34
 * @Author: Bruce Hsu
 * @Description: 
 */
import { AiOutlineUser } from "react-icons/ai"
import { PiCopySimple, PiChecks } from "react-icons/pi"
import { SiOpenai } from "react-icons/si";
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";

// Custom Imports
import styles from "./index.module.less"


interface IPros {
  content: string;
  aiMessage: string;
}


const Message = ({ content, aiMessage }: IPros) => {

  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div
      className={`${styles.message_container} rounded-r-lg`}
      style={{ background: aiMessage === "AI"? 'rgb(247,247,248)': 'white' }}
    >  
      <div className={`${styles.message_avatar_container}`}>
        {aiMessage === "AI" ? <SiOpenai className="h-6 w-6 text-green-600"/> : <AiOutlineUser className="h-6 w-6"/>}
      </div>
      <ReactMarkdown 
        className={`${styles.message_text}`}
        components={{
          code({inline, className, children, style, ...props}) {
            const match = /language-(\w+)/.exec(className || "")
            return !inline && match ? (
              <div className="flex flex-col">
                <div className="flex items-center justify-between bg-gray-500 -mb-2 p-2 rounded-t-lg">
                  <span className="text-white">{ match[1] }</span>
                  <CopyToClipboard 
                    text={children as string}
                    onCopy={handleCopy}
                  >
                    {isCopied ? <PiChecks className="h-4 w-4 text-green-500"/> : <PiCopySimple className="h-4 w-4 text-white cursor-pointer"/> } 
                  </CopyToClipboard>
                </div>
                <SyntaxHighlighter
                  language={match[1]}
                  style={darcula}
                  className="rounded-b-lg"
                  PreTag="div"
                  {...props}
                >
                  { children as string }
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        { content }
      </ReactMarkdown>
    </div>
  )   
}

export default Message;