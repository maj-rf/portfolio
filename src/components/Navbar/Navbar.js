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
import { Link } from 'react-scroll';

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
        <Links>
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-50}
            duration={100}
          >
            Home
          </Link>
        </Links>
        <Links>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            About
          </Link>
        </Links>
        <Links>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
            duration={100}
          >
            Projects
          </Link>
        </Links>
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
          <Links>
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </Links>
          <Links>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </Links>
          <Links>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-60}
              duration={100}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </Links>
        </Dropdown>
      )}
    </NavWrapper>
  );
}
