import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from 'react-icons/fa';


const Contact = () => {
    const fields = [
        { label: 'Name', type: 'text' },
        { label: 'Email', type: 'text' },
        { label: 'Contact no', type: 'number' },
        { label: 'Message', type: 'textarea' },
    ]

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the email using a backend service
        window.location.href = `mailto:parthkadam2022.comp@mmcoe.edu.in?subject=Contact Us Form&body=Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    };
    return (
        <section id='Contact'>
            <div className='grid grid-cols-12 gap-6  bg-sblack text-dgreen  mx-auto p-4 md:p-10 md:pt-16'>
                <div className=' col-span-12 md:col-span-6 flex flex-col justify-between p-8 space-y-10'>
                    <h1 className='text-2xl max-w-lg font-semibold text-center'>I’m excited to hear from you! Whether you have a question, a project idea, or just want to chat, don’t hesitate to reach out!</h1>
                    <img className='h-96 mx-auto' src='letter.png' />
                </div>
                <div className=' col-span-12 md:col-span-6 flex flex-col justify-between p-4 space-y-10'>
                    <div className="bg-sblack border shadow-lg rounded-lg w-full relative p-8 space-y-6 text-[#28e98c]">
                        <h1 className="text-4xl font-bold text-center">Get In Touch</h1>
                        <img src='plane2.png' className='h-20 w-20 absolute top-1 left-5 ' />
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div className="relative">
                                <FaUser className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 pl-10 text-sm rounded-md bg-[#171718] text-[#28e98c] border border-[#28e98c] focus:ring focus:ring-[#28e98c] outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 pl-10 text-sm rounded-md bg-[#171718] text-[#28e98c] border border-[#28e98c] focus:ring focus:ring-[#28e98c] outline-none"
                                />
                            </div>

                            {/* Phone */}
                            <div className="relative">
                                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 pl-10 text-sm rounded-md bg-[#171718] text-[#28e98c] border border-[#28e98c] focus:ring focus:ring-[#28e98c] outline-none"
                                />
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 pl-10 text-sm rounded-md bg-[#171718] text-[#28e98c] border border-[#28e98c] focus:ring focus:ring-[#28e98c] outline-none h-32"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full p-3 bg-[#28e98c] text-[#171718] font-bold text-lg rounded-md hover:bg-[#1dd97a] transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact