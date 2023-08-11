/*
 * @Date: 2023-08-11 16:28:40
 * @Author: Bruce Hsu
 * @Description: 
 */
import clsx from "clsx"

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

      </div>
    </>
  )
}

export default NewLogin;