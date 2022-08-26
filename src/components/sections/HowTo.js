import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import { useState } from 'react';

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

  var textsStudent = {
    step1: "Αν θες να παρακολουθήσεις βιντεοσκοπημένα μαθήματα ή να βρεις καθηγητές για ιδιαίτερα.",
    step1Header: "Επιλέγεις...",
    step1Comment: "Εύκολη επιλογή",
    step2: "Τα στοιχεία επικοινωνίας σου.",
    step2Header: "Συμπληρώνεις...",
    step2Comment: "Απλά και κατανοητά",
    step3: "Κάνεις μαθήματα όπου και όποτε θελήσεις",
    step3Header: "Αντιστοίχηση με καθηγητές",
    step3Comment: "Γρήγορη διαδικασία",
  };

  var textsTeacher = {
    step1: "Αν θέλεις να κάνεις ιδιαίτερα ή αν σε ενδιαφέρει να συνεργαστείς με την ομάδα μας και να μπεις στον νέο κόσμο της ασύγχρονης εκπαίδευσης.",
    step1Header: "Επιλέγεις...",
    step1Comment: "Εύκολη επιλογή",
    step2: "Συμπληρώνεις τα στοιχεία μαζί με το βιογραφικό σου και τα μαθήματα που διδάσκεις.",
    step2Header: "Συμπληρώνεις...",
    step2Comment: "Απλά και κατανοητά",
    step3: "Οι μαθητές βλέπουν το προφίλ σου και επικοινωνούν μαζί σου!",
    step3Header: "Αντιστοίχηση με μαθητές",
    step3Comment: "Γρήγορη διαδικασία",
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          <ButtonGroup className={"how-to-buttons"}>
            <Button tag="a" color={isStudent ? "primary" : "dark"} wideMobile onClick={() => setIsStudent(true)}>
              Μαθητής/τρια
            </Button>
            <Button tag="a" color={!isStudent ? "primary" : "dark"} wideMobile onClick={() => setIsStudent(false)}>
              Καθηγητής/τρια
            </Button> 
          </ButtonGroup>

          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  { isStudent ? textsStudent.step1Comment : textsTeacher.step1Comment}
                  </div>
                <h3 className="mt-0 mb-12">
                { isStudent ? textsStudent.step1Header : textsTeacher.step1Header}
                  </h3>
                <p className="m-0">
                  { isStudent ? textsStudent.step1 : textsTeacher.step1}
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <h3 className='how-to-step'>Βήμα 1</h3>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                { isStudent ? textsStudent.step2Comment : textsTeacher.step2Comment}
                  </div>
                <h3 className="mt-0 mb-12">
                { isStudent ? textsStudent.step2Header : textsTeacher.step2Header}
                  </h3>
                <p className="m-0">
                { isStudent ? textsStudent.step2 : textsTeacher.step2}
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <h3 className='how-to-step'>Βήμα 2</h3>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                { isStudent ? textsStudent.step3Comment : textsTeacher.step3Comment}
                  </div>
                <h3 className="mt-0 mb-12">
                { isStudent ? textsStudent.step3Header : textsTeacher.step3Header}
                  </h3>
                <p className="m-0">
                { isStudent ? textsStudent.step3 : textsTeacher.step3}
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <h3 className='how-to-step'>Βήμα 3</h3>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

HowTo.propTypes = propTypes;
HowTo.defaultProps = defaultProps;

export default HowTo;