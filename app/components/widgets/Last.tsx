import Image from 'next/image'
import React from 'react'
import Wrapper from '../shared/Wrapper'
export const Last = () => {
  return <>
  <section className='mt-16'>
    <Wrapper>

<div className='grid grid-cols-2  items-center'>
<div >
    <Image  src={'/img.svg'} alt='img' width={'500'} height='500'/>
</div>

<div>
    <h1 className='text-4xl font-semibold '>The Outcome for Participants of the Program</h1>
    <p className='text-lg font-normal mt-5'>
    As a graduate of this program, you will own valuable products such as Full-Stack App Templates,
     AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have 
     the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability
      while contributing to
     the growth of Pakistan's software exports.
    </p>

</div>

</div>

    </Wrapper>
  </section>
  </>
}
