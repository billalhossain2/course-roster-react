import { useEffect, useState } from "react"
import Course from "../Course/Course"
const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(()=>{
    fetch(`courses.json`)
    .then(res => res.json())
    .then(data => setCourses(data))
    .catch(error => console.log("Something went wrong ", error))
  }, [])
  return (
    <div className="flex-1 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
      {
        courses.map(course => <Course key={course.id} course={course}></Course>)
      }
    </div>
  )
}

export default Courses