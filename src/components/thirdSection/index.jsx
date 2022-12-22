import React from 'react'
import Img1 from '../../assets/images/img1.png'
import Img2 from '../../assets/images/img2.png'
import Img3 from '../../assets/images/img3.png'
import Img4 from '../../assets/images/img4.png'
import Img5 from '../../assets/images/img5.png'
import Img6 from '../../assets/images/img6.png'
import Quote from '../../assets/images/quote.png'
import Img7 from '../../assets/images/img7.png'
import Img8 from '../../assets/images/img8.png'
import Img9 from '../../assets/images/img9.png'




const ThirdSection = () => {
  return (
    <div className='w-[100%] h-[100%] overflow-hidden'>
        <div className='w-[100%] flex 4xs:flex-col md:flex-row justify-between content-center items-center gap-y-12'>

            <div className='4xs:w-[100%] md:w-[45%] flex flex-col items-center content-start 4xs:px-12 4xs:py-12 md:py-0 md:px-0 md:pl-20 lg:pl-30 '>
                <h1 className='text-xl font-[700] text-[ #181818] '>Loved by thousands of iPhone and Android users alike</h1>
                <p className='py-12 text-[#616161] font-[400] '>Lorem ipsum dolor sit amet, adipiscing elit. Cursus nam ie egestas fringilla facilisis. Id eu facilisis risus scelerisque. Eget vel arcu fames aenean.Lorem ipsum dolor sit amet, adipiscing elit. Cursus nam ie egestas fringilla facilisis. Id eu facilisis risus scelerisque. </p>

                <div className='w-[100%]'>
                    <button className='rounded-[10px] py-2 px-6 bg-[#02033B] text-white text-base 4xs:w-[100%] sm:w-auto  '>
                        See More Reviews
                    </button>
                </div>

                <div className='w-[100%] flex flex-row items-center content-center justify-start flex-wrap py-12'>
                    <img src={Img1} alt="img1" className='w-[50px] h-[50px] rounded-[50%] border-4 border-[#F8F9FD]  ' />
                    <img src={Img2} alt="img1" className='w-[50px] h-[50px] rounded-[50%] -ml-2 border-4 border-[#F8F9FD] ' />
                    <img src={Img3} alt="img1" className='w-[50px] h-[50px] rounded-[50%] -ml-2 border-4 border-[#F8F9FD] ' />
                    <img src={Img4} alt="img1" className='w-[50px] h-[50px] rounded-[50%] -ml-2 border-4 border-[#F8F9FD] ' />
                    <img src={Img5} alt="img1" className='w-[50px] h-[50px] rounded-[50%] -ml-2 border-4 border-[#F8F9FD] ' />
                    <img src={Img6} alt="img1" className='w-[50px] h-[50px] rounded-[50%] -ml-2 border-4 border-[#F8F9FD] ' />
                </div>
            </div>

            <div className='4xs:w-[100%] md:w-[50%] h-[100%] flex flex-row '>
                <div className='w-[100%] h-[100%] 4xs:flex flex-col  sm:grid 4xs:grid-cols-1 4xs:grid-rows-1 sm:grid-cols-2 sm:grid-rows-3'>

                    <div className='h-[100%] bg-[#120C60] 4xs:col-span-1 4xs:row-span-1 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3 py-8 px-4'>
                        <div className='h-[100%] w-[100%] flex flex-col justify-evenly '>
                        <div className='flex flex-row justify-between items-center'>
                            <img src={Quote} alt="quote" className='object-contain   '/>
                            <img src={Img1} alt="img1" className='w-[50px] h-[50px] rounded-[50%] border-4 border-[#F8F9FD]  ' />
                        </div>

                        <p className=' text-[#F8F9FD] font-[400] text-base'>
                            I wish they had a VPN, I’d be signing up for that too. Apart from that the app is top notch. I had Certo on my last phone and it was the first app I put on this phone when I got it from the store. The scanner and other parts of the app are really easy and simple to use, even for a non-techie like me
                        </p>

                        <p className='text-[#F8F9FD] font-[700] text-base'>Leslie Carrillo</p>
                        </div>
                    </div>

                    <div className='bg-[#4E4EF4] 4xs:col-span-1 4xs:row-span-1 sm:col-start-2 sm:col-end-2 sm:row-start-1 sm:row-end-2 py-4 px-4'>
                        <div className='flex flex-row justify-between items-center'>
                            <img src={Quote} alt="quote" className='object-contain   '/>
                            <img src={Img7} alt="img7" className='w-[50px] h-[50px] rounded-[50%] border-4 border-[#F8F9FD]  ' />
                        </div>

                        <p className='pt-8 pb-4 text-[#F8F9FD] font-[400] text-base'>
                            Does exactly what it says. Clear to read and understand. This is now the second iPhone we’ve used it on and would certainly recommend this app.
                        </p>

                        <p className='text-[#F8F9FD] font-[700] text-base'>colinandmandy94</p>
                    </div>

                    <div className='bg-[#8789B9] col-start-2 col-end-2 row-start-2 row-end-2 py-4 px-4'>
                        <div className='flex flex-row justify-between items-center'>
                            <img src={Quote} alt="quote" className='object-contain   '/>
                            <img src={Img8} alt="img8" className='w-[50px] h-[50px] rounded-[50%] border-4 border-[#F8F9FD]  ' />
                        </div>

                        <p className='pt-8 pb-4 text-[#F8F9FD] font-[400] text-base'>
                            This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive.I  for a non-techie like me
                        </p>

                        <p className='text-[#F8F9FD] font-[700] text-base'>Phillip Colligan</p>
                    </div>

                    <div className='bg-[#26956A] col-start-1 col-end-3 row-start-3 row-end-3 py-4 px-8'>
                        <div className='w-[100%] h-[100%] flex flex-col justify-between '>
                        <div className='flex flex-row justify-between items-center'>
                            <img src={Quote} alt="quote" className='object-contain   '/>
                            <img src={Img9} alt="img9" className='w-[50px] h-[50px] rounded-[50%] border-4 border-[#F8F9FD]  ' />
                        </div>

                        <p className='pt-8 pb-4 text-[#F8F9FD] font-[400] text-base'>
                        I wish they had a VPN, I’d be signing up for that too. Apart from that the app is top notch. I had Certo on my last phone and it was the first app I put on this phone when I got it from the store. The scanner and other parts of the app are really easy and simple to use, even for a non-techie like me
                        </p>

                        <p className='text-[#F8F9FD] font-[700] text-base'>Leslie Carrillo</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection