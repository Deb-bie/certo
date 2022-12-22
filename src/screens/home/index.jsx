import React from 'react'
import FifthSection from '../../components/fifthSection'
import Footer from '../../components/footer'
import FourthSection from '../../components/fourthSection'
import Hero from '../../components/hero'
import ThirdSection from '../../components/thirdSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </div>
  )
}

export default Home