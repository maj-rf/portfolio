import { useState } from 'react';
import {
  NavWrapper,
  Moon,
  Sun,
  LinksContainer,
  Links,
  DogIcon,
  LogoContainer,
  BurgerMenu,
  ButtonsContainer,
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
      <LinksContainer>
        <Links>Home</Links>
        <Links>About Me</Links>
        <Links>Projects</Links>
      </LinksContainer>
      <ButtonsContainer>
        <BurgerMenu onClick={handleMenu} />
        {theme === 'light' ? (
          <Moon onClick={toggleTheme} />
        ) : (
          <Sun onClick={toggleTheme} />
        )}
      </ButtonsContainer>
    </NavWrapper>
  );
}
