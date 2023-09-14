import React from 'react'
import { FaBookOpen, FaDollarSign } from 'react-icons/fa';
const Course = ({course}) => {
  const {image, title, description, price, credit} = course;
  return (
    <div className='border-[1px] border-solid border-[#c7bfbf] rounded-lg p-3 space-y-3'>
      <img className='w-full' src={image} alt="c programming" />
      <h3 className="font-bold">{title}</h3>
      <p className='text-[#1C1B1B99]'>{description}</p>
      <div className='flex items-center gap-3'>
        <FaDollarSign></FaDollarSign>
        <span className='text-[#1C1B1B99] font-semibold'>Price : {price}</span>
        <FaBookOpen></FaBookOpen>
        <span className='text-[#1C1B1B99] font-semibold'>Credit : {credit}hr</span>
      </div>
        <button className='w-full p-3 bg-[#2F80ED] text-white rounded-lg font-semibold text-[18px]'>Select</button>
    </div>
  )
}

export default Course