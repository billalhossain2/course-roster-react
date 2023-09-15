import { FaBookOpen, FaDollarSign } from "react-icons/fa";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const Course = ({
  course,
  selectedCourses,
  setSelectedCourses,
  creditHour,
  setCreditHour,
}) => {

  const { image, title, description, price, credit } = course;

  const handleSelectCourse = (course) => {
    //calculate remaining hour
    const remainingHour = () => creditHour - course.credit;

    //check if the course already exist or not
    const isExist = selectedCourses.find(
      (selectedC) => selectedC.id === course.id
    );

    if (isExist) {
      return Swal.fire("You have already selected this course!");
    }

    if (remainingHour() < 0) {
      return Swal.fire(
        "You do not have enough remaining hour to select this course!"
      );
    }

    setCreditHour(remainingHour);
    setSelectedCourses([...selectedCourses, course]);
  };
  return (
    <div className="border-[1px] border-solid border-[#c7bfbf] rounded-lg p-3 min-h-[450px] flex flex-col justify-between">
      <img className="w-full" src={image} alt="c programming" />
      <h3 className="font-bold">{title}</h3>
      <p className="text-[#1C1B1B99]">{description}</p>
      <div className="flex items-center gap-3">
        <FaDollarSign></FaDollarSign>
        <span className="text-[#1C1B1B99] font-semibold">Price : {price}</span>
        <FaBookOpen></FaBookOpen>
        <span className="text-[#1C1B1B99] font-semibold">
          Credit : {credit}hr
        </span>
      </div>
      <button
        onClick={() => handleSelectCourse(course)}
        className="w-full p-3 bg-[#2F80ED] hover:bg-[#2f42ed] text-white rounded-lg font-semibold text-[18px]"
      >
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  selectedCourses: PropTypes.array.isRequired,
  setSelectedCourses: PropTypes.func.isRequired,
  creditHour: PropTypes.number.isRequired,
  setCreditHour: PropTypes.func.isRequired,
};

export default Course;
