import "./PresellCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import CourseBox from "../CourseBox/CourseBox";
const PresellCourses = () => {
  const [presellCourses, setPresellCourses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((allPresellCourses) => {
        setPresellCourses(allPresellCourses);
        console.log(allPresellCourses);
      });
  }, []);
  console.log(presellCourses);
  return (
    <div className="presell">
      <div className="container">
        <SectionHeader
          title="دوره های در حال پیش فروش"
          desc="متن تستی برای دوره های پیش فروش"
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
                {presellCourses.map((course) => (
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

export default PresellCourses;
