import PropTypes from 'prop-types';
const SelectedCourses = ({selectedCourses, creditHour}) => {
  const getTotalCreditHours = selectedCourses.reduce((total, curr)=> total + curr.credit, 0)
  return (
    <div className='p-5 bg-[#f5f5f5] space-y-3'>
      <h3 className='text-[#2F80ED] font-bold text-[18px]'>Credit Hour Remaining {creditHour} hr</h3>
      <hr />
      <h3 className='font-bold'>Course Name</h3>
      <div>
      <ul className='list-decimal ml-5'>
        {
          selectedCourses.map(selectedC => <li key={selectedC.id}>{selectedC.title}</li>)
        }
      </ul>
      </div>
      <hr />
      <h3 className='font-bold'>Total Credit Hour : {getTotalCreditHours}</h3>
      <hr />
      <h3 className='font-bold'>Total Price : 48000 USD</h3>
    </div>
  )
}

SelectedCourses.propTypes = {
  selectedCourses: PropTypes.array.isRequired
}

export default SelectedCourses