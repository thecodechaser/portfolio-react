import { ChevronRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import personJuggling from '../../assets/images/person_juggling.gif';
import codeSnipped from '../../assets/images/code-snippet.png';

const stacks = [
  {
    name: 'Front end development', stack1: 'React JS', stack2: 'JavaScript', stack3: 'HTML & CSS', stack4: 'Tailwind',
  },
  {
    name: 'Back end development', stack1: 'Ruby On Rails', stack2: 'Ruby', stack3: 'Java', stack4: 'SQL',
  },
  {
    name: 'Tools', stack1: 'Wordpress', stack2: 'Netlify', stack3: 'Github & Git', stack4: 'VS Code',
  },
];

const AboutMe = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.1, duration: 0.8 }}
    className="mt-14 md:mt-24"
  >
    <div className="flex gap-3 ml-3 md:ml-0">
      <h2 className="text-2xl md:text-4xl">About Me</h2>
      <div className="border-b-2 w-3/5 mb-3 border-secondaryColor hr-about" />
    </div>
    <div className="flex flex-col md:flex-row mt-5 ml-4 mr-5 gap-5 text-base text-skyColor md:ml-1 about-text">
      <div className="flex flex-col gap-5 md:mt-3">
        <p>
          Hello! My name is Ranjeet Singh, commonly known as
          {' '}
          <span className="text-secondaryColor">thecodechaser</span>
          . I love building web
          applications using many technologies some of them are React, JavaScript, and Rails.
          Before diving into web development I have worked for one year as a freelance developer
          where I built desktop apps, Wordpress, and Shopify websites for my clients.
        </p>
        <p>
          I love getting stuck on big problems while coding that makes my life a little more
          interesting & so I&apos;m a good problem
          solver. In my free time, I have so much to do that I get confused about choosing
          between solving algorithms and learning about astronomy but somehow I manage.
          {' '}
          <img src={personJuggling} alt="person-juggling" className="w-16 mt-4" />
        </p>
      </div>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        src={codeSnipped}
        alt="code-snippet"
        className="code-snippet rounded-md"
      />
    </div>
    <h3 className="text-lg text-secondaryColor mt-5 ml-4 font-bold md:ml-1">Here are few of my stacks I&apos;ve been working with recently:</h3>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.8 }}
      className="flex flex-col ml-4 gap-4 mt-2 md:flex-row md:gap-56 md:ml-2"
    >
      { stacks.map((stack) => (
        <div key={stack.name}>
          <h3 className="text-lg font-medium">{stack.name}</h3>
          <div className="flex text-base gap-2 text-skyColor mt-2">
            <ChevronRightIcon className="h-6" />
            <p>{stack.stack1}</p>
          </div>
          <div className="flex text-base gap-2 text-skyColor mt-2">
            <ChevronRightIcon className="h-6" />
            <p>{stack.stack2}</p>
          </div>
          <div className="flex text-base gap-2 text-skyColor mt-2">
            <ChevronRightIcon className="h-6" />
            <p>{stack.stack3}</p>
          </div>
          <div className="flex text-base gap-2 text-skyColor mt-2">
            <ChevronRightIcon className="h-6" />
            <p>{stack.stack4}</p>
          </div>
        </div>
      ))}
    </motion.div>
  </motion.div>
);

export default AboutMe;
