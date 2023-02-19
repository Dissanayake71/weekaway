import React from 'react'
import image from '../images/9arch.png';
import image1 from '../images/11.jpg';
import image2 from '../images/10.jpg';
import image3 from '../images/12.jpg';
import image4 from '../images/img.jpg';

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1640] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src={image} alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={image1} alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={image2} alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={image3} alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={image4} alt="/" />
            </div>
        </div>

    </div>
  )
}

export default Gallery