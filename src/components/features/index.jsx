import React from "react"

import { Freedom } from '../../data/data'

const Features = () => {
    return (
        <div className="w-[100%] h-[100%] overflow-hidden ">
            <div className='w-[100%] h-auto bg-[#F8F9FD] flex flex-col content-center items-center 4xs:px-6 sm:px-20 md:px-40 py-12 mt-12 '>
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
                    <button className='hover:scale-90 hover:transition hover:duration-500 hover:ease-in-out rounded-[10px] py-2 px-6 ml-4 bg-[#02033B] text-white text-base 4xs:w-[100%] sm:w-auto  '>
                        Get for iOS
                    </button>

                    <button className='hover:bg-[#02033B] hover:text-white rounded-[10px] py-2 px-6 ml-4 text-[#02033B] border-[1px] border-[#02033B] text-base 4xs:w-[100%] sm:w-auto   '>
                        Get for Android
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Features;
