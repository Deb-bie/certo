import React from 'react'
import Design from "../../assets/images/design.png"
import Android from "../../assets/images/android.png"
import Google from "../../assets/images/google.png"
import Apple from "../../assets/images/apple.png"
import Man from "../../assets/images/man.png"


const FifthSection = () => {
  return (
    <div className='w-[100%] h-[100%] overflow-hidden pt-20'>
        <div className='w-[100%] h-[100%] flex flex-col gap-y-12 '>
            <div className='w-[100%] h-[100%] flex flex-row justify-center items-center content-center '>
                <div className='4xs:w-[95%] md:w-[70%] h-[100%] 4xs:px-6 md:px-12 lg:px-24 pt-20 bg-[#FFC247] rounded-[20px] flex 4xs:flex-col md:flex-row gap-y-12 justify-between content-center items-center'>
                    <div className='4xs:w-[100%] md:w-[40%] h-[100%] flex flex-row justify-center'>
                        <img src={Android} alt="android" className='' />
                    </div>

                    <div className='h-[100%] 4xs:w-[100%] md:w-[50%] flex flex-col items-start pb-12 '>
                        <h1 className='font-[700] text-[#181818] '>Get the mobile app and register with us.</h1>
                        <p className='text-[400] text-[#404040] py-8 '>Create an account with Certo to enjoy a fast, safe and reliable security service. Make life easy and simple</p>
                        <div className='w-[100%] flex flex-row '>
                            <img src={Google} alt="google" />
                            <img src={Apple} alt="apple" className='pl-8' />
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='w-[100%] h-[100%] 4xs:px-4 md:px-12 lg:px-32 mt-[150px] flex 4xs:flex-col-reverse md:flex-row justify-center items-center gap-y-12 bg-[#F8F9FD] '>
                
                <div className='4xs:w-[90%] md:w-[45%] h-[100%] flex flex-col '>
                    <h1 className='text-[#181818] font-[700] text-xl '>Read our story</h1>
                    <p className='font-[400] text-[#616161] py-4 '>Find out why thousands trust Certo to secure their mobile world.</p>
                    <div className='w-[100%] flex flex-row flex-wrap gap-6 pb-12'>
                        <button className='rounded-[10px] py-2 px-6 ml-4 bg-[#02033B] text-white text-base 4xs:w-[100%] sm:w-auto  '>
                            About Us
                        </button>

                        <button className='rounded-[10px] py-2 px-6 ml-4 text-[#02033B] border-[1px] border-[#02033B] text-base 4xs:w-[100%] sm:w-auto   '>
                            Help Center
                        </button>
                    </div>
                </div>

                <div className=' 4xs:w-[90%] md:w-[45%] h-[100%] -mt-[120px] flex flex-row justify-center '>
                    <img src={Man} alt="man" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FifthSection