import React from 'react'
import HeroImage from "../../assets/images/hero.png"
import FinancialTimes from "../../assets/images/financialTimes.png"
import NewYorkPost from "../../assets/images/newYork.png"
import Cnbc from "../../assets/images/cnbc.png"
import Wired from "../../assets/images/wired.png"
import Zd from "../../assets/images/zd.png"
import Readers from "../../assets/images/readers.png"
import Yellow from "../../assets/images/yellow.png"
import Girl from "../../assets/images/girl.png"
import Eye from "../../assets/images/eye.png"
// import Readers from "../../assets/images/readers.png"
// import Readers from "../../assets/images/readers.png"
// import Readers from "../../assets/images/readers.png"
// import Readers from "../../assets/images/readers.png"
// import Readers from "../../assets/images/readers.png"
// import Readers from "../../assets/images/readers.png"
// import Readers from "../../assets/images/readers.png"
// import Readers from "../../assets/images/readers.png"

import { Freedom } from '../../data/data'

import './hero.css'


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

        <div className='w-[100%] h-[100%] flex 4xs:flex-col md:flex-row justify-center content-center items-center 4xs:px-6 md:px-32 py-12 gap-y-12 '>
            <div className='4xs:w-[100%] md:w-[40%] relative '>
                <img src={Yellow} alt="yellow" className="w-[80%] h-auto absolute object-contain " />
                <img src={Girl} alt="girl" className="w-[80%] h-auto relative object-contain ml-6 -mt-6" />
                {/* <div className="hero relative object-contain ml-4 -mt-4 bg-[#404040]" ></div> */}
            </div>

            <div className='4xs:w-[100%] md:w-[50%] h-[100%] flex flex-col justify-between '>
                <h2 className='text-[#181818] text-xl font-[700] leading-10  '>At Certo, mobile security is not an afterthought, it’s what we do.</h2>
                <p className='text-[#616161] font-[400] py-8  '>With years of experience in mobile security and spyware detection, our products have helped countless people safeguard their devices and find peace of mind.</p>

                <div className='w-[100%] flex flex-row flex-wrap gap-6'>
                    <button className='rounded-[10px] py-2 px-6 ml-4 bg-[#02033B] text-white text-base 4xs:w-[100%] sm:w-auto  '>
                        Get for iOS
                    </button>

                    <button className='rounded-[10px] py-2 px-6 ml-4 text-[#02033B] border-[1px] border-[#02033B] text-base 4xs:w-[100%] sm:w-auto   '>
                        Get for Android
                    </button>
                </div>
            </div>
        </div>

        <div className='w-[100%] h-auto bg-[#F8F9FD] flex flex-col content-center items-center 4xs:px-6 sm:px-20 md:px-40 py-12 my-12 '>
            <h1 className='text-xl font-[700] text-[#181818]'>Get your freedom back, stop mobile spyware today</h1>
            <div className='w-[100%] py-12 grid 4xs:grid-cols-1 sm:grid-cols-2 gap-x-[70px]'>

                {
                    Freedom.map((item, id) => (
                        <div key={id} className='flex flex-col gap-y-4 pb-24'>
                            <span className='flex flex-row items-center gap-x-2'>
                                <img src={item.image} alt="eye" className='object-contain bg-[ #FFC247]' />
                                <p className='font-[700]'>{item.title}</p>
                            </span>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
            </div>

            <div className='w-[100%] flex flex-row items-center content-center justify-center flex-wrap gap-6'>
                <button className='rounded-[10px] py-2 px-6 ml-4 bg-[#02033B] text-white text-base 4xs:w-[100%] sm:w-auto  '>
                    Get for iOS
                </button>

                <button className='rounded-[10px] py-2 px-6 ml-4 text-[#02033B] border-[1px] border-[#02033B] text-base 4xs:w-[100%] sm:w-auto   '>
                    Get for Android
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero