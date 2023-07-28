/*
 * @Date: 2023-07-27 15:09:17
 * @Author: Bruce Hsu
 * @Description: 
 */
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";


const ListItem = () => {
  return (
    <div className="flex flex-col">
    <div className="flex items-center h-9 gap-5 text-white mt-2 cursor-pointer w-full rounded-lg hover:bg-glass">
      <div className="ml-2">
        <ChatBubbleLeftIcon  className="h-5 w-5"/>
      </div>
      <span className="mr-2">History Bruce hsuhjfdhsjhfjassdfdsfsafasdfa</span>
    </div>

    <div className="flex items-center h-9 gap-5 text-white mt-2 cursor-pointer w-full rounded-lg hover:bg-glass">
      <div className="ml-2">
        <ChatBubbleLeftIcon  className="h-5 w-5"/>
      </div>
      <span className="mr-2">History Bruce hsuhjfdhsjhfjassdfdsfsafasdfa</span>
    </div>
    </div>
  )
}

export default ListItem;