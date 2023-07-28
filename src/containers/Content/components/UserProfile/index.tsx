/*
 * @Date: 2023-07-26 16:38:38
 * @Author: Bruce Hsu
 * @Description: 
 */

// Custom Imports
import UserPic from "@/assets/user.png"

interface IProp {
  toggle: boolean
}

const UserProfile = ({ toggle }: IProp) => {
  return (
    <div className={`flex gap-5 items-center ${toggle ?"bg-none transition-all duration-300 delay-200":"bg-white rounded-full p-2"}`}>
      <div className="min-w-[3.5rem] h-[3.5rem]">
        <img src={UserPic} alt="" className="w-full h-full rounded-full object-cover" />
      </div>
      <div className={`${toggle ? "hidden": ""}`}>
        <h3 className="text-xl font-bold">Bruce Hsu</h3>
        <span className="text-[0.75rem] opacity-60">xxx</span>
      </div>
    </div>
  )
}

export default UserProfile;