import { BsSend } from "react-icons/bs";

import styles from "./index.module.less"

const NewMessageInput = () => {
  return (
    <div className="relative bottom-0 h-24 w-full rounded-br-lg flex items-center justify-center">
      <input
        placeholder="Send a message"
        value=""
        className={`${styles.new_message_input}`}
      />
      <div className="relative right-8 cursor-pointer">
        <BsSend color="gray" rotate={180}/>
      </div>
    </div>
  )
}

export default NewMessageInput;