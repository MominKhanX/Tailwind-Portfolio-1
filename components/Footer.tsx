import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'


const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10' id="contact">
      
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
            Ready to take your <span className="text-purple">digital presence</span> to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
            Ready to turn your ideas into reality? Reach out today!
        </p>
        <a href="mailto:momin.khan.khi23@gmail.com">
            <MagicButton  
              title="Let&apos;s get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mt-52">Copyright © 2024 Momin</p>

        
        <div className="space-y-4">

<div className="flex items-center space-x-4">


  <div>
      <h2 className="font-bold text-lg text-[#FA3830]">ADDRESS</h2>
      <p className="text-md">North Karachi, karachi, Pakistan</p>
  </div>

</div>

<div className="flex items-center space-x-4">

  <div>
    <h2 className="font-bold text-lg text-[#FA3830]">PHONE</h2>
    <p className="text-md">+92 319-6987355</p>
  </div>

</div>

<div className="flex items-center space-x-4">

  <div>
    <h2 className="font-bold text-lg text-[#FA3830]">Email:</h2>
    <p className="text-md">momin.khan.khi23@gmail.com</p>
  </div>

</div>

<div className="flex items-center space-x-4">

  <div>
    <h2 className="font-bold text-lg text-[#FA3830]">WEBSITE</h2>
    <p className="text-md">www.Example.com</p>
  </div>

</div>

</div>

      </div>
    </footer>
  )
}

export default Footer
