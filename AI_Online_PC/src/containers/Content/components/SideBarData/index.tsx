/*
 * @Date: 2023-07-26 17:09:46
 * @Author: Bruce Hsu
 * @Description: 
 */
import React from "react";

import { datas } from "@/data";

interface IProps {
    toggle: boolean
}

const SidebarData = ({ toggle }: IProps) => {
  return (
    <div className="">
      {datas.map((data) => {
        return (
          <div
            className={`${
              toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`}
            key={data.id}
          >
            <div className="mr-8 text-[1.7rem] text-brown">{data.icon}</div>
            <div
              className={`${
                toggle ? "opacity-0 delay-200" : ""
              } text-[1rem] text-brown whitespace-pre`}
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
