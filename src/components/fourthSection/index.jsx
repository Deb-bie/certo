import React from 'react'
import {CgArrowLongRight} from "react-icons/cg"
import {BsCalendar4Week} from "react-icons/bs"
import Line from "../../assets/images/line.png"

import "./index.css"


const FourthSection = () => {
  return (
    <div className='w-[100%] h-[100%] bg-[#F8F9FD] overflow-hidden pt-28'>
        <div className='w-[100%] h-[100%] 4xs:px-6 sm:px-18 md:px-32 py-12 gap-y-8 flex 4xs:flex-col-reverse md:flex-row justify-between items-start content-center '>
            <div className='4xs:w-[100%] md:w-[20%] flex flex-col   '>
                <h1 className='font-[700] text-2xl text-[#181818] '>Latest Insights</h1>

                <p className='font-[400] py-12 text-base '>How we help our users to keep their devices safe through information</p>

                <span className='flex flex-row items-center  text-[#4335DE] font-[400] '>
                    <a href='#' >View all insights</a>
                    &nbsp;
                    <CgArrowLongRight />
                </span>
            </div>

            <div className='4xs:w-[100%] md:w-[65%] h-[100%] flex flex-col items-start relative '>

                <div class="four top">
                    <div className='w-[100%] h-[100%] flex flex-col justify-between'>
                        <div className='text-white w-[100%] px-8 py-8 flex flex-row justify-between flex-wrap gap-y-8  '>
                            <button className=' px-8 py-4 font-[400] rounded-[5px] bg-[#F8F9FD] text-[#181818] '>Expertise</button>

                            <div className='flex flex-row items-center text-[#F8F9FD] font-[400] text-base '>
                                <BsCalendar4Week /> &nbsp; &nbsp;
                                <span>November 30, 2022</span>
                            </div>
                        </div>

                        <div className='4xs:w-[100%] md:w-[70%] h-[50%] px-8 pt-20 flex flex-col items-start text-[#F8F9FD] '>
                            <h1 className='font-[700] text-lg '>Certo AntiSpy vs iVerify- what is the best tool to detect spyware on iPhones?</h1>
                            
                            <p className='font-[400] text-sm py-4  '>If you are an iPhone user concerned about spyware, you may have noticed that while there are many iOS security apps available, hardly any of them claim to offer spyware or threat detection.</p>

                            <span className='flex flex-row items-center text-sm font-[400] pb-8 '>
                                Read More
                                &nbsp;
                                <CgArrowLongRight />
                            </span>
                        </div>
                    </div>
                </div>

                <div className='pt-20 w-[100%] h-[100%] flex flex-col  '>
                    <img src={Line} alt="line" />
                    <div className='w-[100%] py-8 flex flex-row justify-around text-[#181818] font-[700] '>
                        <span >EXPERTISE</span>
                        <span >GUIDES</span>
                        <span >NEWS</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FourthSection