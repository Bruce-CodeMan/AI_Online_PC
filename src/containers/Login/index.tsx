
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import Captcha from "react-captcha-code"

const Login = () => {

  const [phone, setPhone] = useState("")
  const [validPhone, setValidPhone] = useState(true)
  const [captcha, setCaptcha] = useState("")
  const [inputCaptcha, setInputCaptcha] = useState("")
  const [validCaptcha, setValidCaptcha] = useState(true)
  const [remainingTime, setRemainingTime] = useState(0)
  const [isCounting, setIsCounting] = useState(false)
  
  // 验证手机号是否正确的函数
  const validatePhoneHandler = (e: any) => {
    const { value } = e.target
    setPhone(value)

    // 使用正则表达式检查手机号
    const regex = /^1[3456789]\d{9}$/;
    const isValid = regex.test(value)
    setValidPhone(isValid)
  }

  // 切换图片验证码
  const changeCaptchaHandler = (text: string) => {
    setCaptcha(text)
  }

  // 验证图片验证码是否正确的函数
  const validateCaptchaHandler = (e: any) => {
    const { value } = e.target
    setInputCaptcha(value)

    if(value === captcha){
      setValidCaptcha(true)
    }else{
      setValidCaptcha(false)
    }
  }

  // 点击按钮即将开始倒计时
  const countDownHandler = () => {
    // 设置倒计时时间为10秒
    const countDownTime = 10
    const currentTime = new Date().getTime()
    const endTime = currentTime + countDownTime * 1000

    // 将截止时间存储在localStorage中
    localStorage.setItem('countDownTime', endTime.toString())

    // 开始倒计时
    setRemainingTime(countDownTime)
    setIsCounting(true)
  }

  useEffect(() => {
    const storedEndTime = localStorage.getItem("countDownTime")
    const currentTime = new Date().getTime()

    if(storedEndTime && currentTime < parseInt(storedEndTime, 10)) {
      // 计算剩余时间
      const remainingSeconds = Math.ceil((parseInt(storedEndTime, 10) - currentTime)/ 1000)

      // 开始倒计时
      setRemainingTime(remainingSeconds)
      setIsCounting(true)
    }
  }, [])

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null
    if(isCounting) {
      // 每秒更新倒计时时间
      intervalId = setInterval(() => {
        setRemainingTime((prevTime: number) => {
          if(prevTime === 1){
            // 倒计时结束
            setIsCounting(false)
            localStorage.removeItem("countDownTime")
            clearInterval(intervalId!)
          }
          return prevTime - 1
        })
      }, 1000)
    }
    return () => {
      clearInterval(intervalId!)
    }
  }, [isCounting])


  return (
    <div className="relative isolate bg-gray-900 min-h-screen">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Sports GPT</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
              integer elementum id sem. Arcu sed malesuada et magna.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel:+1 (555) 234-5678">
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="mailto:hello@example.com">
                    hello@example.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

            <div>
                <label className="block text-sm font-semibold leading-6 text-white">
                  手机号{!validPhone && <span className='ml-4 font-bold text-red-500'>请输入正确的手机号</span>}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    value={phone}
                    onChange={validatePhoneHandler}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
              </div>

              <div>
                <label className="block text-sm font-semibold leading-6 text-white">
                  图片验证码{!validCaptcha && <span className='ml-4 text-red-500 font-bold'>验证码输入不正确</span>}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    value={inputCaptcha}
                    onChange={validateCaptchaHandler}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="mt-9 mr-0">
                  <Captcha charNum={4} onChange={changeCaptchaHandler}/>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold leading-6 text-white">
                  短信验证码
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                
                <div className="mt-9 mr-0">
                  <button 
                    className='bg-white/5 py-2 rounded-lg px-6 block text-sm font-semibold leading-6 text-white'
                    onClick={countDownHandler}
                    disabled={isCounting}
                  >{isCounting ? `倒计时 ${remainingTime}` : '发送短信'}</button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold leading-6 text-white">
                  邀请码
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                
                <div className="mt-9 mr-0">
                  <button 
                    className='rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'

                  >登录体验</button>
                </div>
              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
