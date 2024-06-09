import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CourseDetails = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="flex flex-col mt-20 md:ml-1 contact-info"
  >
    <div className="flex w-full ml-3 md:ml-0">
      <div className="border-b-2 mb-3 w-32 mr-3 about-hr md:mr-5 border-secondaryColor" />
      <h3 className="text-2xl md:text-4xl">Course Details</h3>
      <div className="border-b-2 mb-3 w-32 ml-3 about-hr md:ml-5 border-secondaryColor" />
    </div>

    <div className="about-text">
      <div className="ml-4 md:flex mt-8 md:gap-12 md:ml-1">
        <p className="text-base text-skyColor">
          <strong>Course Title:</strong>
          {' '}
          Master Front-End Web Development
          <br />
          <br />
          <strong>Description:</strong>
          {' '}
          The &quot;Master Front-End Web Development&quot; course is designed to take you from
          a beginner to a proficient front-end developer. Over 8 weeks, you will learn the
          fundamentals of HTML, CSS, JavaScript, ReactJS, and essential tools like Git and
          GitHub through hands-on projects and expert instruction.
          <br />
          <br />
          <strong>Instructor:</strong>
          {' '}
          Ranjeet Singh - Experienced Software Engineer
          <br />
          <br />
          <strong>Duration:</strong>
          {' '}
          8 weeks
          <br />
          <br />
          <strong>Class Schedule:</strong>
          {' '}
          Monday to Friday, 2 hours daily
          <br />
          <br />
          <strong>Course Fee:</strong>
          {' '}
          2999 INR
        </p>
      </div>

      <div className="ml-4 md:flex mt-8 md:gap-12 md:ml-1">
        <div className="text-base text-skyColor">
          <h3 className="text-xl">Course Curriculum</h3>
          <ul className="list-disc list-inside mt-4">
            <li>
              <strong>Week 1: HTML Basics</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Introduction to HTML</li>
                <li>Creating structured documents</li>
                <li>Working with forms and tables</li>
                <li>Semantic HTML</li>
              </ul>
            </li>
            <li className="mt-3">
              <strong>Week 2: CSS Fundamentals</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Styling with CSS</li>
                <li>CSS Box Model</li>
                <li>Flexbox and Grid Layout</li>
                <li>Responsive Design</li>
              </ul>
            </li>
            <li className="mt-3">
              <strong>Week 3: Advanced CSS</strong>
              <ul className="list-disc list-inside ml-4">
                <li>CSS Preprocessors (Sass, Less)</li>
                <li>CSS Animations and Transitions</li>
                <li>Advanced Responsive Design</li>
                <li>CSS Frameworks (Bootstrap, Tailwind)</li>
              </ul>
            </li>
            <li className="mt-3">
              <strong>Week 4: JavaScript Essentials</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Introduction to JavaScript</li>
                <li>Variables, Data Types, and Operators</li>
                <li>Functions and Control Structures</li>
                <li>DOM Manipulation</li>
              </ul>
            </li>
            <li className="mt-3">
              <strong>Week 5: Advanced JavaScript</strong>
              <ul className="list-disc list-inside ml-4">
                <li>ES6+ Features (let, const, arrow functions, etc.)</li>
                <li>Asynchronous JavaScript (Promises, Async/Await)</li>
                <li>Working with APIs</li>
                <li>Error Handling</li>
              </ul>
            </li>
            <li className="mt-3">
              <strong>Week 6: ReactJS Basics</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Introduction to ReactJS</li>
                <li>JSX and Component-Based Architecture</li>
                <li>Props and State Management</li>
                <li>React Lifecycle Methods</li>
              </ul>
            </li>
            <li className="mt-3">
              <strong>Week 7: Advanced ReactJS</strong>
              <ul className="list-disc list-inside ml-4">
                <li>React Hooks (useState, useEffect)</li>
                <li>Context API</li>
                <li>React Router for Navigation</li>
                <li>State Management with Redux</li>
              </ul>
            </li>
            <li className="mt-3">
              <strong>Week 8: Final Project</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Building a complete web application</li>
                <li>Integrating all learned technologies</li>
                <li>Deployment and Hosting</li>
                <li>Best Practices and Code Reviews</li>
              </ul>
            </li>
            <li className="mt-3">
              <strong>Git and GitHub Essentials</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Introduction to Version Control</li>
                <li>Setting up Git</li>
                <li>Basic Git Commands (commit, push, pull, clone)</li>
                <li>Working with Branches</li>
                <li>Collaborating on GitHub</li>
                <li>Pull Requests and Code Reviews</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="ml-4 md:flex mt-8 md:gap-12 md:ml-1">
        <div className="text-base text-skyColor">
          <h4 className="text-xl">Benefits of Joining</h4>
          <ul className="list-disc list-inside">
            <li>
              <strong>Hands-On Projects:</strong>
              {' '}
              Learn by building real-world projects.
            </li>
            <li>
              <strong>Expert Instruction:</strong>
              {' '}
              Guidance from experienced developers.
            </li>
            <li>
              <strong>Flexible Learning:</strong>
              {' '}
              Daily classes with flexible timings.
            </li>
            <li>
              <strong>Community Access:</strong>
              {' '}
              Join a community of aspiring developers.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex flex-col mt-10 md:mr-48 text-base text-skyColor">
      Please sign up for the waitlist as we have limited spots available. Enrollment
      is on a first-come, first-served basis, so secure your place today. You will
      receive detailed course information via email as soon as the course is available.
      <Link to="/signup-waitlist">
        <button
          type="button"
          className="border-2 border-secondaryColor mt-2 ml-4 md:ml-0 rounded px-6 py-3
      text-lg text-secondaryColor hover:text-skyColor hover:border-skyColor"
        >
          Sign Up
        </button>
      </Link>
    </div>

  </motion.div>
);

export default CourseDetails;
