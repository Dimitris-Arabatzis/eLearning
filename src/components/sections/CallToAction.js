import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Image from '../elements/Image';
import Button from '../elements/Button';
import {useState} from 'react';


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
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  const [isStudentActive, setIsStudentActive] = useState(false);
  const [isTeacherActive, setIsTeacherActive] = useState(false);

  const handleClick = (who) => {
    // 👇️ toggle isActive state on click
    if(who=="student"){
      setIsStudentActive(true);
      setIsTeacherActive(false);
    }else if(who=="teacher"){
      setIsStudentActive(false);
      setIsTeacherActive(true);
    }
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" id='signup'>
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0 text-center" style={{color:"white"}}>
              Ενημερωθείτε όταν είμαστε έτοιμοι..
              </h3>
          </div>
          <div className="cta-choises">
            <div className={isStudentActive ? 'cta-choise-student cta-choosen' : 'cta-choise-student'} onClick={() =>handleClick("student")}>
              <Image
                className=""
                src={require('./../../assets/images/CallToAction/student.png')}
                alt="Hero"
                width={100} />
                <p>I am a student!</p>
            </div>
            <div className={isTeacherActive ? 'cta-choise-teacher cta-choosen' : 'cta-choise-student'} onClick={() =>handleClick("teacher")}>
              <Image
                className=""
                src={require('./../../assets/images/CallToAction/teacher.png')}
                alt="Hero"
                width={100} />
                <p>I am a teacher!</p>
            </div>
          </div>
          <div className="cta-action">
            <Input id="newsletter" type="email" label="Subscribe" labelHidden placeholder="Εmail">
            </Input>

            <Button tag="a" color="primary" wideMobile href="/contact">
                   Εγγραφή
                    </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

CallToAction.propTypes = propTypes;
CallToAction.defaultProps = defaultProps;

export default CallToAction;