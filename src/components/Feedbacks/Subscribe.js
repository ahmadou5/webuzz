export const Subscribe = () => {
    return(
    <div>
        <div className="relative mt-[0px] flex place-items-center ml-auto mr-auto before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff]  after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
        <div
            
            className="bg-black/10 mb-16 mt-[340px] text-center lg:h-96 w-full h-1/3 flex px-12 b py-12 ml-auto mr-auto lg:flex "
          >
            <div className=" ml-auto lg:mt-auto lg:mb-auto mr-auto w-full">
              <p className="text-white text-center flex items-center font-extrabold mb-6 mt-5 text-6xl ">
                SecretPath{" "}
              </p>
              <div className="flex  flex-col lg:items-start lg:flex-row mb-9 items-center">
                <div className="items-start flex flex-col w-[100%] h-auto ml-10 mb-14">
                  <p className=" font-light text-3xl mt-1 mb-6">
                    Keep Up With Latest News From Us
                  </p>
                </div>
                <div className="relative mt-[0px] flex place-items-center ml-auto mr-auto before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff]  after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
                <div className="flex w-[90%] flex-col">
                  <p className="text-3xl font-light mb-10">
                    Subscribe to our Weekly News Letter
                  </p>
                  <div className="flex flex-row mt6 items-center mr-3 ">
                    <div className=" w-[90%] h-10 ml-3 mr-3">
                      <input
                        type="email"
                        placeholder="AndreCronje@mail.com"
                        className="h-12 w-[100%] bg-[#1E2329] outline-none px-2 rounded-2xl"
                      />
                    </div>
                    <div className=" w-[50%] h-10 ml-3 mr-3">
                      <button className="w-[100%]  px-1 text-[#1E2329] rounded-3xl ml-auto mr-auto mb-auto  bg-blue-600/50 h-12 drop-shadow-glow">
                        {" "}
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
    )
}