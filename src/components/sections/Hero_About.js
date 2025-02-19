import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Είμαστε η <span className="text-color-primary">Lingi</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Η ομάδα του Lingi.gr, σε καλωσορίζει στον υπέροχο κόσμο της μάθησης ξένων γλωσσών. Προσφέρουμε κάτι μοναδικό που σίγουρα δεν θες να χάσεις! Στόχος μας είναι η δημιουργία μιας κοινότητας αποκλειστικά για ξένες γλώσσες! Στην πλατφόρμα μας μπορείς να μάθεις με 2 τρόπους:</p>
              
              <ol className="reveal-from-bottom" data-reveal-delay="400">
                <li>
Μέσω Βιντεοσκοπημένων μαθημάτων
</li>
<li>
Μέσω ιδιαίτερων μαθημάτων </li>

              </ol>
              <div className="reveal-from-bottom" data-reveal-delay="600">
              <Link to="/Contact" className="button button-primary button-wide-mobile button-sm">Επικοινωνείστε μαζί μας!</Link>
              </div>

              <Image className="reveal-from-bottom" data-reveal-delay="600"
                      src={require('./../../assets/images/about-us.png')}
                      alt="About us icon explanation"
                      />
            </div>
          </div>
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div> */}
          {/* <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;