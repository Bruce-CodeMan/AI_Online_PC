/*
 * @Date: 2023-07-26 14:13:35
 * @Author: Bruce Hsu
 * @Description: 
 */

// Custom Imports
import SideBar from "@/containers/Content/components/SideBar";
import { useState } from "react";

const Content = () => {

  const [selectedPage, setSelectedPage] = useState("1");

  return (
    <div
      className="w-full h-screen bg-back object-cover flex items-center"
    >
      <SideBar setSelectedPage={setSelectedPage}/>
      <div className="flex-1 bg-glass w-full h-[96%] ml-6 mr-6 rounded-3xl">
        {selectedPage === "1" && (
          <div>Bruce</div>
        )}
        {selectedPage === "2" && (
          <div>James</div>
        )}
      </div>
    </div>
  )
}

export default Content;