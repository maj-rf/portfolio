import styled from 'styled-components';
import { useState } from 'react';
import {
  NavWrapper,
  Moon,
  Sun,
  ModeButton,
  LinkContainer,
  Links,
} from './Navbar.style';
import { Dog } from '@styled-icons/fa-solid/Dog';

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <NavWrapper>
      <LinkContainer>
        <p>maj.dev</p>

        <li>
          <Dog></Dog>
        </li>
      </LinkContainer>
      <div>
        <LinkContainer>
          <Links>Home</Links>
          <Links>About Me</Links>
          <Links>Projects</Links>
        </LinkContainer>
      </div>
      <div>
        {theme === 'light' ? (
          <Moon onClick={toggleTheme} />
        ) : (
          <Sun onClick={toggleTheme} />
        )}
      </div>
    </NavWrapper>
  );
}
