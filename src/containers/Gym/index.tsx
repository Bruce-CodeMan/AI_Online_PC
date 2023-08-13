/*
 * @Date: 2023-08-13 04:41:22
 * @Author: Bruce Hsu
 * @Description: 
 */
import { motion } from "framer-motion"

import Expecting from "@/assets/images/expecting.svg"
import Flower from "@/assets/images/flower.svg"

const Gym = () => {
  return (
    <div className="bg-white w-full h-full">
      <h3 className="text-3xl text-red-800 font-bold p-4">敬请期待...</h3>
      <div className="flex items-center">
        <div className="w-1/3">
          <motion.img 
            src={Flower} 
            alt="" 
            animate={{ rotateY: 360 }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
        <div className="w-1/3">
          <img src={Expecting} alt=""/>
        </div>
        <div className="w-1/3">
          <motion.img 
            src={Flower} 
            alt="" 
            animate={{ rotateY: 360 }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  )
}
export default Gym;
