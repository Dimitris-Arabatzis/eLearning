import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import { useState } from 'react';
import Image from '../elements/Image';


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const HowTo = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Πως δουλεύει?',
    paragraph: 'Η πλατφόρμα είναι εύκολη, είτε είσαι καθηγητής είτε μαθητής!'
  };

  const[isStudent,setIsStudent] = useState(false);

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          <ButtonGroup className={"how-to-buttons"}>
            <Button tag="a" color={isStudent ? "primary how-to-choosen" : "dark"} wideMobile onClick={() => setIsStudent(true)}>
              Μαθητής/τρια
            </Button>
            <Button tag="a" color={!isStudent ? "primary how-to-choosen" : "dark"} wideMobile onClick={() => setIsStudent(false)}>
              Καθηγητής/τρια
            </Button> 
          </ButtonGroup>

          <div className={splitClasses}>

          <Image
            src={isStudent ? require('./../../assets/images/HowToStudent.png') : require('./../../assets/images/HowToTeacher.png') }
            alt="Open"
            className={"how-to-image"}
             />

          </div>
        </div>
      </div>
    </section>
  );
}

HowTo.propTypes = propTypes;
HowTo.defaultProps = defaultProps;

export default HowTo;