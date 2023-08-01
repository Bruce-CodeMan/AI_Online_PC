/*
 * @Date: 2023-07-31 14:08:41
 * @Author: Bruce Hsu
 * @Description: 
 */
const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-300 to-blue-300 py-40">
      <div className="container mx-auto mt-32">
        <div className="flex w-1/2 rounded-xl bg-white mx-auto shadow-lg">
          {/* LEFT */}
          <div className="w-1/3 bg-[url('@/assets/login.jpeg')] text-white bg-contain bg-no-repeat rounded-l-lg flex flex-col item-center justify-center">
            <div>
            <h1 className="text-3xl font-bold text-center mb-8">Welcome</h1>
            </div>
            
            <div className="break-words">
              <p className="text-center">No pain No gain</p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-2/3 py-16 px-12">
            <h2 className="text-3xl mb-4">登录</h2>
            <p className="mb-4">
              Welcome to this website
            </p>
            <div className="flex flex-col gap-10">
              <input type="text" placeholder="手机号" className="border border-gray-400 py-1 px-2"/>
              <input type="text" placeholder="验证码" className="border border-gray-400 py-1 px-2"/>
              <button className="w-full bg-purple-500 py-3 text-center text-white"> Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
