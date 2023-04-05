import React, { FC } from 'react'

const Wrapper:FC <{Text:string}>= ({Text}) => {
  return (
    <button className='bg-[#00616C] text-white px-6 py-4 rounded-full hover:shadow-xl font-semibold  text-xl hover:scale-105 duration-300' >
{Text}
    </button>
  )
}
export default Wrapper