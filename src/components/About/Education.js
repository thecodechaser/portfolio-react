import { ChevronRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import microverseLogo from '../../assets/images/microverse_logo.png';
import tmuLogo from '../../assets/images/tmu-logo.png';
import kalingaLogo from '../../assets/images/kalinga-logo.png';

const Education = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="mt-14 md:mt-24 md:ml-3"
  >
    <div className="flex gap-3 ml-3 md:ml-0">
      <h2 className="text-2xl md:text-4xl">Education</h2>
      <div className="border-b-2 w-3/5 mb-3 border-secondaryColor hr-about" />
    </div>

    <div className="mt-8 md:ml-2">
      <div className="flex mt-4 text-lg text-secondaryColor ml-4 gap-5 md:gap-52 md:ml-0">
        <h3>
          Full-stack Web Development Program, Full Time
          <span className="block text-sm ml-1 text-skyColor">October 2021 – May 2022</span>
        </h3>
        <p>
          <img src={microverseLogo} alt="microverse-logo" className="inline w-8" />
          {' '}
          Microverse
          <span className="block text-sm text-skyColor">Remote</span>
        </p>
      </div>
      <ul className="ml-4 md:ml-0">
        <li className="flex text-base gap-2 text-skyColor mt-4 md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Spent 1300+ hours mastering algorithms, data structures, and
            full-stack development while simultaneously developing projects
            with Ruby, Rails, JavaScript, React, and Redux.
          </p>
        </li>
        <li className="flex text-base gap-2 text-skyColor mt-2 md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Developed skills in remote pair-programming using GitHub,
            industry-standard git-flow, and daily standups to communicate
            and collaborate with international remote developers.
          </p>
        </li>
      </ul>
    </div>

    <div className="mt-8 ml-2 md:ml-4">
      <div className="flex mt-4 text-lg text-secondaryColor ml-3 gap-5 edu-bhag edu-tmu md:ml-0">
        <h3>
          Bachlor of computer science
          <span className="block text-sm ml-1 text-skyColor">July 2019 – June 2023</span>
        </h3>
        <p>
          <img src={kalingaLogo} alt="microverse-logo" className="inline w-8" />
          {' '}
          Kalinga University
          <span className="block text-sm text-skyColor">Part-Time</span>
        </p>
      </div>
      <ul className="ml-4 md:ml-0">
        <li className="flex text-base gap-2 text-skyColor mt-4 md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Studied Computer science engineering for 3 years and learned
            about computer fundamentals and software development lifecycle.
          </p>
        </li>
      </ul>
    </div>

    <div className="mt-8 ml-1 md:ml-3">
      <div className="flex mt-4 text-lg text-secondaryColor ml-3 gap-5 edu-tmu md:ml-0">
        <h3>
          Diploma Polytechnic, Full-Time
          <span className="block text-sm ml-1 text-skyColor">July 2016 – June 2019</span>
        </h3>
        <p>
          <img src={tmuLogo} alt="microverse-logo" className="inline w-8" />
          {' '}
          Teerthanker Mahaveer University
          <span className="block text-sm text-skyColor">Regular</span>
        </p>
      </div>
      <ul className="ml-4 md:ml-0">
        <li className="flex text-base gap-2 text-skyColor mt-4 md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Studied Computer science engineering for 3 years and learned about computer fundamentals
            and software development lifecycle.
          </p>
        </li>
        <li className="flex text-base gap-2 text-skyColor mt-2 md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Worked as a back-end Java developer for 3 months for the university internship.
          </p>
        </li>
      </ul>
    </div>

  </motion.div>
);

export default Education;
