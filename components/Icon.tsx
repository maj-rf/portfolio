import { IconType } from './types/iconType';
import styles from '../styles/Icon.module.scss';
export const Icon = (props: IconType) => {
  return (
    <li className={styles.icon}>
      <div>{props.icon}</div>
      <p>{props.name}</p>
    </li>
  );
};
