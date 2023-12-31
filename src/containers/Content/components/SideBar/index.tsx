/*
 * @Date: 2023-07-26 15:45:45
 * @Author: Bruce Hsu
 * @Description: 
 */
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

// Custom Imports
import UserProfile from "@/containers/Content/components/UserProfile";
import SidebarData from "../SideBarData";

interface IProps {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const SideBar = ({ selectedPage, setSelectedPage }: IProps) => {

  const [toggle, setToggle] = useState(true)

  return (
    <div className={`${toggle ? "w-[5.8rem]": ""} sidebar-container`}>
      <UserProfile toggle={toggle}/>
      <SidebarData toggle={toggle} setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>
      <div 
        className={`sidebar-button`}
        onClick={() => setToggle(!toggle)}
      >
        <ChevronLeftIcon 
          className={`h-6 w-6 ${toggle ? "rotate-180": ""} transition-all duration-300`}
        />
      </div>
    </div>
  )
}

export default SideBar;
