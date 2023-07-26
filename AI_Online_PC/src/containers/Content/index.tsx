/*
 * @Date: 2023-07-26 14:13:35
 * @Author: Bruce Hsu
 * @Description: 
 */

// Custom Imports
import SideBar from "@/containers/Content/components/SideBar";

const Content = () => {
  return (
    <div
      className="w-full h-screen bg-back object-cover flex items-center"
    >
      <SideBar />
      <div className="flex-1 bg-glass w-full h-[96%] ml-6 mr-6 rounded-3xl">

      </div>
    </div>
  )
}

export default Content;