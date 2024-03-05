"use client";
import { GlobalContext } from "@/context/context";
import { useState } from "react";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// import { ConnectButton } from "../Buttons";
import Link from "next/link";

export const Navbar = () => {

    const address = false
    // const { isWalletModal , setIsWalletModal, address, setCopy, copy, show, setShow, connect, setAddress} = GlobalContext()
    const [isModal, setIsModal] = useState(false)
    
    const handleClick = () => {
      setIsWalletModal(true);
      //alert('clicked')
    };
  
    const Pages = [
    
      
      
      
    ];
    const handleCopy = (value) => {
      navigator.clipboard.writeText(value).then(
        () => {
          // Successfully copied to clipboard
          setCopy(true);
          setTimeout(  () => 
            setCopy(false),
            1000)
          alert('address copied to clip Board')
        },
        (err) => {
          // Failed to copy to clipboard
          console.error('Could not copy address: ', err);
        }
      );
    }
    const handleCopy2 = (value) => {
      navigator.clipboard.writeText(value).then(
        () => {
          // Successfully copied to clipboard
          console.log('Address copied to clipboard');
          alert('address copied to clip Board')
          
        },
        (err) => {
          // Failed to copy to clipboard
          console.error('Could not copy address: ', err);
        }
      );
    }
    return (
      <>
        {/**for mobile view **/}
        <div
          
          className=" backdrop-blur-lg bg-clip-padding bg-opacity-60 z-10 fixed drop-shadow-glow text-white sm:flex w-[100%] h-20 lg:hidden md:hidden"
        >
          <div className="w-[98%] flex flex-row mt-1 py-2 px-2 ml-auto mr-auto h-[90%]">
            <div className="ml-0 mr-auto mt-auto mb-auto">
              <Link href={"/"}>
                <div className="text-xl font-semibold flex">
                 {/**<img className="w-[52px] h-[52px]" src="./assets/body.png" />**/}
                 <p className="text-white text-2xl font-bold ml-1">442</p>
                </div>
              </Link>
            </div>
            <div className="mr-auto ml-20 mt-auto mb-auto">
            <div onClick={handleClick} className="w-[250px] ml-auto mr-2">
             
            </div>
            </div>
          </div>
          
        </div>
        {/**for desktop view **/}
        <div
          style={{ "backdrop-filter": "blur(12px)" }}
          className="mb-5 bg-transaparent backdrop-blur-lg bg-clip-padding bg-opacity-60 fixed z-10 text-black lg:flex md:flex hidden w-[100%] h-20"
        >
          <div className="py-5 px-5  mt-auto mb-auto ml-auto mr-auto w-[98%] flex flex-row  h-[90%]">
            <div className="ml-0 mr-auto">
              <Link href={"/"}>
                <div className="text-sm flex">
                  {/**<img className="w-[52px] h-[52px]" src="./assets/body.png" />**/}
                  <p className="text-white text-3xl font-thin ml-1">Protocol 442</p>
                </div>
              </Link>
            </div>
            <div className="mr-4 ml-auto px-2 py-2">
              <div className="flex  text-white flex-row">
                {Pages.map((page, i) => (
                  <Link key={i} href={`${page.url}`} className="flex ml-2 mr-2">
                    <p className="ml-0 mr-0 text-white/80 cursor-pointer hover:font-light font-bold text-2xl">
                      {page.name}
                    </p>
                    {page.status === 'Live' && <div
                      className={` ${
                        page.status === "Live" ? "bg-blue-600/85" : "bg-gray-400"
                      }  ${
                        page.status === "Live" ? "w-[50px]" : "w-[101px]"
                      } text-center   rounded-full h-[19px]`}
                    >
                      <p
                        className={` ${
                          page.status === "Live" ? "text-white" : "text-white"
                        } mt-[2px] py-0 px-1 mr-0 text-xs`}
                      >
                        {page.status}
                      </p>
                    </div>}
                  </Link>
                ))}
                
              </div>
            </div>
            
          </div>          
        </div>
      </>
    );
  };