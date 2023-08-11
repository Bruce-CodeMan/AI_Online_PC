/*
 * @Date: 2023-07-26 17:09:46
 * @Author: Bruce Hsu
 * @Description: 
 */
import { useState } from "react";

import { datas } from "@/data";

interface IProps {
    toggle: boolean;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const SidebarData = ({ toggle, selectedPage, setSelectedPage }: IProps) => {

  const [hover, setHover] = useState(false);

  return (
    <div>
      {datas.map((data) => {
        return (
          <div
            className={`${
              toggle ? "last:w-[3.6rem]" : "last:w-[5rem]"
            } sidebar last:absolute left-4 bottom-4
            ${
              selectedPage === data.id ? "bg-white": ""  
            }`}
            key={data.id}
            onClick={() => setSelectedPage(data.id)}
          >
            <div className="mr-8 text-[1.7rem] text-brown">{data.icon}</div>
            <div
              className={`${toggle ? 'opacity-0' : ''} ${
                hover || toggle ? 'pointer-events-none' : ''
              }`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {data.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarData;
