import React from 'react'
import image from '../images/2.png';

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src={image} alt="/" 
        className='w-full h-full object-cover'/>

        <div className='max-w-[1140px] m-auto'>
          <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] flex flex-col text-white p-4'> 
            <h1 className='font-bold text-xl'>Find Your Special Trip</h1>
            <h2 className='text-4xl p-4 italic'>With FlipFop</h2>
            <p>The Pragser Wildsee, or Lake Prags, Lake Braies is 
              a lake in the Prags Dolomites in South Tyrol, Italy.
               It belongs to the municipality of Prags which is 
               located in the Prags Valley. During World War II 
               it was the destination of the transport of 
               concentration camp inmates to Tyrol</p>
        </div>
    </div>
    </div>
  )
}

export default Hero