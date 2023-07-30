/*
 * @Date: 2023-07-26 14:13:35
 * @Author: Bruce Hsu
 * @Description: 
 */
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

// Custom Imports
import SideBar from "@/containers/Content/components/SideBar";
import ChatGPT from "@/containers/ChatGPT";
import { connectWithSocketServer } from "@/utils/socketConn";
import { store } from "@/utils/store"

const Content = () => {

  const [selectedPage, setSelectedPage] = useState("1");

  useEffect(() => {
    connectWithSocketServer();
  }, [])

  return (
    <div
      className="w-full h-screen bg-[url('@/assets/background.svg')] object-cover flex items-center"
    >
      <SideBar setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>
      <div className="flex-1 bg-glass w-full h-[96%] ml-6 mr-6 rounded-3xl">
        {selectedPage === "1" && (
          <Provider store={store}>
            <ChatGPT />
          </Provider>
          
        )}
        {selectedPage === "2" && (
          <div>James</div>
        )}
      </div>
    </div>
  )
}

export default Content;