import React from 'react'
import image from '../images/4.png';
import image1 from '../images/Haputale.png';
import image2 from '../images/Ella.png';
import image3 from '../images/7.png';


const Activities = () => {
  return (
    <div className='max-w-[1360px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Places</h3>
            < img className='w-full h-full object-cover relative border-4 border-white shadow-lg'  src={image} alt="/" />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Places</h3>
            < img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={image1} alt="/" />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Places</h3>
            < img className='w-full h-full object-cover relative border-4 border-white shadow-lg'src={image2} alt="/" />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Places</h3>
            < img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={image3} alt="/" />
        </div>
        
       
    </div>
  )
}

export default Activities