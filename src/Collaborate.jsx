import React from 'react'

const Collaborate = () => {
    return (
        <>
          
            <div className='bg-sblack py-8 text-dgreen'>
                <div className='bg-sblack border-2 w-5/6 mx-auto rounded-2xl hover:shadow-lg hover:shadow-dgreen  flex flex-col lg:flex-row lg:  space-y-5 md:space-y-8 text-center justify-between items-center p-12'>
                    <h1 className='font-bold pt-2 text-2xl'>Wanna Collaborate !?</h1>
                    <p className='max-w-sm   md:text-start font-semibold'>Got a creative project brewing? Let’s brainstorm together! I’m here to help bring your ideas to life.</p>
                    <button className='px-6 py-2 lg:px-4 rounded-2xl border-2 font-semibold hover:bg-dblack'><a href='#Contact'> 🤟 Let’s do this </a></button>
                </div>
            </div>
        </>
    )
}

export default Collaborate