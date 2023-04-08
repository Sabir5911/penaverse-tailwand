import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../assets/logo.svg'
import Wrapper from '../shared/Wrapper'
export default function () {
  return <>

  <Wrapper>

    <header  className='flex justify-between  py-3 bg-white items-center '  >
        <div>

            <Image src={logo} alt='penaverse logo'/>
        </div>

        <ul className='flex space-x-8 font-semibold my-3 text-xl'  >
            <li>
                <Link href={'/'}>
                Home
                </Link></li>

            <li>
                <Link href={'courses'}>
                Courses
                </Link>
                </li>
        </ul>
    </header>

    </Wrapper>

  </>

}