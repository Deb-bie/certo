import React, {useState} from 'react'
import {FaBars} from "react-icons/fa"
import {MdClose} from "react-icons/md"

import Logo from "../../assets/logo/logo.png"


const Navbar = () => {
    const [mobile, setMobile] = useState(false)

  return (
    <div className='w-[100%] h-[83px] bg-[#F8F9FD] overflow-hidden '>
        <div className='w-[100%] h-[100%] flex flex-row justify-between content-center items-center 4xs:px-4 sm:px-20 '>
            <div className='flex flex-row items-center'>
                <img src={Logo} alt="logo" />
                <span className='text-[#02033B] text-xl pl-2 font-black '>Certo</span>
            </div>

            <div className='4xs:hidden md:flex flex-row'>
                <ul className='flex flex-row justify-between content-center items-center'>
                    <li className='font-[700] md:text-[14px] lg:text-[18px] leading-[20px] text-[#02033B] '>Iphone</li>

                    <li className='pl-4 font-[400] md:text-[14px] lg:text-[18px] leading-[20px] text-[#02033B] '>Android</li>

                    <li className='pl-4 font-[400] md:text-[14px] lg:text-[18px] leading-[20px] text-[#02033B] '>Help</li>

                    <li className='pl-4 font-[400] md:text-[14px] lg:text-[18px] leading-[20px] text-[#02033B] '>Company</li>

                    <button className='rounded-[5px] py-2 px-6 ml-4 bg-[#02033B] text-white text-base  '>
                        Sign In
                    </button>

                    <button className='rounded-[5px] py-2 px-6 ml-4 text-[#02033B] border-[1px] border-[#02033B] text-base  '>
                        Sign Up
                    </button>
                </ul>
            </div>

            <div onClick={() => setMobile(!mobile)} className='4xs:flex flex-row md:hidden'>
                {
                    mobile ? <MdClose className='z-50 text-[#F8F9FD] text-3xl' /> : <FaBars />
                }
            </div>

            {
                mobile 
                ?
                    <div className='absolute 4xs:w-[100%] sm:w-[50%] flex flex-row justify-center bg-[#02033B] text-[#F8F9FD] top-0 right-0 bottom-0  '>
                        <ul className='w-[80%] h-[100%] flex flex-col justify-evenly content-center items-center pt-20 pb-12 '>
                            <li className='font-[700] md:text-[14px] lg:text-[18px] leading-[20px]  '>Iphone</li>

                            <li className='font-[400] md:text-[14px] lg:text-[18px] leading-[20px]  '>Android</li>

                            <li className='font-[400] md:text-[14px] lg:text-[18px] leading-[20px]'>Help</li>

                            <li className='font-[400] md:text-[14px] lg:text-[18px] leading-[20px]'>Company</li>

                            <button className='rounded-[5px] py-2 px-8 ml-4 bg-[#F8F9FD] text-[#02033B]   '>
                                Sign In
                            </button>

                            <button className='rounded-[5px] py-2 px-8 ml-4 text-[#F8F9FD] border-[1px] border-[#F8F9FD]   '>
                                Sign Up
                            </button>
                        </ul>
                    </div>
                : ""
            }


        </div>
    </div>
  )
}

export default Navbar