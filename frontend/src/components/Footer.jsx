import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div >
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10'>

<div>
    <img src={assets.logo} className='mb-5 w-32 ' alt="" />
    <p className='w-full md:2/3 text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat voluptatum, harum fuga illo voluptatibus!
    </p>
</div>

<div>
    <p className='text-xl font-medium mb-5'>COMPANY</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>Home</li>
        <li>About</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
    </ul>
</div>

<div>
    <p className='text-xl font-medium  mb-5'>GET IN TOUCH</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>238-1212-12-12122</li>
        <li>mtahayasin07@gmail.com</li>
    </ul>
</div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyyright 2025@ mtahayasin@gmail.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
