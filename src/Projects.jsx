import React, { useState } from 'react'
import { Button, Modal } from "flowbite-react";

const Projects = () => {

    const [openModal, setOpenModal] = useState(false);

    const projectsArray = [
        { iconSrc: 'cardIcons/court.png', title: 'EquiLaw', illustration: 'illustrations/web-ill1.png', projectImg: ['projectImages/equilawCover.png', 'projectImages/equilawCover2.png', 'projectImages/equilawCover3.png'], desc: 'lorem ipsum Lorem ipsum dolor sit Et atque aliquam, voluptatem aspernatur repellat voluptates' },
        { iconSrc: 'cardIcons/materials.png', title: 'Materials', illustration: 'illustrations/materialIllustration.png', projectImg: ['projectImages/material1.png', 'projectImages/material2.png', 'projectImages/material3.png'], desc: 'lorem ipsum Lorem ipsum dolor sit Et atque aliquam, voluptatem aspernatur repellat voluptates' },
        { iconSrc: 'cardIcons/doctor.png', title: '800 Doctors', illustration: 'illustrations/doctorIllustration.png', projectImg: ['projectImages/doctor1.png', 'projectImages/doctor2.png', 'projectImages/doctor3.png'], desc: 'lorem ipsum Lorem ipsum dolor sit Et atque aliquam, voluptatem aspernatur repellat voluptates' },
        { iconSrc: 'cardIcons/tennis.png', title: 'Tennis Academy Website', illustration: 'illustrations/tennis.jpg', projectImg: ['projectImages/equilawCover.png', 'projectImages/equilawCover2.png', 'projectImages/equilawCover3.png'], desc: 'lorem ipsum Lorem ipsum dolor sit Et atque aliquam, voluptatem aspernatur repellat voluptates' },
        { iconSrc: 'cardIcons/tourism.png', title: 'Tourism Website', illustration: 'illustrations/tourismIllustration.png', projectImg: ['projectImages/equilawCover.png', 'projectImages/equilawCover2.png', 'projectImages/equilawCover3.png'], desc: 'lorem ipsum Lorem ipsum dolor sit Et atque aliquam, voluptatem aspernatur repellat voluptates' },
        { iconSrc: 'cardIcons/farming.png', title: 'FarmConnect', illustration: 'illustrations/farmingIllustration.png', projectImg: ['projectImages/equilawCover.png', 'projectImages/equilawCover2.png', 'projectImages/equilawCover3.png'], desc: 'lorem ipsum Lorem ipsum dolor sit Et atque aliquam, voluptatem aspernatur repellat voluptates' },
        { iconSrc: 'cardIcons/finance.png', title: 'Finanger', illustration: 'illustrations/financeIllustration.png', projectImg: ['projectImages/equilawCover.png', 'projectImages/equilawCover2.png', 'projectImages/equilawCover3.png'], desc: 'lorem ipsum Lorem ipsum dolor sit Et atque aliquam, voluptatem aspernatur repellat voluptates' },
    ]

    const [currentProjectImgs, setCurrentProjectImgs] = useState(null);

    const handleClick = (ele)=> {
        setCurrentProjectImgs(ele)
        setOpenModal(true)
    }

    return (
        <div className=' bg-sblack text-dgreen  mx-auto p-4 md:p-10 md:pt-16 space-y-6'>
            <h1 className='font-bold text-3xl md:text-5xl text-center'>My Projects</h1>
            <div className='grid grid-cols-12 w-full p-6 gap-6'>
                {projectsArray.map(
                    (ele, index) => (
                        <div key={index} className='border p-8 md:p-6  space-y-6 rounded-lg bg-dblack  hover:shadow-lg hover:shadow-dgreen col-span-12 md:col-span-6 lg:col-span-4'>
                            <img src={ele.illustration} className='h-44 mx-auto w-auto ' />
                            <hr className='bg-green-200 text-white h-0.5 w-full ' />
                            <div className='flex flex-col space-y-6'>
                                <div className='flex items-center '>
                                    <img className='h-12 w-12 bg-white p-1 rounded-lg mr-4' src={ele.iconSrc} alt="Project Icon" />
                                    <h1 className='font-bold text-3xl tracking-wide'>{ele.title}</h1>
                                </div>
                                <p className='font-semibold text-sm mb-4'>{ele.desc}</p>
                                <div className='mt-auto'>
                                    <button onClick={() => { handleClick(ele) }} className='px-4 py-2 border font-semibold rounded-md bg-sblack hover:bg-dblack'>Image Gallery</button>
                                </div>
                            </div>

                            <Modal dismissible show={openModal} size='2xl' onClose={() => setOpenModal(false)}>
                                <Modal.Header>Project Image Gallery</Modal.Header>
                                <Modal.Body className='w-full bg-dblack '>
                                    <div className='p-4 w-full overflow-auto h-full space-y-4 border-2 bg-dblack'>
                                        {
                                            currentProjectImgs && currentProjectImgs.projectImg.map(
                                                (imgSrc) => (
                                                    <img src={imgSrc} className='w-full ' />
                                                )
                                            )
                                        }
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>



                    )
                )}

            </div>
        </div>
    )
}

export default Projects