import { useState } from "react";
import Courses from "./components/Courses/Courses";
import SelectedCourses from "./components/SelectedCourses/SelectedCourses";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">Course Registration</h1>
      <div className="flex lg:flex-row flex-col-reverse max-w-[90%] mx-auto">
        <Courses selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses}></Courses>
        <SelectedCourses selectedCourses={selectedCourses}></SelectedCourses>
      </div>
    </div>
  );
}

export default App;
