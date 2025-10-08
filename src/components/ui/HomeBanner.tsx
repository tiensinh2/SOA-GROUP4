import React from 'react'
import Title from './Title'
import Link from 'next/link'
const HomeBanner = () => {
  return (
    <div className='py-10 md:py-3 bg-shop-dark rounded-lg px-5 lg:px-24 flex items-center justify-beween text-2xl text-chart-1 font-semibold flex-col'>
        <div className='text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-0 text-chart-2 font-bold'>
          Welcome to Store
        </div>
        <div>
          <Title>Grab Upto 50% off on <br/> Select your headphone </Title>
          <Link href= {"/shop"} className = "bg-destructive-foreground text-shop-dark px-5 py-1 rounded-md text-sm font-semibold hover:text-shop-dark hover:bg-chart-3 hoverEffect">
            Shop Now
          </Link>
        </div>
        <div>
          <img src="/banner.png" alt="banner" className='w-48 md:w-72 lg:w-96'/>
        </div>
    </div>
  
  )
}

export default HomeBanner