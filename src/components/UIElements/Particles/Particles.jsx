import ReactParticles from 'react-tsparticles';
import {
  DARK_THEME_PARTICLES,
  LIGHT_THEME_PARTICLES,
} from './particleType';
import { useThemeContext } from '../../../hooks/themeHook/themeHook';
import { loadFull } from 'tsparticles';
const Particles = () => {
  const { dark } = useThemeContext();

  const particles = dark
    ? DARK_THEME_PARTICLES
    : LIGHT_THEME_PARTICLES;

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <ReactParticles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: particles,
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particles;
