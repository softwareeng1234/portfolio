import s from './IntroSection.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import newAvatar from '../../../assets/images/im2.jpg'; // Update this path

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
              I'm a Full Stack Developer expert in front end and backend technologies  🚀 <br />
              specializing in building exceptional
              <i>
                <b className={s.purple}> Web </b>
              </i>{' '}
              applications with
              <br />
              <i>
                <b className={s.purple}>
                  JavaScript,AngularJS,Reactjs,Nodejs,Java,Springboot,Python
                </b>
              </i>{' '}
              and some other cool libraries
            </p>
          </div>
        </div>

        {/* <Tilt trackOnWindow={true}>
    <LazyLoadImage 
      alt="avatar" 
      effect="blur" 
      src={newAvatar}
      className="rounded-full" // Add this if you want the image to be circular
    />
  </Tilt> */}
  <Tilt trackOnWindow={true}>
    <div style={{
      width: '300px',
      height: '300px',
      overflow: 'hidden',
      borderRadius: '50%',
      margin: '0 auto', // Centers the avatar if needed
    }}>
      <LazyLoadImage 
        alt="avatar" 
        effect="blur" 
        src={newAvatar}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
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
