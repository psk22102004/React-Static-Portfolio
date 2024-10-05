import React, { useState } from 'react';
import { Button, Modal } from "flowbite-react";

const Projects = () => {

    const [openModal, setOpenModal] = useState(false);

    const projectsArray = [
        { iconSrc: 'cardIcons/court.png', title: 'EquiLaw', illustration: 'illustrations/web-ill1.png', projectImg: ['projectImages/equilawCover.png', 'projectImages/equilawCover2.png', 'projectImages/equilawCover3.png', 'projectImages/equilawCover4.png', 'projectImages/equilawCover5.png'], desc: 'lorem ipsum Lorem ipsum dolor sit Et atque aliquam, voluptatem aspernatur repellat voluptates' },
        { iconSrc: 'cardIcons/materials.png', title: 'Materials', illustration: 'illustrations/materialIllustration.png', projectImg: ['projectImages/material1.png', 'projectImages/material2.png', 'projectImages/material3.png', 'projectImages/material4.png', 'projectImages/material5.png', 'projectImages/material6.png'], desc: 'lorem ipsum Lorem ipsum dolor sit Et atque aliquam, voluptatem aspernatur repellat voluptates' },
        { iconSrc: 'cardIcons/doctor.png', title: '800 Doctors', illustration: 'illustrations/doctorIllustration.png', projectImg: ['projectImages/doctor1.png', 'projectImages/doctor2.png', 'projectImages/doctor3.png', 'projectImages/doctor4.png', 'projectImages/doctor5.png', 'projectImages/doctor6.png', 'projectImages/doctor7.png', 'projectImages/doctor8.png'], desc: 'lorem ipsum Lorem ipsum dolor sit Et atque aliquam, voluptatem aspernatur repellat voluptates' },
        { iconSrc: 'cardIcons/tennis.png', title: 'Tennis Academy Website', illustration: 'illustrations/tennis.jpg', projectImg: ['projectImages/tennis1.png', 'projectImages/tennis2.png', 'projectImages/tennis3.png', 'projectImages/tennis4.png', 'projectImages/tennis5.png', 'projectImages/tennis6.png', 'projectImages/tennis7.png'], desc: 'lorem ipsum Lorem ipsum dolor sit Et atque aliquam, voluptatem aspernatur repellat voluptates' },
        { iconSrc: 'cardIcons/tourism.png', title: 'Tourism Website', illustration: 'illustrations/tourismIllustration.png', desc: 'lorem ipsum Lorem ipsum dolor sit Et atque aliquam, voluptatem aspernatur repellat voluptates' },
        { iconSrc: 'cardIcons/farming.png', title: 'FarmConnect', illustration: 'illustrations/farmingIllustration.png', desc: 'lorem ipsum Lorem ipsum dolor sit Et atque aliquam, voluptatem aspernatur repellat voluptates' },
        { iconSrc: 'cardIcons/finance.png', title: 'Finanger', illustration: 'illustrations/financeIllustration.png', desc: 'lorem ipsum Lorem ipsum dolor sit Et atque aliquam, voluptatem aspernatur repellat voluptates' },
    ];

    const [currentProject, setCurrentProject] = useState(null);

    const handleClick = (ele) => {
        setCurrentProject(ele);
        setOpenModal(true);
    };

    return (
        <section id='Projects'>
            <div className=' bg-sblack text-dgreen mx-auto p-4 md:p-10 md:pt-16 space-y-6'>
                <h1 className='font-bold text-3xl md:text-5xl text-center'>My Projects</h1>
                <div className='grid grid-cols-12 w-full p-6 gap-6'>
                    {projectsArray.map((ele, index) => (
                        <div key={index} className='border border-black p-8 md:p-6 space-y-6 rounded-lg bg-[#96c2fa] shadow-md shadow-dgreen hover:shadow-lg hover:shadow-dgreen col-span-12 md:col-span-6 lg:col-span-4'>
                            <img src={ele.illustration} className='h-44 mx-auto w-auto ' alt={`${ele.title} Illustration`} />
                            <hr className='bg-green-200 text-black h-0.5 w-full' />
                            <div className='flex flex-col text-black space-y-6'>
                                <div className='flex items-center'>
                                    <img className='h-12 w-12 bg-white p-1 rounded-lg mr-4' src={ele.iconSrc} alt={`${ele.title} Icon`} />
                                    <h1 className='font-bold text-3xl tracking-wide'>{ele.title}</h1>
                                </div>
                                <p className='font-semibold text-sm mb-4'>{ele.desc}</p>
                                <div className='mt-auto'>
                                    <button onClick={() => handleClick(ele)} className='px-4 py-2 border font-semibold rounded-md bg-sblack hover:bg-dblack'>Image Gallery</button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <Modal dismissible show={openModal} size='4xl' onClose={() => setOpenModal(false)}>
                        <Modal.Header>Project Image Gallery</Modal.Header>
                        <Modal.Body className='w-full bg-dblack'>
                            <div className='p-4 w-full overflow-auto h-full space-y-4 border-2 bg-dblack'>
                                {currentProject && currentProject.projectImg ? (
                                    currentProject.projectImg.map((imgSrc, imgIndex) => (
                                        <img key={imgIndex} src={imgSrc} className='w-full' alt={`Project ${currentProject.title} Image ${imgIndex + 1}`} />
                                    ))
                                ) : (
                                    <h1 className='text-3xl text-white'>Images coming soon!</h1>
                                )}
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </section>
    );
};

export default Projects;
