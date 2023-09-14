import Courses from "./components/Courses/Courses";
import SelectedCourses from "./components/SelectedCourses/SelectedCourses";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">Course Registration</h1>
      <div className="flex max-w-[90%] mx-auto">
        <Courses></Courses>
        <SelectedCourses></SelectedCourses>
      </div>
    </div>
  );
}

export default App;
