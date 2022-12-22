import React from 'react'
import Logo from "../../assets/logo/logo.png"
import {AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'
import {BsTwitter, BsFacebook} from "react-icons/bs"


const Footer = () => {
  return (
    <div className='w-[100%] h-[100%] bg-[#02033B] overflow-hidden '>
        <div className='w-[100%] h-[100%] flex flex-row justify-center  '>
            <div className='w-[80%] h-[100%] py-20 flex flex-col flex-wrap  '>
                <div className='w-[100%] h-[100%] pb-16 flex flex-row justify-evenly items-start content-center flex-wrap gap-y-12 '>
                    <div className='h-[100%] flex flex-col '>
                        <div className='flex flex-row items-center'>
                            <img src={Logo} alt="logo" />
                            &nbsp; &nbsp;
                            <span className='text-[#F8F9FD] text-3xl font-black '>Certo</span>
                        </div>

                        <p className='pt-4 font-[700] text-white '>Scan. Detect. Remove.</p>
                    </div>

                    <div className=' h-[100%] flex flex-col text-white '>
                        <div className='font-[700] pb-6 '>Certo</div>
                        <ul className='list-none font-[400]'>
                            <li className='font-[400] '>iPhone</li>
                            <li>Android</li>
                            <li>Help</li>
                            <li>About</li>
                            <li>Insights</li>
                        </ul>
                    </div>

                    <div className='h-[100%] flex flex-col text-white '>
                        <div className='font-[700] pb-6 '>Support</div>
                        <ul className='list-none font-[400]'>
                            <li className='font-[400] '>Contact Us</li>
                            <li>FAQ</li>
                            <li>Pricing</li>
                            <li>Privacy Policy</li>
                            <li>Terms of service</li>
                        </ul>
                    </div>

                    <div className=' flex flex-col '>
                        <h1 className='font-[700] text-[#F8F9FD] '>Sign up to our newsletter</h1>
                        <p className='font-[400] py-2 text-[#F8F9FD] '>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                        
                        <span className='flex flex-row flex-nowrap py-6'>
                            <input type="email" placeholder='Email Address' className="bg-[#F8F9FD] px-4 py-4 text-[#02033B] rounded-l-[10px] " />
                            <button className='bg-[#FFC247] px-4 py-4 rounded-r-[10px] '>Submit</button>
                        </span>

                        <div className=' w-[100%] h-[100%] pt-4 flex flex-row gap-4 text-[#F8F9FD] text-3xl  '>
                            <AiFillLinkedin />
                            <BsTwitter />
                            <BsFacebook />
                            <AiOutlineInstagram />
                        </div>
                    </div>

                </div>

                <hr className='h-[2px] ' />

                <div className='w-[100%] flex flex-row flex-wrap gap-8 justify-between py-12 text-white font-[400]'>
                    <div className=' gap-4 '>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</div>

                    <div className=' flex flex-row justify-between gap-4  '>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>

                <div className='w-[100%] flex flex-row justify-center text-white '>
                    Designed & developed by &nbsp; <span className=' text-[#FFC247] '>Bigger Picture</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer