import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>
          {/* specializing in builmjjjding exceptional digital experiences.  */}
          <div className={s.description}>
            <p>
              I'm a Ui/Ux and Full Stack Developer  🚀 <br />
              specializing in building exceptional
              <i>
                <b className={s.purple}> Web </b>
              </i>{' '}
              applications with
              <br />
              <i>
                <b className={s.purple}>
                  JavaScript,AngularJS,Reactjs,Nodejs,Java,Springboot
                </b>
              </i>{' '}
              and some other cool libraries
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>

        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaTwitter />
            </a>
          </li>

          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
