import { iconData } from '../icondata';
import { IconContext } from 'react-icons';
interface tagProps {
  tag: string;
}

export const Tags = (props: tagProps) => {
  const filtered = iconData.filter((icon) => {
    return icon.name.toLowerCase() === props.tag.toLowerCase();
  });
  return (
    <IconContext.Provider value={{ color: 'papayawhip' }}>
      <li> {filtered.length !== 0 ? filtered[0]?.icon : props.tag}</li>
    </IconContext.Provider>
  );
};
