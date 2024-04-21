import { ChevronRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import personJuggling from '../../assets/images/person_juggling.gif';
import codeSnipped from '../../assets/images/code-snippet.png';

const stacks = [
  {
    name: 'Front end development', values: ['React JS', 'Vue Js', 'JavaScript', 'HTML & CSS', 'Tailwind'],
  },
  {
    name: 'Back end development', values: ['Ruby On Rails', 'Ruby', 'Java', 'Spring', 'SQL'],
  },
  {
    name: 'Tools', values: ['Wordpress', 'Netlify', 'Github & Git', 'Github & Git', 'VS Code'],
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
          Hi there! I&apos;m Ranjeet Singh, but you might know me as
          {' '}
          <span className="text-secondaryColor">thecodechaser</span>
          . Right now, I&apos;m a Full-Stack Software Engineer at&nbsp;
          <a href="https://kwanzoo.com" target="_blank" className="text-secondaryColor" rel="noreferrer">Kwanzoo INC</a>
          {/* . I love building web
          applications using many technologies some of them are React, Vue,&nbsp;
          JavaScript, Rails and Java.
          Before diving into web development I have worked for one year as a freelance developer
          where I built desktop apps, Wordpress, and Shopify websites for my clients. */}
          . I enjoy creating web applications using a mix of technologies like React, Vue,&nbsp;
          JavaScript, Rails, and Java. Before I got into web development, I spent two years
          as a freelance developer, where I worked on desktop apps and built websites with
          Wordpress and Shopify for my clients. I look forward to sharing more about my&nbsp;
          journey and projects with you!
        </p>
        <p>
          I enjoy tackling challenging coding problems because they keep things interesting,
          which makes me a pretty good problem solver. When I have some free time, I usually
          have a hard time deciding between solving algorithms or learning about astronomy—but
          somehow I manage to do a bit of both.
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
          {stack.values.map((value) => (
            <div key={value} className="flex text-base gap-2 text-skyColor mt-2">
              <ChevronRightIcon className="h-6" />
              <p>{value}</p>
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  </motion.div>
);

export default AboutMe;
