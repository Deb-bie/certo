import React from "react"

import Man from "../../assets/images/man.png"

const ReadMore = () => {
    return (
        <div className="w-[100%] h-[100%] overflow-hidden ">
            <div className='w-[100%] h-[100%] 4xs:px-4 md:px-12 lg:px-32 mt-[150px] flex 4xs:flex-col-reverse md:flex-row justify-center items-center gap-y-12 bg-[#F8F9FD] '>
                
                <div className='4xs:w-[90%] md:w-[45%] h-[100%] flex flex-col '>
                    <h1 className='text-[#181818] font-[700] text-xl '>Read our story</h1>
                    <p className='font-[400] text-[#616161] py-4 '>Find out why thousands trust Certo to secure their mobile world.</p>
                    <div className='w-[100%] flex flex-row flex-wrap gap-6 pb-12'>
                        <button className='hover:scale-90 hover:transition hover:duration-500 hover:ease-in-out rounded-[10px] py-2 px-6 ml-4 bg-[#02033B] text-white text-base 4xs:w-[100%] sm:w-auto  '>
                            About Us
                        </button>

                        <button className='hover:bg-[#02033B] hover:text-white rounded-[10px] py-2 px-6 ml-4 text-[#02033B] border-[1px] border-[#02033B] text-base 4xs:w-[100%] sm:w-auto   '>
                            Help Center
                        </button>
                    </div>
                </div>

                <div className=' 4xs:w-[90%] md:w-[45%] h-[100%] -mt-[120px] flex flex-row justify-center '>
                    <img src={Man} alt="man" />
                </div>
            </div>
        </div>
    )
}

export default ReadMore