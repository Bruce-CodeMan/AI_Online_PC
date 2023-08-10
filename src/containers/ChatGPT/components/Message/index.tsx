/*
 * @Date: 2023-07-28 08:45:34
 * @Author: Bruce Hsu
 * @Description: 
 */
import { GrUser } from "react-icons/gr"
import { FcMindMap } from "react-icons/fc";

// Custom Imports
import styles from "./index.module.less"

interface IPros {
  content: string;
  aiMessage: string;
}


const Message = ({ content, aiMessage }: IPros) => {
 return (
  <div
    className={`${styles.message_container} rounded-r-lg`}
    style={{ background: aiMessage === "AI"? 'rgb(247,247,248)': 'white' }}
  >  
    <div className={`${styles.message_avatar_container}`}>
      {aiMessage === "AI" ? <FcMindMap /> : <GrUser />}
    </div>
    <p className={`${styles.message_text}`}>
      { content }
    </p>
  </div>
 )   
}

export default Message;