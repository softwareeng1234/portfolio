import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Made with ❤️ by Imran Mohammed</h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} </h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/14imran"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/mohammedimran14/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
