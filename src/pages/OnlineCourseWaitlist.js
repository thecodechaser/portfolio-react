import { useEffect } from 'react';
import CourseDetails from '../components/OnlineCourseWaitlist/CourseDetails';

const OnlineCourseWaitlist = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="mt-32">
      <CourseDetails />
    </div>
  );
};

export default OnlineCourseWaitlist;
