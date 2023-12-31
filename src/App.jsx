import { useState } from "react";
import Courses from "./components/Courses/Courses";
import SelectedCourses from "./components/SelectedCourses/SelectedCourses";
import { ToastContainer } from "react-toastify";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [creditHour, setCreditHour] = useState(20);
  return (
    <div className="mb-20">
      <ToastContainer></ToastContainer>
      <h1 className="text-3xl font-bold text-center my-10">
        Course Registration
      </h1>
      <div className="flex lg:flex-row flex-col-reverse max-w-[90%] mx-auto">
        <Courses
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
          creditHour={creditHour}
          setCreditHour={setCreditHour}
        ></Courses>
        <SelectedCourses
          selectedCourses={selectedCourses}
          creditHour={creditHour}
        ></SelectedCourses>
      </div>
    </div>
  );
}

export default App;
