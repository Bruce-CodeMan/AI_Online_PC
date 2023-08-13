/*
 * @Date: 2023-07-26 14:13:35
 * @Author: Bruce Hsu
 * @Description: 
 */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Custom Imports
import SideBar from "@/containers/Content/components/SideBar";
import ChatGPT from "@/containers/ChatGPT";
import MdJourney from "@/containers/MdJourney";
import Profile from "@/containers/Profile";
import Gym from "@/containers/Gym";
import { AUTH_TOKEN } from "@/utils/constant";

const Content = () => {

  const nav = useNavigate()
  const [selectedPage, setSelectedPage] = useState("1");

  const logoutHandler = () => {
    localStorage.removeItem(AUTH_TOKEN)
    nav("/login")
    return <></>
  }

  return (
    <div
      className="w-full h-screen bg-[url('@/assets/background.svg')] object-cover flex items-center"
    >
      <SideBar setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>
      <div className="flex-1 bg-glass w-full h-[96%] ml-6 mr-6 rounded-3xl">
        {selectedPage === "1" && (
            <ChatGPT />
          
        )}
        {selectedPage === "2" && (
          <MdJourney />
        )}
        {selectedPage === "3" && (
          <Profile />
        )}
        {selectedPage === "4" && (
          <Gym />
        )}
        {selectedPage === "5" && logoutHandler()}
      </div>
    </div>
  )
}

export default Content;
