import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Image from '../elements/Image';
import Button from '../elements/Button';
import {useState} from 'react';
import emailjs from '@emailjs/browser';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ButtonGroup from '../elements/ButtonGroup';
import 'animate.css';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const CallToAction = ({
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
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner cta-inner-custom section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  const [isStudentActive, setIsStudentActive] = useState(false);
  const [isTeacherActive, setIsTeacherActive] = useState(false);
  const [subscribesAs, setSubscribedAs] = useState("");
  const [email, setEmail] = useState('');
  const [isMailValid, setIsMailValid] = useState(null);

  const handleEmailChange = event => {
    setEmail(event.target.value);
    if (!isValidEmail(event.target.value)) {
      setIsMailValid(false);
    }else{
      setIsMailValid(true);
    }
    console.log(isMailValid);
  };

  const handleClick = (who) => {
    setSubscribedAs(who)
    if(who==="student"){
      setIsStudentActive(true);
      setIsTeacherActive(false);
    }else if(who==="teacher"){
      setIsStudentActive(false);
      setIsTeacherActive(true);
    }
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  var templateParams = {
    temp_name: "Email registered",
    temp_email: email,
    temp_message: "A person with email "+ email + " just subscribed as a " + subscribesAs,
    temp_company: "",
    temp_country: ""
  };

  const sendMail = event => {
    event.preventDefault()
    if(subscribesAs===""){
      Notify.failure("⛔️Παρακαλώ επιλέξτε αν είστε καθηγητής ή μαθητής.");

      return;
    }
    if(!isMailValid){
      Notify.failure("⛔️Παρακαλώ προσθέστε σωστά το email.");
      return;
    }
    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams,process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    .then(function(response) {
       Notify.success("Λάβαμε το αίτημα σου και θα επικοινωνήσουμε μαζί σου σε λίγο καιρό!");
    }, function(error) {
       console.log('FAILED...', error);
    });
    setEmail('');
  }
  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container animate__animated animate__tada" id='signup'>
        <div
          className={innerClasses}
        >
          {/* <div className="cta-slogan">
            <h3 className="m-0 text-center" style={{color:"white"}}>
              Ενημερωθείτε όταν είμαστε έτοιμοι..
              </h3>
          </div> */}
          <div className="">
            <ButtonGroup className={"how-to-buttons"}>
            <Button tag="a" color={isStudentActive ? "primary how-to-choosen" : "dark"} wideMobile onClick={() => handleClick("student")}>
            Θέλω να κάνω μαθήμα
            </Button>
            <Button tag="a" color={!isStudentActive ? "primary how-to-choosen" : "dark"} wideMobile onClick={() => handleClick("teacher")}>
              Θέλω να διδάξω
            </Button> 
          </ButtonGroup>
          </div>
          <div className='cta-action cta-action-group'>
            <form>
            <input placeholder='name@yourmail.com' onChange={handleEmailChange}/>
            <button onClick={sendMail}>Εγγραφή</button>

            </form>
            {/* <Input id="newsletter" className={"cta-email"} type="email" label="Subscribe" labelHidden placeholder="Εmail" value={email} onChange={handleEmailChange}>
            </Input>
            <Input type="submit" value={"Αποστολή"}>
            </Input> */}
            {/* <Button tag="a" color="primary" wideMobile onClick={sendMail} className='noselect'>
                   Εγγραφή
                    </Button> */}
            <p className='cta-text'>
            Συμπλήρωσε το email σου, 
και γίνε μέλος της μεγαλύτερης κοινότητας<br></br> ξένων γλωσσών στην Ελλάδα!

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

CallToAction.propTypes = propTypes;
CallToAction.defaultProps = defaultProps;

export default CallToAction;