import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const serviceId = process.env.REACT_APP_WAIT_LSIT_SERVICE_ID;
const templateId = process.env.REACT_APP_WAIT_LSIT_TEMPLATE_ID;
const userId = process.env.REACT_APP_WAIT_LSIT_USER_ID;

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mobile, setMobile] = useState('');
  const [fieldsNotice, setFieldsNotice] = useState(false);
  const [emailNotice, setEmailNotice] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);

  const navigate = useNavigate();

  const submission = () => {
    const pattern = /\S+@\S+\.\S+/;

    if (name === '' || email === '' || mobile === '') {
      setFieldsNotice(true);
      return;
    }

    setFieldsNotice(false);

    if (!pattern.test(email)) {
      setEmailNotice(true);
      return;
    }

    setEmailNotice(false);

    const templateParams = {
      name,
      mobile,
      email,
      message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId);

    setSuccessNotice(true);
    setTimeout(() => {
      navigate('../signup-successfull');
    }, 2000);
  };

  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: -0 }}
      transition={{ duration: 1 }}
      className="flex flex-col mt-10 items-center md:mr-52"
    >
      <h3 className="text-lg font-bold text-skyColor  mb-4">Sign Up now and secure your place today!</h3>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength="30"
          placeholder="Name *"
          className="w-72 md:w-80 p-2 rounded text-primaryColor
      focus:border-2 focus:border-secondaryColor focus:outline-none"
        />
        <input
          type="email"
          name="user_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email *"
          className="w-72 md:w-80 p-2 rounded text-primaryColor
        focus:border-2 focus:border-secondaryColor focus:outline-none"
        />
        <input
          type="text"
          name="user_mobile"
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile *"
          className="w-72 md:w-80 p-2 rounded text-primaryColor
        focus:border-2 focus:border-secondaryColor focus:outline-none"
        />
        <textarea
          rows="10"
          name="user_msg"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength="500"
          placeholder="Have any thoughts ? you can share here!"
          className="w-72 md:w-80 p-2 rounded text-primaryColor
          focus:border-2 focus:border-secondaryColor focus:outline-none"
        />
        {
        fieldsNotice && (
          <span className="text-skyColor text-center text-base">Please fill all required fields</span>
        )
      }
        {
        emailNotice && (
          <span className="text-skyColor text-center text-base">Please enter a valid email</span>
        )
      }
        {
        successNotice && (
          <span className="text-skyColor text-center text-base">Sending message...</span>
        )
      }
        <button onClick={submission} type="button" className="bg-lightBlueColor ml-24 mt-6 rounded w-28 px-4 py-2 text-base text-skyColor font-medium">Submit</button>
      </div>
    </motion.div>
  );
};

export default SignUpForm;
