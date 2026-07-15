import React from 'react'
import Pillar from '../../assets/images/pillar.png'

const PillarSection = () => {
  return (
    <div className='PillarSectionContainer'>
        <div className='PillarSectionContent flex flex-col lg:flex-row justify-between items-center bg-[#fae5aa]'>
            <p className='text-2xl font-bold text-black px-6 md:px-10 lg:ps-20 pt-10 md:pt-16 lg:pt-20 pb-10 md:pb-16 lg:pb-24 w-full lg:w-1/2'>

                <p className='text-3xl md:text-4xl lg:text-5xl text-amber-600 pb-1'>
                    Navratri Events & Garba in
                </p>

                <p className='text-2xl md:text-3xl lg:text-4xl pb-2'>
                    Ahmedabad 2026
                </p>

                <p className='text-2xl md:text-3xl lg:text-4xl font-black text-pink-600'>
                    વૃંદાવન નગરી
                </p>

                <p className='text-base md:text-lg text-gray-800 leading-relaxed pt-6 md:pt-8 lg:pt-10 text-justify'>
                    Vrindavan Nagri is not just another Garba night its a divine experience!
                    Immerse yourself in the magic of traditional Garba, brought to life with the spirit of Vrindavan, the sacred town of Lord Krishna. Every evening, the venue transforms into a vibrant spiritual festival with life-sized Krishna statues, floral artistry, traditional decor, and mesmerizing music. From the beats of dhol and tabla to devotional songs, every moment at Vrindavan Nagri is crafted to create an atmosphere of joy, devotion, and celebration.
                </p>

            </p>

            <img src={Pillar} alt="Pillar" className="!hidden lg:!block ... w-80 lg:w-56 h-auto lg:h-[700px] object-contain"/>
        </div>
    </div>
  )
}

export default PillarSection