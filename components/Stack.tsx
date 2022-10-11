import { IconContext } from 'react-icons';
import { Icon } from './Icon';
import { iconData } from './data/icondata';
import styles from '../styles/Stack.module.scss';
import utils from '../styles/utils.module.scss';
export const Stack = (): JSX.Element => {
  return (
    <section className={`${utils.container} ${styles.container}`}>
      <h2>Tech Stack</h2>
      <IconContext.Provider value={{ color: 'papayawhip', size: '30' }}>
        <ul>
          {iconData.map((icon) => {
            return <Icon key={icon.name} icon={icon.icon} name={icon.name} />;
          })}
        </ul>
      </IconContext.Provider>
    </section>
  );
};
