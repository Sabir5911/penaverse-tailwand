import React from 'react'
import Wrapper from '../shared/Wrapper'
import Button from '../shared/Button'
import { Data } from './Data/Data'
export default function Core() {
    const para='Core Course \n(Common in All Specializations)'

  
  return <>
  <section className='mt-16 lg:mt-28'>
    <Wrapper>
<div className='max-w-screen-md'>
    <div>
        <h4 className='text-teal-800 text-lg font-semibold mt-4'>Program of Studies</h4>
        <h1 className='text-6xl sm:text-5xl font-bold whitespace-pre-line'>{para}</h1>
        <p className='mt-6 text-xl'>Every participant of the program will start by completing the following three core courses:</p>        
    </div>
    <div className='mt-6'>
    <Button Text='Learn More' />

    </div>
</div>
<div className='my-20 flex md:flex-row flex-col space-x-10 '>
    {
        Data.map((elm)=>(
            <div className='border rounded-md w-4/12 py-16 flex-1 px-8 relative  flex flex-col justify-center '>
            <h4 className='font-bold text-xl'>{elm.Header}</h4>
            <p className='mt-2'>{elm.discription}</p>
            <span className='absolute -top-10 right-10 text-[170px] font-bold -z-10 text-gray-300'>{elm.Number}</span>
        </div>
        ))
    }
    

</div>

    </Wrapper>
  </section>
  </>
} 
