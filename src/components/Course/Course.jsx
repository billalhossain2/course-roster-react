import { FaBookOpen, FaDollarSign } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Course = ({course, selectedCourses, setSelectedCourses}) => {
  const {image, title, description, price, credit} = course;

  const handleSelectCourse = (course)=>{
    setSelectedCourses([...selectedCourses, course])
  }
  return (
    <div className='border-[1px] border-solid border-[#c7bfbf] rounded-lg p-3 min-h-[450px] flex flex-col justify-between'>
      <img className='w-full' src={image} alt="c programming" />
      <h3 className="font-bold">{title}</h3>
      <p className='text-[#1C1B1B99]'>{description}</p>
      <div className='flex items-center gap-3'>
        <FaDollarSign></FaDollarSign>
        <span className='text-[#1C1B1B99] font-semibold'>Price : {price}</span>
        <FaBookOpen></FaBookOpen>
        <span className='text-[#1C1B1B99] font-semibold'>Credit : {credit}hr</span>
      </div>
        <button onClick={()=>handleSelectCourse(course)} className='w-full p-3 bg-[#2F80ED] hover:bg-[#2f42ed] text-white rounded-lg font-semibold text-[18px]'>Select</button>
    </div>
  )
}

Course.propTypes = {
  course:PropTypes.object.isRequired,
  selectedCourses:PropTypes.array.isRequired,
  setSelectedCourses:PropTypes.func.isRequired
}

export default Course