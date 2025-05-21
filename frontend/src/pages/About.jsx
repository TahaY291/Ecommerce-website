import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/frontend_assets/assets.js'
import NewsLetterBox from '../components/NewsletterBox.jsx'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={'US'}/>
            </div>
            <div className='my-10 flex  flex-col md:flex-row gap-16'>
                <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quam, numquam quod accusantium provident impedit velit dolore iusto ab error!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt expedita tempore delectus vitae amet voluptatibus.</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quod amet, itaque quibusdam eius inventore nulla doloribus explicabo?</p>

                </div>
            </div>
            <div className='text-4xl py-4 '>
                <Title text1={'WHY'} text2={'CHOOSE'} />
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col  gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatum!</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col  gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatum!</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col  gap-5'>
                    <b>Exceptional Customer Services</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatum!</p>
                </div>
            </div>


            <NewsLetterBox/>
        </div>
    )
}

export default About
