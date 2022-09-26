import { IconContext } from 'react-icons';
import { Icon } from './Icon';
import { iconData } from './data/icondata';
import styles from '../styles/Stack.module.scss';

export const Stack = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <h1>Tech Stack</h1>
      <IconContext.Provider value={{ color: 'papayawhip', size: '70' }}>
        <ul>
          {iconData.map((icon) => {
            return <Icon key={icon.name} icon={icon.icon} name={icon.name} />;
          })}
        </ul>
      </IconContext.Provider>
    </section>
  );
};
