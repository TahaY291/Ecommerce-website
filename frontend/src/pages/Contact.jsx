import React from 'react'
import Title from '../components/Title.jsx'
import {assets} from '../assets/frontend_assets/assets.js'
import NewsLetterBox from '../components/NewsletterBox.jsx'

const Contact = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 border-t'>
                <Title text1={'CONTACT'} text2={'US'} />
            </div>

            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='text-gray-500'>54700 Willms Station <br /> Suite 350 , Washigton , USA</p>
                    <p className='text-gray-500'>TEL: (415) 555-0132 <br /> Email :  mtahayasin07@gmail.com  </p>
                    <p className='text-gray-500'>Careers at Forever</p>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur.</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
                </div>
            </div>
            <NewsLetterBox/>
        </div>
    )
}

export default Contact
