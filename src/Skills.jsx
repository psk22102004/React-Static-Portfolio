import React, { useEffect } from 'react'

const Skills = () => {


    const skillArray = [
        { name: 'HTML', value: 98, imgSrc: 'html.png' },
        { name: 'React js', value: 95, imgSrc: 'react.png' },
        { name: 'Tailwind', value: 97, imgSrc: 'tailwind.png' },
        { name: 'Bootstrap', value: 90, imgSrc: 'bootstrap.png' },
        { name: 'JavaScript', value: 90, imgSrc: 'js.png' },
        { name: 'Express', value: 80, imgSrc: 'express.png' },
        { name: 'Node js', value: 80, imgSrc: 'node.png' },
        { name: 'Mongodb', value: 50, imgSrc: 'mongo.png' },
        { name: 'EJS', value: 80, imgSrc: 'ejs.png' },

    ]
    return (
        <section id='Tech'>
            <div className='bg-sblack text-dgreen mx-auto p-4 md:p-10 md:pt-16 space-y-6'>
                <h1 className='font-bold text-3xl md:text-5xl text-center'>Tech-Stack</h1>
                <div className='grid grid-cols-12 w-full p-4 gap-6'>
                    {
                        skillArray.map(
                            (ele, index) => {
                                return (
                                    <div key={index} className='Card hover:shadow-lg hover:shadow-dgreen bg-dblack p-4 space-y-6 rounded-tl-2xl rounded-br-2xl border-l-8 border-r  border col-span-12 md:col-span-6 lg:col-span-4'>
                                        <div className='flex gap-5 items-center'>
                                            <img className=' h-12 w-12 ' src={ele.imgSrc} />
                                            <h1 className='text-xl font-semibold'>{ele.name}</h1>
                                        </div>
                                        {/* PROGRESS BAR */}
                                        <div className='border h-3 rounded-full w-full '>
                                            <div className='bg-dgreen h-full' style={{ width: `${ele.value}%` }}></div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }

                </div>
            </div>
        </section>
    )
}

export default Skills