import React from 'react'
import Banner from '../../components/banner'
import LogoSoup from '../../components/logoSoup'
import WhyChoose from '../../components/choose'
import Features from '../../components/features'
import Customer from '../../components/customer'
import Latest from '../../components/latest'
import Download from '../../components/download'
import ReadMore from '../../components/read'
import Footer from '../../components/footer'


const Home = () => {
  return (
    <div>
      <Banner />
      <LogoSoup />
      <WhyChoose />
      <Features />
      <Customer />
      <Latest />
      <Download />
      <ReadMore />
      <Footer />
    </div>
  )
}

export default Home