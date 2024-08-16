import React from 'react'
import SuccessIllustration from '@/assets/svg/success.svg?react';

const Success = () => {
  return (
    <section className='lg:px-[395px] md:px-20 px-6 lg:pt-[186px] md:py-32 py-28 flex items-center md:flex-row flex-col-reverse'>
        <div className='md:max-w-[355px] md:mr-16 mt-8 md:text-left text-center'>
            <p className='text-4xl md:text-[50px] lg:text-7xl md:leading-[60px] lg:leading-[80px] text-primary'>Thank you</p>
            <p className='mt-2 text-secondary md:text-xl text-base md:leading-8 leading-6'>A member of our team will be in touch with you shortly.</p>
        </div>
        <SuccessIllustration/>
    </section>
  )
}

export default Success