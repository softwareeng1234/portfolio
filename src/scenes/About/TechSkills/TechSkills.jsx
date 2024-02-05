import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
  DiSpark
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiAmazonaws,
  SiHeroku,
  SiJest,
  SiMysql,
  SiAngularjs,
  SiOracle,
  SiPython,
  SiJava,
  SiMicrosoftsqlserver,
  SiGooglecloud
} from 'react-icons/si';
import {GrHadoop} from 'react-icons/gr';
const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
        <p className={s.techDesc}>Javascript</p>
      </li>
      <li className={s.techIcon}>
        <SiPython />
        <p className={s.techDesc}>Python</p>
      </li>
      <li className={s.techIcon}>
        <SiJava />
        <p className={s.techDesc}>Java</p>
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
        <p className={s.techDesc}>Typescript</p>
      </li>
      <li className={s.techIcon}>
        <SiAngularjs />
        <p className={s.techDesc}>AngularJs</p>
      </li>
      <li className={s.techIcon}>
        <DiReact />
        <p className={s.techDesc}>ReactJS</p>
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
        <p className={s.techDesc}>NodeJS</p>
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
        <p className={s.techDesc}>MongoDB</p>
      </li>
      <li className={s.techIcon}>
        <SiOracle />
        <p className={s.techDesc}>OracleDb</p>
      </li>
      <li className={s.techIcon}>
        <SiMysql />
        <p className={s.techDesc}>SQL</p>
      </li>
      <li className={s.techIcon}>
        <SiMicrosoftsqlserver />
        <p className={s.techDesc}>SQL Server 19</p>
      </li>
      <li className={s.techIcon}>
        <DiSass />
        <p className={s.techDesc}>Sass</p>
      </li>
      <li className={s.techIcon}>
        <SiGooglecloud />
        <p className={s.techDesc}>GCP</p>
      </li>
      <li className={s.techIcon}>
        <SiAmazonaws />
        <p className={s.techDesc}>AWS</p>
      </li>
      <li className={s.techIcon}>
        <SiRedux />
        <p className={s.techDesc}>Redux</p>
      </li>

      <li className={s.techIcon}>
        <DiGit />
        <p className={s.techDesc}>Git</p>
      </li>
      <li className={s.techIcon}>
        <SiHeroku />
        <p className={s.techDesc}>Heroku</p>
      </li>
      <li className={s.techIcon}>
        <SiJest />
        <p className={s.techDesc}>Jest</p>
      </li>

      


      
      <li className={s.techIcon}>
        <DiSpark />
        <p className={s.techDesc}>PySpark</p>
      </li>
      <li className={s.techIcon}>
        <GrHadoop />
        <p className={s.techDesc}>Hadoop</p>
      </li>
    </ul>
  );
};

export default TechSkills;
