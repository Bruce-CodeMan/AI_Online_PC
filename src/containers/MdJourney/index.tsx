import axios from "axios"

// Custom Imports
import Loading from "./components/Loading";
import FormField from "./components/FormField";
import { useUserContext } from "@/utils/userHooks";
import preview from "@/assets/images/preview.png"
import { useState } from "react";
import { getRandomPrompt } from "@/utils/getRandomPrompt";
import { AI_DRWA_URL } from "@/utils/constant";

const MdJourney = () => {

  const { store } = useUserContext();

  const [generatingImg, setGeneratingImg] = useState(false)
  const [imgUrl, setImgUrl] = useState("")
  const [prompt, setPrompt] = useState("")


  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(prompt)
    setPrompt(randomPrompt)
  }

  const generateImgHandler = async () => {
    if(prompt){
      setGeneratingImg(true)
      const res = await axios.post(
        AI_DRWA_URL,{
          prompt,
          userId: store.id
        }
      )
      setGeneratingImg(false)
      setImgUrl(res.data.message)
    }
  }

  return (
    <div className="bg-white w-full h-full rounded-lg p-4 flex flex-col">
      <h2 className="font-extrabold text-[#222328] text-[32px]">AI画家心中的世界</h2>
      <p className="mt-2 text-[#666e75]">Browse through a collection of imaginative and visually stunning images generated by DELL-E AI</p> 

      <div className="mt-16 flex flex-col gap-5 w-full">
        <FormField 
          labelName="Prompt" 
          placehodler="请输入要生成的图片内容" 
          handleSurpriseMe={handleSurpriseMe}
          value={prompt}
        />

        <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
          {
            imgUrl==""?(
              <img 
              src={preview}
              className="w-9/12 h-9/12 object-contain opacity-40"
              // className="w-full h-full object-contain"
            />
            ): (
              <img 
              src={imgUrl}
              // className="w-9/12 h-9/12 object-contain opacity-40"
              className="w-full h-full object-contain"
            />
            )

          }
          {
            generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loading />
              </div>
            )
          }
        </div>

        <div className="mt-5 flex gap-5 w-full">
          <button
            type="button"
            className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            onClick={generateImgHandler}
          >
            {generatingImg ? '图像生成中...' : '图像生成'}
          </button>
        </div>
        
      </div>

     
    </div>
  )
}

export default MdJourney;