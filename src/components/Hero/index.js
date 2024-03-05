export const Hero = () => {
  return(
  <div className="lg:w-[90%] h-auto lg:mt-[20px] mt-4 lg:mb-[170px] ml-auto mr-auto w-[97%]">
    <div className="relative mt-0 flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-yellow-700 before:dark:opacity-10 after:dark:from-[#b99530] after:dark:via-[#ffbb01] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
    <div className="flex flex-col ml-auto mr-auto lg:flex-row">
        <div className="w-[90%] mb-11 lg:mb-2 lg:w-[50%] py-4 px-4 h-[200px] lg:h-[500px] ml-auto mr-auto ">
           <div className="mt-[100px] text-center ml-auto mr-auto py-4 px-4">
            <p className="text-3xl mb-5 lg:text-6xl py-2 px-2 font-bold">Who buzzs? ..WeBuzzzz</p>
            <p className="text-2xl lg:text-4xl py-2 px-2 font-semibold">Embark on academic excellence With news updates, lecture notes, and past questions mastery - your ultimate guide is here!</p>
           </div>
        </div>
        <div className="w-[90%] lg:w-[50%] mt-[120px] lg:mt-1 py-4 px-4 h-[200px] lg:h-[500px] ml-auto mr-auto ">
        <div className="mt-[80px]  h-[400px] py-1 px-1 w-[100%] ">
            <div className="w-[300px] h-[300px] bg-transparent/40  drop-shadow-glow2 mt-2 rounded-full ml-auto mr-auto">
             
            </div>
        </div>
        </div>
    </div>
  </div>
  )
}