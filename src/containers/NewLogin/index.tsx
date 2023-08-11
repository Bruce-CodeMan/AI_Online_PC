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
              </div>
            </div>
            {/* END: Login Info */}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewLogin;