/*
 * @Date: 2023-07-26 16:38:38
 * @Author: Bruce Hsu
 * @Description: 
 */
import { useEffect, useState } from "react"

// Custom Imports
import UserPic from "@/assets/user.png"
import { useUserContext } from "@/utils/userHooks"


interface IProp {
  toggle: boolean
}

const UserProfile = ({ toggle }: IProp) => {

  const [isLogin, setIsLogin] = useState(false)
  const { store } = useUserContext();
  
  useEffect(() => {
    if(store.id){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }
  }, [store])

  return (
    <div className={`flex gap-5 items-center ${toggle ?"bg-none ":"bg-white rounded-full p-2"}`}>
      <div className="w-[3.5rem] h-[3.5rem] flex">
        <img src={UserPic} alt="" className="w-full h-full rounded-full object-cover" />
      </div>
      <div className={`${toggle ? "hidden": ""}`}>
        <div className="text-l font-bold">{isLogin ? store.name: '未登录'}</div>
        <span className="text-[0.75rem] opacity-60">xxx</span>
      </div>
    </div>
  )
}

export default UserProfile;
