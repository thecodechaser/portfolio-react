import { ChevronRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import microverseLogo from '../../assets/images/microverse_logo.png';
import freelanceLogo from '../../assets/images/freelance-logo.jpg';
import kwanzooLogo from '../../assets/images/kwanzoo-logo.jpg';

const Experience = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="mt-14 md:mt-24 md:ml-1"
  >
    <div className="flex gap-3 ml-3 md:ml-0">
      <h2 className="text-2xl md:text-4xl">Experience</h2>
      <div className="border-b-2 w-3/5 mb-3 border-secondaryColor hr-about" />
    </div>

    <div className="mt-8 md:ml-1">
      <div className="flex mt-4 text-lg text-secondaryColor ml-4 gap-16 md:gap-96 md:ml-0">
        <h3>
          Full-Stack Software Engineer
          <span className="block text-sm ml-1 text-skyColor">October 2022 – Present</span>
        </h3>
        <p className="md:mr-3">
          <img src={kwanzooLogo} alt="microverse-logo" className="inline w-8" />
          {' '}
          Kwanzoo INC
          <span className="block text-sm text-skyColor">Remote</span>
        </p>
      </div>
      <ul className="ml-4 md:ml-0">
        <li className="flex text-base gap-2 text-skyColor mt-4">
          <ChevronRightIcon className="h-6" />
          <p>
            Managing full-stack development, front-end, back-end, and cloud operations.
          </p>
        </li>
        <li className="flex text-base gap-2 text-skyColor mt-2">
          <ChevronRightIcon className="h-6" />
          <p>
            Oversee full-stack development and cloud operations, ensuring smooth deployment
            and maintenance.
          </p>
        </li>
      </ul>
    </div>

    <div className="mt-8 md:ml-1">
      <div className="flex mt-4 text-lg text-secondaryColor ml-4 gap-16 md:gap-96 md:ml-0">
        <h3>
          Technical Support Engineer
          <span className="block text-sm ml-1 text-skyColor">January 2022 – April 2024</span>
        </h3>
        <p className="md:mr-3">
          <img src={microverseLogo} alt="microverse-logo" className="inline w-8" />
          {' '}
          Microverse
          <span className="block text-sm text-skyColor">Remote</span>
        </p>
      </div>
      <ul className="ml-4 md:ml-0">
        <li className="flex text-base gap-2 text-skyColor mt-4">
          <ChevronRightIcon className="h-6" />
          <p>
            Reviewed technical projects of junior web developers to make sure projects
            pass requirements.
          </p>
        </li>
        <li className="flex text-base gap-2 text-skyColor mt-2">
          <ChevronRightIcon className="h-6" />
          <p>
            Proposed improvements for the projects to improve code quality and
            overall performance.
          </p>
        </li>
      </ul>
    </div>

    <div className="mt-14">
      <div className="flex mt-4 text-lg text-secondaryColor ml-4 gap-16 md:gap-96 md:ml-1">
        <h3>
          Mentor (Volunteer)
          <span className="block text-sm ml-1 text-skyColor">November 2021 – December 2021</span>
        </h3>
        <p>
          <img src={microverseLogo} alt="microverse-logo" className="inline w-8" />
          {' '}
          Microverse
          {' '}
          <span className="block text-sm text-skyColor">Remote</span>
        </p>
      </div>
      <ul className="ml-4 md:ml-1">
        <li className="flex text-base gap-2 text-skyColor mt-4">
          <ChevronRightIcon className="h-6" />
          <p>Mentored junior web developers, providing technical support through code reviews.</p>
        </li>
        <li className="flex text-base gap-2 text-skyColor mt-2">
          <ChevronRightIcon className="h-6" />
          <p>
            Provided advice and tips on how to maintain motivation to maintain longevity
            in the program.
          </p>
        </li>
      </ul>
    </div>

    <div className="mt-14 ml-1 md:ml-0">
      <div className="flex mt-4 text-lg text-secondaryColor ml-3 gap-16 md:gap-96 md:ml-2">
        <h3>
          Freelance Developer
          <span className="block text-sm ml-1 text-skyColor">January 2020 – September 2021 &#160; &#160;</span>
        </h3>
        <p>
          <img src={freelanceLogo} alt="microverse-logo" className="inline w-8" />
          {' '}
          Freelance
          {' '}
          <span className="block text-sm text-skyColor">Remote</span>
        </p>
      </div>
      <ul className="ml-4 md:ml-2">
        <li className="flex text-base gap-2 text-skyColor mt-4">
          <ChevronRightIcon className="h-6" />
          <p>Built desktop applications using Java, JavaFX, and other frameworks.</p>
        </li>
        <li className="flex text-base gap-2 text-skyColor mt-2">
          <ChevronRightIcon className="h-6" />
          <p>
            Build websiite using Wordpress and Shopify for my clients.
          </p>
        </li>
      </ul>
    </div>

  </motion.div>
);

export default Experience;
