/*
 * @Date: 2023-07-26 17:15:52
 * @Author: Bruce Hsu
 * @Description: 
 */
import { SiOpenai } from "react-icons/si";
import { MdOutlineImagesearchRoller } from "react-icons/md"
import { RiCouponLine } from "react-icons/ri";
import { FiUser, FiLogOut } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsFolder, BsWallet2 } from "react-icons/bs";

export const datas = [
  {
    id: "1",
    icon: <SiOpenai />,
    text: "Dashboard",
  },
  {
    id: "2",
    icon: <MdOutlineImagesearchRoller />,
    text: "Sales Insights",
  },
  {
    id: "3",
    icon: <RiCouponLine />,
    text: "Coupons",
  },
  {
    id: "4",
    icon: <FiUser />,
    text: "Team Member",
  },
  {
    id: "5",
    icon: <AiOutlineMessage />,
    text: "Messages",
  },
  {
    id: "6",
    icon: <BsFolder />,
    text: "File Manager",
  },
  {
    id: "7",
    icon: <BsWallet2 />,
    text: "Wallet",
  },
  {
    id: "8",
    icon: <FiLogOut />,
    text: "Logout",
  },
];
