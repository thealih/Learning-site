import "./PopularCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import CourseBox from "../CourseBox/CourseBox";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((popularCourses) => setCourses(popularCourses));
  }, []);
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title="محبوب ترین دوره ها"
          desc="دوره های محبوب بر اساس امتیاز دانشجو ها"
        />
        <div className="courses-content">
          <div className="container">
            <div className="row">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                className="mySwiper"
              >
                {courses.map((course) => (
                  <SwiperSlide>
                    <CourseBox {...course} isSlider={true} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
