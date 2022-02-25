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
  CloseIcon,
  Dropdown,
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
        <Links>About</Links>
        <Links>Projects</Links>
      </LinksContainer>
      <ButtonsContainer>
        {menuOpen ? (
          <CloseIcon onClick={handleMenu} />
        ) : (
          <BurgerMenu onClick={handleMenu} />
        )}

        {theme === 'light' ? (
          <Moon onClick={toggleTheme} />
        ) : (
          <Sun onClick={toggleTheme} />
        )}
      </ButtonsContainer>
      {menuOpen && (
        <Dropdown>
          <Links>Home</Links>
          <Links>About</Links>
          <Links>Projects</Links>
        </Dropdown>
      )}
    </NavWrapper>
  );
}
