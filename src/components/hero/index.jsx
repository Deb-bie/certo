import React from 'react'
import HeroImage from "../../assets/images/hero.png"
import FinancialTimes from "../../assets/images/financialTimes.png"
import NewYorkPost from "../../assets/images/newYork.png"
import Cnbc from "../../assets/images/cnbc.png"
import Wired from "../../assets/images/wired.png"
import Zd from "../../assets/images/zd.png"
import Readers from "../../assets/images/readers.png"




const Hero = () => {
  return (
    <div className='w-[100%] h-[100%] flex flex-col overflow-hidden  '>
        <div className='w-[100%] h-[100%] flex 4xs:flex-col md:flex-row justify-between items-center content-center 4xs:px-12 md:px-24 py-12 gap-y-6 '>
            <div className='4xs:w-[100%] md:w-[40%] h-[100%] flex flex-col justify-between '>
                <h2 className='text-[#404040] text-4xl font-[700] leading-10  '>Your mobile privacy is our mission.</h2>
                <p className='text-[#404040] font-[400] py-12  '>Think your phone has been hacked? Our trusted apps make it easy for you to scan, detect and remove threats from your iPhone and Android devices.</p>

                <div className='w-[100%] flex flex-row flex-wrap gap-6'>
                    <button className='rounded-[10px] py-2 px-6 ml-4 bg-[#02033B] text-white text-base 4xs:w-[100%] sm:w-auto  '>
                        Get for iOS
                    </button>

                    <button className='rounded-[10px] py-2 px-6 ml-4 text-[#02033B] border-[1px] border-[#02033B] text-base 4xs:w-[100%] sm:w-auto   '>
                        Get for Android
                    </button>
                </div>
            </div>

            <div className='4xs:w-[100%] md:w-[50%] h-[20%]'>
                <img src={HeroImage} alt="hero" className='w-[100%] h-[100%] object-contain  ' />
            </div>
        </div>

        <div className='w-[100%] h-[95px] px-12 my-12 bg-[#F8F9FD] flex flex-row justify-between overflow-x-auto gap-12 '>
            <img src={FinancialTimes} alt="financial times" className='w-[130px] h-auto object-contain' />
            <img src={NewYorkPost} alt="New York" className='w-[130px] h-auto object-contain' />
            <img src={Cnbc} alt="cnbc" className='w-[59px] h-auto object-contain' />
            <img src={Wired} alt="wired" className='w-[130px] h-auto object-contain' />
            <img src={Zd} alt="zd" className='w-[69px] h-auto object-contain' />
            <img src={Readers} alt="readers" className='w-[130px] h-auto object-contain' />
        </div>
    </div>
  )
}

export default Hero