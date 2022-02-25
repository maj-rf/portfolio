import { useState } from 'react';
import {
  NavWrapper,
  Moon,
  Sun,
  LinkContainer,
  Links,
  DogIcon,
  LogoContainer,
} from './Navbar.style';

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <NavWrapper>
      <LogoContainer>
        maj.dev
        <span>
          <DogIcon />
        </span>
      </LogoContainer>
      <LinkContainer>
        <Links>Home</Links>
        <Links>About Me</Links>
        <Links>Projects</Links>
      </LinkContainer>
      {theme === 'light' ? (
        <Moon onClick={toggleTheme} />
      ) : (
        <Sun onClick={toggleTheme} />
      )}
    </NavWrapper>
  );
}
