"use client"
import Image from 'next/image'
import Boxes from '../shared/Boxes'
import box1 from '../../assets/box1.png'
import Wrapper from '../shared/Wrapper'
import {  Data2,data3 } from './Data/Data'
import { useState } from 'react'

export const Special = () => {
 
 const [selecteditem,setselecteditem]= useState(1)
const selecteditemdata=data3.find((elm)=>elm.id===selecteditem)
console.log(selecteditem);    

    return <>
        <section  className='mt-40'>
            <Wrapper>
                {/* <Header> */}
                <div >
                    <h2 className='text-6xl sm:text-5xl font-bold whitespace-pre-line mb-3'>Specialized Tracks</h2>

                    <p className='text-xl mb-10 '>After completing the first three quarters the participants will select<br /> one
                        or more specializations consisting of two courses each: </p>
                </div>
                {/* {            Contenr left } */}

                <div className='flex flex-row gap-x-6 gap-y-6'>

                    <div className=' sticky top-32 self-start shadow-xl rounded-lg border border-slate-300 py-8 px-6 basis-8/12 max-h-[600px]'>
                        <h4 className='text-teal-600 text-lg'>Specialized Program</h4>
                        <h2 className='text-2xl font-semibold mt-2'>{selecteditemdata?.Header}  Specialization</h2>
                        <p className='text-lg text-slate-600 mt-3 max-w-3xl'>
                           {selecteditemdata?.discription}
                        </p>
                        <button className='text-teal-700 mt-4 text-xl font-bold underline flex items-center gap-1 '>Learn More
                            <svg className='mt-1' width="11" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
                            </svg>

                        </button>


                        <div>
                            <div className='my-20 flex md:flex-row flex-col space-x-10 '>
                                {
                               selecteditemdata?.Quaters.map((elm, id) => (
                                        <Boxes Header={elm.Header} discription={elm.discription} Number={elm.Number} key={id} HaveBorder={false} />

                                    ))
                                }


                            </div>

                        </div>

                    </div>

                    {/* right box */}
                    <div className='px-4 px-6 basis-4/12'>
                        <div className='flex gap-y-4 items-center flex-col pointer'>
                            {/* ///////////////  bozse*/}
                            {
                                Data2.map((elm) => (
                                    <div>
                                        <div onClick={()=>setselecteditem(elm.id)} className='flex gap-x-4 items-center cursor-pointer justify-evenly' key={elm.id}>
                                            <div className=' h-20 '>
                                                <Image src={elm.image} width='200' height={'4'} alt='box' className='rounded-md object-cover h-20 ' /></div>
                                            <div>
                                                <h3 className='text-teal-600 text-lg  font-bold'>
                                                    {elm.Header}
                                                </h3>
                                                <h2 className='font-semibold text-xl'>
                                                    {elm.discription}
                                                </h2>
                                            </div> 

                                        </div>
                                    <hr className='my-2 border-2'/>
                                    </div>

                                ))
                            }

                            {/* ///////////////// */}

                        </div>

                    </div>

                </div>

            </Wrapper>
        </section>
    </>

}
