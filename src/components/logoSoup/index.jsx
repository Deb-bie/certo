import React from "react"
import FinancialTimes from "../../assets/images/financialTimes.png"
import NewYorkPost from "../../assets/images/newYork.png"
import Cnbc from "../../assets/images/cnbc.png"
import Wired from "../../assets/images/wired.png"
import Zd from "../../assets/images/zd.png"
import Readers from "../../assets/images/readers.png"


const LogoSoup = () => {
    return (
        <div className="w-[100%] h-[100%] overflow-hidden ">
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

export default LogoSoup