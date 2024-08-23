import SuccessIllustration from '@/assets/svg/success.svg?react';
import React from 'react';
import './_success.scss'

export const Success = () => {
  return (
    <section className='success-container'>
        <div className='text-container'>
            <p className='title'>Thank you</p>
            <p className='mt-2 text-secondary md:text-xl text-base md:leading-8 leading-6 description'>A member of our team will be in touch with you shortly.</p>
        </div>
        <SuccessIllustration/>
    </section>
  )
}
