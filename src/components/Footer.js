import React from 'react';
import ContactInfo from './Contact/ContactInfo';

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Footer = () => (

  <>
    <ContactInfo />
    <footer
      className="flex flex-col items-center my-8"
    >
      <button
        type="button"
        onClick={goToTop}
        aria-label="Save"
        className="bg-lightBlueColor rounded
    px-4 my-10 py-2 text-skyColor font-medium hover:bg-secondaryColor hover:text-primaryColor"
      >
        <i className="las la-angle-up" />
      </button>
      <p className="text-md">
        Copyright © 2024
        <a href="https://github.com/thecodechaser" className="text-secondaryColor"> Ranjeet Singh </a>
        All Rights Reserved
      </p>
    </footer>
  </>
);

export default Footer;
