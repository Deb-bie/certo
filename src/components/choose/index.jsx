import React from "react"
import Yellow from "../../assets/images/yellow.png"
import Girl from "../../assets/images/girl.png"

import "./index.css"

const WhyChoose = () => {
    return (
        <div className="w-[100%] h-[100%] overflow-hidden ">
            <div className='w-[100%] h-[100%] flex 4xs:flex-col md:flex-row justify-center content-center items-center 4xs:px-6 md:px-32 py-12 gap-y-12 '>
            <div className='4xs:w-[100%] md:w-[40%] relative '>
                <img src={Yellow} alt="yellow" className="w-[80%] h-auto absolute object-contain " />
                <img src={Girl} alt="girl" className="w-[80%] h-auto relative object-contain ml-6 -mt-6" />
                <div className="w-[80%] absolute bg-blue-600 "></div>
                {/* <div className="girl w-[80%] h-auto relative object-contain ml-6 -mt-6"></div> */}
            </div>

            <div className='4xs:w-[100%] md:w-[50%] h-[100%] flex flex-col justify-between '>
                <h2 className='text-[#181818] text-xl font-[700] leading-10  '>At Certo, mobile security is not an afterthought, it’s what we do.</h2>
                <p className='text-[#616161] font-[400] py-8  '>With years of experience in mobile security and spyware detection, our products have helped countless people safeguard their devices and find peace of mind.</p>

                <div className='w-[100%] flex flex-row flex-wrap gap-6'>
                    <button className='hover:scale-90 hover:transition hover:duration-500 hover:ease-in-out rounded-[10px] py-2 px-6 ml-4 bg-[#02033B] text-white text-base 4xs:w-[100%] sm:w-auto  '>
                        Get for iOS
                    </button>

                    <button className='hover:bg-[#02033B] hover:text-white rounded-[10px] py-2 px-6 ml-4 text-[#02033B] border-[1px] border-[#02033B] text-base 4xs:w-[100%] sm:w-auto   '>
                        Get for Android
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default WhyChoose
