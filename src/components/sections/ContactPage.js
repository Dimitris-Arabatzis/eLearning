import React, { useState } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import emailjs from '@emailjs/browser';
import { Notify } from 'notiflix/build/notiflix-notify-aio';




const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom m01',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner clip',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [company, setCompanyName] = useState('')
  const [country, setCountry] = useState('')

  const data = {
    name,
    email,
    message,
    company,
    country,
  }

  function isValid(str) {
    if (str.trim() === '') {
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!isValid(data.email)) {
      Notify.failure('⛔️ Παρακαλώ προσθέστε σωστά το email.')
      return false
    }

    if (!isValid(message)) {
      Notify.failure('⛔️ Παρακαλώ προσθέστε ένα μήνυμα.')
      return false
    }

    var templateParams = {
      temp_name: data.name,
      temp_email: data.email,
      temp_message: data.message,
      temp_company: data.company,
      temp_country: data.country
    };
    
    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams,process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        .then(function(response) {
          Notify.success("Λάβαμε το αίτημα σου και θα επικοινωνήσουμε μαζί σου το συντομότερο!");
          resetFields();
        }, function(error) {
          console.log('FAILED...', error);
        });
  }

  const resetFields = () => {
    setName('')
    setEmail('')
    setMessage('')
    setCompanyName('')
    setCountry('')
  }

  return (

    
    <section
      {...props}
      className={outerClasses}
    >
      <div className="" id='signup'>
        <div
          className={innerClasses}
        >
          <form onSubmit={handleSubmit}>
      <div className="my-12 flex w-full items-center justify-center">
        <div className="top-40 rounded bg-white py-12 px-8 shadow-2xl lg:px-28">
          <p className="text-center text-xl font-bold leading-7 text-gray-700 md:text-3xl">
            Ελάτε να μιλήσουμε!
          </p>
          <div className="mt-12 items-center md:flex">
            <div className="flex flex-col md:w-72">
              <label className="text-base font-semibold leading-none text-gray-800">Όνομα</label>
              <input
                tabIndex={0}
                arial-label="Please input name"
                type="name"
                className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mt-4 flex flex-col md:ml-6 md:mt-0 md:w-72">
              <label className="text-base font-semibold leading-none text-gray-800">
                Email*
              </label>
              <input
                tabIndex={0}
                arial-label="Please input email address"
                type="email"
                className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>
          <div className="mt-8 items-center md:flex">
            <div className="flex flex-col md:w-72">
              <label className="text-base font-semibold leading-none text-gray-800">
                Εταιρία
              </label>
              <input
                tabIndex={0}
                role="input"
                arial-label="Please input company name"
                type="name"
                className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700 "
                onChange={(e) => setCompanyName(e.target.value)}
                value={company}
              />
            </div>
            <div className="mt-4 flex flex-col md:ml-6 md:mt-0 md:w-72">
              <label className="text-base font-semibold leading-none text-gray-800">Γλώσσα ενδιαφέροντος</label>
              <input
                tabIndex={0}
                arial-label="Please input country name"
                type="name"
                className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              />
            </div>
          </div>
          <div>
            <div className="mt-8 flex w-full flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">Μήνυμα*</label>
              <textarea
                tabIndex={0}
                aria-label="leave a message"
                role="textbox"
                type="name"
                className="focus:oultine-none mt-4 h-36 resize-none rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
          </div>
          <p className="mt-4 text-xs leading-3 text-gray-600">
            Πατώντας αποστολή συναινείτε να μοιραστείτε τα στοιχεία σας με την ομάδα μας.
          </p>
          <div className="flex w-full items-center justify-center pt-12 pb-8">
            <button
              type="submit"
              className="button button-primary button-wide-mobile button-md"
            >
              Αποστολή
            </button>
          </div>
        </div>
      </div>
    </form>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;