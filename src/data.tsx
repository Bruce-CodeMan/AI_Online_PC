/*
 * @Date: 2023-07-26 17:15:52
 * @Author: Bruce Hsu
 * @Description: 
 */
import { SiOpenai } from "react-icons/si";
import { MdOutlineImagesearchRoller } from "react-icons/md"
import { RiCouponLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { BsWallet2 } from "react-icons/bs";

export const datas = [
  {
    id: "1",
    icon: <SiOpenai />,
    text: "ChatGPT",
  },
  {
    id: "2",
    icon: <MdOutlineImagesearchRoller />,
    text: "AI 绘画",
  },
  {
    id: "3",
    icon: <BsWallet2 />,
    text: "个人中心",
  },
  {
    id: "4",
    icon: <RiCouponLine />,
    text: "健身频道"
  },
  {
    id: "5",
    icon: <FiLogOut />,
    text: "Logout",
  },
];
