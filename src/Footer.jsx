import React from 'react'

const Footer = () => {
    return (
        <div className='p-5  flex flex-col justify-evenly items-center space-y-10 bg-dblack text-dgreen'>
            <img src='code.png' className=' w-32' />
            <h1 className='text-2xl max-w-md text-center'>Living , Learning , & Leveling Up One Day At A Time</h1>
            <div className='flex space-x-10 border border-dgreen p-4 rounded-full'>
                <a href='www.linkedin.com/in/parth-kadam-b79217286'> <img src='linkedin.png' className='h-8' /> </a>
                <a href='https://github.com/psk22102004'>  <img src='github.png' className='h-8' /> </a>
                <a href='https://www.instagram.com/parth_kadam22/'> <img src='instagram.png' className='h-8' /> </a>
            </div>
            <p className=''>©2024 @psk22102004</p>
        </div>
    )
}

export default Footer