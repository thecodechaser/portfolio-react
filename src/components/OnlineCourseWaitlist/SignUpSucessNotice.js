import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignUpSucessNotice = () => (
  <motion.section
    initial={{ x: '-100vw' }}
    animate={{ x: -0 }}
    transition={{ duration: 1 }}
    className="flex flex-col items-center mt-60 md:mr-52"
  >
    <p className="text-md md:text-lg px-2 text-center">
      Thank you for Signing Up for the &quot;Master Front-End Web Development&quot;
      course, You&apos;re one step closer to becoming a proficient front-end developer.
    </p>
    <p className="text-sm md:text-lg mt-5 px-2 text-center">
      Your spot is confirmed and We&apos;ll get back to you shortly with more course details.
    </p>
    <Link to="/">
      <button
        type="button"
        className="bg-lightBlueColor mt-10 rounded px-6 py-2 w-50
      text-lg text-skyColor font-medium"
      >
        Go Home
      </button>
    </Link>
  </motion.section>
);

export default SignUpSucessNotice;
