import Wrapper from '../shared/Wrapper'
import Button from '../shared/Button'
import { Data } from './Data/Data'
import  Boxses from '../shared/Boxes'
export default function Core() {
    const para='Core Course \n(Common in All Specializations)'

  
  return <>
  <section className='mt-16 lg:mt-28 relative'>
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
<div className='my-20 flex md:flex-row flex-col space-x-10 cursor-pointer '>
    {
        Data.map((elm,id)=>(
                        <Boxses Header={elm.Header} discription={elm.discription} Number={elm.Number} key={id} className='hover:text-red-600 ' />

       
        ))
    }
    
 
</div>


    </Wrapper>
  </section>
  </>
} 
