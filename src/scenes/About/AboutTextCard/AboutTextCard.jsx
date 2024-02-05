import s from './AboutTextCard.module.scss';


const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
       Hola, I am{' '}
        <span className={s.purple}>Imran Mohammed </span>
        presently based in  <span className={s.purple}> Chicago, USA</span> <br />
       With over a decade of expertise, I have a robust background in developing intricate web applications, utilizing technologies such as HTML, CSS, MySQL, JavaScript, XML, jQuery, AngularJS, Node.js, ReactJS, Vue.js, AJAX, and JSON. Proficient in DOM manipulation through JavaScript, jQuery, and AngularJS, I excel in creating responsive web and mobile designs using different Ui/Ux tools like figma,adobe. My skill set extends to HTML5, CSS, Bootstrap, JavaScript, jQuery, JSON, XML, AJAX, AngularJS, ReactJS, RequireJS, NodeJS, ECMAScript 6 (ES6), and TypeScript. Additionally, I have hands-on experience with ReactJS, React Flux, and Redux architectures, implementing complex Object-Oriented concepts to enhance website performance.
 
      </p>

      <ul>
        <li className={s.aboutActivity}>Playing Games<i class='fas fa-futbol'></i></li>
        <li className={s.aboutActivity}>Reading <i class="fa fa-book"></i></li>
        <li className={s.aboutActivity}>Travelling <i class="fa fa-car"></i></li>
        
      </ul>
    </div>
  );
};

export default AboutTextCard;
