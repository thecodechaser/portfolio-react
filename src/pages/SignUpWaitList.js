import { useEffect } from 'react';
import SignUpForm from '../components/OnlineCourseWaitlist/SignUpForm';

const SignUpWaitList = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="mt-32">
      {/* contact-form */}
      <SignUpForm />
    </div>
  );
};

export default SignUpWaitList;
