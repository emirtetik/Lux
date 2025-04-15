import Footer from '@/components/section/footer/Footer';
import Header from '@/components/section/header/Header';
import React from 'react'

interface RouteLayoutProps{
    children:React.ReactNode;
}
const RouteLayout = ({children}:RouteLayoutProps) => {
  return (
    <div className='max-w-[80vw] mx-auto'>
        <Header/>
        <div className='min-h-screen'>
        {children}
        </div>
        <div className="min-h-64"></div>
        <Footer/>
    </div>
  )
}

export default RouteLayout