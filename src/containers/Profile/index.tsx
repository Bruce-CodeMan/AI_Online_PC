/*
 * @Date: 2023-08-13 03:39:31
 * @Author: Bruce Hsu
 * @Description: 
 */

import { CameraIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";


import UserPic from "@/assets/user.png"
import { useUserContext } from "@/utils/userHooks";

const Profile = () => {

  const { store } = useUserContext();

  return (
    <div 
      className="bg-white w-full h-full rounded-lg p-4"
    >
      <h2 className="mr-auto text-lg font-medium">个人中心</h2>

      {/* BEGIN: Profile Info */}
      <div className="px-5 pt-5 mt-5 intro-y box">
          <div className="flex flex-col pb-5 -mx-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400">
            <div className="flex items-center justify-center flex-1 px-5 lg:justify-start">
              <div className="relative flex-none w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src={UserPic}
                />
                <div className="absolute bottom-0 right-0 flex items-center justify-center p-2 mb-1 mr-1 rounded-full bg-primary">
                <CameraIcon className="h-6 w-6 text-white cursor-pointer"/>
                </div>
              </div>
              <div className="ml-5">
                <div className="w-24 text-lg font-medium truncate sm:w-40 sm:whitespace-normal">
                  {store.name}
                </div>
                {/* <div className="text-slate-500 font-bold">{store.inviteCode}</div> */}
              </div>
            </div>
            <div className="flex-1 px-5 pt-5 mt-6 border-t border-l border-r lg:mt-0 border-slate-200/60 dark:border-darkmode-400 lg:border-t-0 lg:pt-0">
              <div className="font-medium text-center lg:text-left lg:mt-3">
                详细信息
              </div>
              <div className="flex flex-col items-center justify-center mt-4 lg:items-start">
                <div className="flex items-center truncate sm:whitespace-normal">
                <PhoneIcon className="h-6 w-6 text-gray-500" />
                  {store.tel}
                </div>
                <div className="flex items-center mt-3 truncate sm:whitespace-normal">
                  {/* <Lucide icon="Instagram" className="w-4 h-4 mr-2" /> Instagram */}
                  {/* demo2 */}
                </div>
                <div className="flex items-center mt-3 truncate sm:whitespace-normal">
                  {/* <Lucide icon="Twitter" className="w-4 h-4 mr-2" /> Twitter */}
                  {/* demo3 */}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-1 px-5 pt-5 mt-6 border-t lg:mt-0 lg:border-0 border-slate-200/60 dark:border-darkmode-400 lg:pt-0">
              <div className="w-1/3 py-3 text-center rounded-md">
                <div className="text-xl font-medium text-primary">{store.gpt3Value}</div>
                <div className="text-slate-500">GPT-3.5 余额</div>
              </div>
              <div className="w-1/3 py-3 text-center rounded-md">
                <div className="text-xl font-medium text-primary">{store.gpt4Value}</div>
                <div className="text-slate-500">GPT-4.0 余额</div>
              </div>
              <div className="w-1/3 py-3 text-center rounded-md">
                <div className="text-xl font-medium text-primary">{store.inviteCode}</div>
                <div className="text-slate-500">邀请码</div>
              </div>
            </div>
          </div>
        </div>
        {/* END: Profile Info */}
    </div>
  )
}

export default Profile;
