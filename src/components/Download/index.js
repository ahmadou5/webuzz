export const Download = () => {
    return(
    <div className="w-full mt-[160px] h-[400px]">
        <div className="mt-6 mb-4 py-8 px-8">
            <p className="lg:text-4xl text-2xl text-center font-extrabold">Get Benefit of WeBuzz</p>
        </div>
        <div className="w-[60%] mt-[90px] ml-auto flex lg:flex-row flex-col mr-auto">
           <div className="bg-white/20 cursor-pointer py-2.5 px-3 lg:mt-0 mt-3 lg:mb-0 mb-2 ml-auto mr-auto w-[260px] h-[80px] rounded-2xl">
           <a href='https://amaar305.github.io/Webuzzapp/file/webuzz-app-updated.apk' download="MyExampleDoc">
           <div className="flex">
                <img className="w-16 h-16 ml-2 mr-2"  src="./fff.png"/>
                <div className="py-1 px-1">
                    <p className="">Get it on</p>
                    <p className="text-2xl">Google Play</p>
                </div>
            </div>
           </a>
           </div>
           <div className="bg-white/20 cursor-pointer py-2.5 px-1 lg:mt-0 mt-3 lg:mb-0 mb-2 ml-auto mr-auto w-[260px] h-[80px] rounded-2xl">
            <div className="flex">
                <img className="w-16 h-16 ml-2 mr-2"  src="./app.png"/>
                <div className="py-1 px-1">
                    <p className="">Coming soon on</p>
                    <p className="text-2xl">Apple Store</p>
                </div>
            </div>
           </div>
        </div>
    </div>
    )
}