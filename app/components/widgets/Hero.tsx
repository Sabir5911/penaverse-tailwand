import Image from 'next/image'
import React from 'react'
import Wrapper from '../shared/Wrapper'
import hero from '../../assets/hero.svg'
import Button from '../shared/Button'
function Hero() {
  return <>
    <section>

      <Wrapper>

        <div className='flex flex-col md:flex-row items-center '>
          {/* Left side for content */}
          <div className='flex-1'>
          <h4 className='text-teal-800 text-lg font-semibold mt-4'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
          <h1 className='text-6xl sm:text-5xl font-bold'>Certified Web 3.0 and Metaverse Developer</h1>
          <p className='mt-6 text-xl'>
          A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
          </p>
          <p className='mt-7 text-xl '>
          Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network
           Automation, and Bioinformatics Technologies
          </p>
          <div className='mt-6'>
            <Button Text='Learn More' />
          </div>
          </div>
                             {/* Right side for images */}

          <div className='flex-1'>
            <Image src={hero} alt='hero-section'/>
          </div>
          
        </div>
      </Wrapper>
    </section>

  </>
}

export default Hero