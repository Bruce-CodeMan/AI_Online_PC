/*
 * @Date: 2023-08-13 04:41:22
 * @Author: Bruce Hsu
 * @Description: 
 */

import Expecting from "@/assets/images/expecting.svg"
import Flower from "@/assets/images/flower.svg"

const Gym = () => {
  return (
    <div className="bg-white w-full h-full">
      <h3 className="text-3xl text-red-800 font-bold p-4">敬请期待...</h3>
      <div className="flex items-center">
        <div className="w-1/3">
          <img src={Flower} alt="" />
        </div>
        <div className="w-1/3">
          <img src={Expecting} alt=""/>
        </div>
        <div className="w-1/3">
          <img src={Flower} alt="" />
        </div>
      </div>
    </div>
  )
}
export default Gym;