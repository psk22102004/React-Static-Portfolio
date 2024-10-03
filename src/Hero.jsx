import React, { useEffect } from 'react'
import NavbarMain from './NavbarMain'

const Hero = () => {


  return (
    <div className=' bg-sblack text-dgreen'>
      <NavbarMain />
      <section id='Hero'>
        <div className=' mx-auto p-4 md:p-10 flex flex-col justify-center items-center space-y-6 md:space-y-8 lg:space-y-14'>
          <h1 className='font-semibold text-lg md:text-xl lg:text-2xl'>Hello, I'm Parth 👋</h1>
          <h1 className='font-bold text-4xl md:text-5xl lg:text-7xl  text-center tracking-wide'>MERN Stack Developer</h1>
          <p className='text-center text-sm md:text-lg lg:text-xl lg:max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae blanditiis nisi eius! Et atque aliquam, voluptatem aspernatur repellat voluptates</p>
          <div className='btnContainer flex space-x-6 lg:space-x-10'>
            <button className='border px-3 lg:px-8 py-2 lg:py-3 rounded-xl font-semibold bg-dgreen text-black hover:bg-dblack hover:text-dgreen'>Get In Touch</button>
            <button className='border px-3 lg:px-8 py-2 lg:py-3 rounded-xl font-semibold bg-dblack text-dgreen hover:bg-sblack '>View Projects</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero