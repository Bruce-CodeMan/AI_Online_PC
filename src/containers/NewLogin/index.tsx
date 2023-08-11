/*
 * @Date: 2023-08-11 16:28:40
 * @Author: Bruce Hsu
 * @Description: 
 */
import clsx from "clsx"

// Custom Imports
import LoginImg from "@/assets/images/login.svg"

const NewLogin = () => {
  return (
    <>
      <div
        className={clsx([
          "sm:-mx-8 p-3 relative h-screen lg:overflow-hidden",
          "before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%]",
          "after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%]",
        ])}
      >
        <div className="container relative z-10 sm:px-10">
          <div className="block grid-cols-2 gap-4 xl:grid">
            {/* BEGIN: Login Info */}
            <div className="flex-col hidden min-h-screen xl:flex">
              <div className="my-auto">
                <img 
                  src={LoginImg}
                  className="w-1/2 -mt-16"
                />
                <div className="mt-10 text-4xl font-medium leading-tight text-white -intro-x">
                  A few more clicks to <br />
                  sign in to your account.
                </div>
                <div className="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400">
                  Manage all your e-commerce accounts in one place
                </div>
              </div>
            </div>
            {/* END: Login Info */}
            {/* BEGIN: Login Form */}
            <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
              <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
                  登录
                </h2>
                <div className="mt-8">
                  <input 
                    type="text" 
                    className="mt-2 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                    placeholder="请输入手机号"
                  />

                  <input 
                    type="text" 
                    className="mt-2 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                    placeholder="请输入邀请码"
                  />

                  <input 
                    type="text" 
                    className="mt-2 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                    placeholder="请输入图片验证码"
                  />

                  <input 
                    type="text" 
                    className="mt-2 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                    placeholder="请输入短信验证码"
                  />

                  <div className="mt-2.5">
                    <div 
                      className='w-full bg-indigo-500 py-2 rounded-lg px-6 text-center text-white font-semibold leading-6 hover:bg-indigo-400 cursor-pointer'
                    >
                      前往登录
                    </div>
                </div>

                </div>
              </div>
            </div>
            {/* END: Login Form */}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewLogin;