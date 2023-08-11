/*
 * @Date: 2023-08-11 16:28:40
 * @Author: Bruce Hsu
 * @Description: 
 */
import clsx from "clsx"
import Captcha from "react-captcha-code"
import { useState, useEffect } from "react"
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

// Custom Imports
import LoginImg from "@/assets/images/login.svg"
// Custom Imports
import { LOGIN, SEND_CODE_MSG } from '@/graphql/auth';
import { AUTH_TOKEN } from '@/utils/constant';

const NewLogin = () => {

  const nav = useNavigate()

  const [phone, setPhone] = useState("")
  const [validPhone, setValidPhone] = useState(true)
  const [captcha, setCaptcha] = useState("")
  const [inputCaptcha, setInputCaptcha] = useState("")
  const [validCaptcha, setValidCaptcha] = useState(true)
  const [remainingTime, setRemainingTime] = useState(0)
  const [isCounting, setIsCounting] = useState(false)
  const [isSendSmsOnPhone, setIsSendSmsOnPhone] = useState(false)
  const [isSendSmsOnCaptcha, setIsSendSmsOnCaptcha] = useState(false)
  const [validateSmsCode, setValidateSmsCode] = useState(true)
  const [isSendCode, setIsSendCode] = useState(false)
  const [smsCode, setSmsCode] = useState("")
  const [invitedCode, setInvitedCode] = useState("")

  const [ run ] = useMutation(SEND_CODE_MSG)
  const [ login ] = useMutation(LOGIN)

  // 切换图片验证码
  const changeCaptchaHandler = (text: string) => {
    setCaptcha(text)
  }

  // 验证手机号是否正确的函数
  const validatePhoneHandler = (e: any) => {
    const { value } = e.target
    setPhone(value)

    // 使用正则表达式检查手机号
    const regex = /^1[3456789]\d{9}$/;
    const isValid = regex.test(value)
    setValidPhone(isValid)
    if(isValid){
      setIsSendSmsOnPhone(true)
    }else{
      setIsSendSmsOnPhone(false)
    }
  }

  // 验证图片验证码是否正确的函数
  const validateCaptchaHandler = (e: any) => {
    const { value } = e.target
    setInputCaptcha(value)

    if(value === captcha){
      setValidCaptcha(true)
      setIsSendSmsOnCaptcha(true)
    }else{
      setValidCaptcha(false)
      setIsSendSmsOnCaptcha(false)
    }
  }

  // 点击按钮即将开始倒计时
  const countDownHandler = async () => {
    // 设置倒计时时间为10秒
    const countDownTime = 5
    const currentTime = new Date().getTime()
    const endTime = currentTime + countDownTime * 1000

    // 将截止时间存储在localStorage中
    localStorage.setItem('countDownTime', endTime.toString())

    // 开始倒计时
    setRemainingTime(countDownTime)
    setIsCounting(true)

    if(isSendSmsOnCaptcha && isSendSmsOnPhone) {
      // 开始发送短信
      setValidateSmsCode(true)
      const res = await run({
        variables: {
          "tel": phone,
          "invitedCode": invitedCode
        }
      })
      if(res.data.sendCodeMsg.code === 200){
        setIsSendCode(true)
      }else{
        console.log("短信验证码发送失败")
      }
    }else{
      setValidateSmsCode(false)
    }
  }

  // 进行登录操作
  const loginHandler = async () => {
    const res = await login({
      variables: {
        "tel": phone,
        "code": smsCode
      }
    })
    if(res.data.login.code === 200){
      localStorage.setItem(AUTH_TOKEN, res.data.login.data)
      nav("/content")
      return
    }
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
    <>
      <div
        className={clsx([
          "sm:-mx-8 p-3 relative h-screen w-full overflow-hidden",
          "before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%]",
          "after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%]",
        ])}
      >
        <div className="relative z-10 sm:px-10">
          <div className="block grid-cols-2 gap-4 xl:grid">
            {/* BEGIN: Login Info */}
            <div className="flex-col hidden min-h-screen xl:flex col-span-1">
              <div className="my-auto">
                <img 
                  src={LoginImg}
                  className="w-1/2 -mt-16 ml-24"
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
            <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0 col-span-1">
              <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
                
                <div className="mt-8">
                  <div className="mt-6 flex-col">
                    <h3>手机号: {!validPhone && <span className='ml-4 font-bold text-red-500'>请输入正确的手机号</span>}</h3>
                    <input 
                      type="text" 
                      value={phone}
                      onChange={validatePhoneHandler}
                      className="mt-2 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                      placeholder="请输入手机号"
                    />
                  </div>
                  
                  <div className="flex-col mt-6">
                    <h3>邀请码:</h3>
                    <input 
                      type="text" 
                      value={invitedCode}
                      onChange={(e) => setInvitedCode(e.target.value)}
                      className="mt-2 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                      placeholder="请输入邀请码"
                    />
                  </div>
                  
                  <div className="flex-col mt-6">
                    <h3>图片验证码: {!validCaptcha && <span className='ml-4 text-red-500 font-bold'>验证码输入不正确</span>}</h3>
                    <div className="mt-2 flex">
                      <input 
                        type="text" 
                        value={inputCaptcha}
                        onChange={validateCaptchaHandler}
                        className="transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-l-md placeholder:text-slate-400/90 block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                        placeholder="请输入图片验证码"
                      />
                      <Captcha 
                        charNum={4} 
                        className="rounded-r-md w-2/3"
                        onChange={changeCaptchaHandler}
                      />
                    </div>
                    
                  </div>
                 
                  <div className="flex-col mt-6">
                    <h3>
                      短信验证码:
                      {!validateSmsCode && <span className='ml-4 text-red-500 font-bold'>检查手机号&验证码</span>}
                      {isSendCode && <span className='ml-4 text-green-500 font-bold'>请查收手机验证码</span>}
                    </h3>
                    <div className="mt-2 flex">
                      <input 
                        type="text" 
                        value={smsCode}
                        onChange={(e) => setSmsCode(e.target.value)}
                        className="transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-l-md placeholder:text-slate-400/90 block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                        placeholder="请输入短信验证码"
                      />
                      <button 
                        className='w-2/3 bg-primary text-white rounded-r-md'
                        onClick={countDownHandler}
                        disabled={isCounting}
                      >{isCounting ? `倒计时 ${remainingTime}` : '发送短信'}</button>
                    </div>
                  </div>
                  

                  <div className="mt-8">
                    <div 
                      
                      className='w-full bg-indigo-500 py-2 rounded-lg px-6 text-center text-white font-semibold leading-6 hover:bg-indigo-400 cursor-pointer'
                      onClick={loginHandler}
                    >
                      登录
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
