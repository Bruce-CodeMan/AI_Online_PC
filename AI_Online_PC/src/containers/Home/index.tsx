/*
 * @Date: 2023-07-25 09:48:42
 * @Author: Bruce Hsu
 * @Description: 
 */
const Home = () => {
  return (
    <div 
      className='bg-gradient-to-br from-pink-300 via-white to-sky-300 h-[100vh] w-full flex flex-col space-x-4 items-center'>
      {/* SLOGAN, what's your product? */}
      <div className="bg-gradient-to-br mt-8 from-black to-slate-600 text-transparent bg-clip-text text-6xl font-semibold text-center leading-snug">
        <p>Sports change your body</p>{" "}
        <p>
        But <span className="text-[#3290EE]">AI</span> Will change your life NOW
        </p>  
      </div>

      {/* BUTTON, enter the function page */}
      <div className="my-12 w-full max-w-2xl">
        <button 
          className="w-full rounded-full bg-gradient-to-tr from-sky-400 duration-200 via-lime-300 to-yellow-400 p-1 transition transform active:scale-95"
        >
          <div 
            className="bg-white rounded-full py-2 tracking-widest font-bold"
          >
            即刻体验
          </div>
        </button>
      </div>

      {/* GRID, left is picture & right is introduce */}

      {/* CAROUSEL, ads */}
    </div>
  )
}

export default Home;