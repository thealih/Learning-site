import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/TopBar/Topbar";
import CourseBox from "../../Components/CourseBox/CourseBox";
import "./Courses.css";
import { useEffect, useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [shownCourses, setShownCourses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((allCourses) => setCourses(allCourses));
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />

      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "/" },
          { id: 2, title: "تمامی دوره ها", to: "/courses" },
        ]}
      />
      {/* <!--------------------------------  Courses-Section  --------------------------------> */}
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {shownCourses.map((course) => (
                  <CourseBox {...course} />
                ))}
              </div>
            </div>
          </div>
          <Pagination
            items={courses}
            itemsCount={3}
            pathName="/courses"
            setShownCourses={setShownCourses}
          />
        </div>
      </section>
      {/* <!--------------------------------  Courses-Section  --------------------------------> */}

      <Footer />
    </>
  );
};

export default Courses;
