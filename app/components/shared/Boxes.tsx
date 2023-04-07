import React, { FC } from 'react'
interface props {
Header :string,
discription:string,
Number:string
HaveBorder?:Boolean
className?:string
}

const Boxes :FC<props>=({Header,discription,Number,HaveBorder=true,className})=> {
  return (
    <div className={`rounded-md w-4/12 py-16 flex-1 px-8 relative  flex flex-col justify-center ${HaveBorder===true?"border":""} `}>
    <h4 className='font-bold text-xl'>{Header}</h4>
    <p className='mt-2'>{discription}</p>
    <span className='absolute -top-10 right-10 text-[170px] font-bold -z-10 text-gray-300'>{Number}</span>
</div>
  )
}

export default Boxes