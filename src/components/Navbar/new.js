'use client'
import { IoMenu,IoLogoGithub,  } from "react-icons/io5";
import { motion } from 'framer-motion';
//import { GlobalContext } from "@/context/context";
import { useState } from "react";
//import { formatAddress } from "@/config/format";
// import { Alert } from "@/suspense/Alert";
export const Navbar2 = () => {
    const [isActive, setisActive] = useState()
    //const { setIsConnectModal, address:userAddress } = GlobalContext()
    const Menu = [
      
    ]
    const userAddress = false
    return(
        
    <>
    <nav className="lg:w-[100%] w-[100%] px-6 z-0 mt-8  fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full backdrop-blur-lg bg-clip-padding bg-opacity-60 md:w-880 bg-navBar p-4 rounded-full flex items-center">
          <p className="text-lg text-slate-200 ml-4 mr-4 font-medium">
            WeBuzz
          </p>

          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            {
                Menu && Menu.map((menu,i) => (
                    <>
                    <a key={i} className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">{menu.name}</a>
                    </>
                ))
            }
           {
           <a className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out">Download</a>
           }
           
          </div>
          <div className="block md:hidden ml-auto cursor-pointer" onClick={()=> setisActive(!isActive)}>
            <IoMenu className="text-2xl text-textBase" />
          </div>
          
          {isActive && (
            <div className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col ml-auto mr-auto items-center justify-evenly gap-6">
              <a href="#home" onClick={() => setisActive(false)} className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Features</a>
              <a href="#about" onClick={() => setisActive(false)} className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Pricing</a>
              <a href="#projects" onClick={() => setisActive(false)} className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Feedback</a>
              <a href="#contact" onClick={() => setisActive(false)} className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Download</a>
             
            </div>
          )}
        </div>
      </nav>
    </>
    )
}