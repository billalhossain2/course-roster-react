import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Course from "../Course/Course";

const Courses = ({ selectedCourses, setSelectedCourses, creditHour, setCreditHour }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`courses.json`)
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((error) => console.log("Something went wrong ", error));
  }, []);

  return (
    <div className="flex-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
          setCreditHour={setCreditHour}
          creditHour={creditHour}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  selectedCourses: PropTypes.array.isRequired,
  setSelectedCourses: PropTypes.func.isRequired,
};

export default Courses;
