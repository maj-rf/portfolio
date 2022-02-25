import styled from 'styled-components';
import { MdDarkMode, MdOutlineWbSunny } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const LinksContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;

  & li:last-child {
    background-color: #02a3ee;
  }
  //#02a3ee;
`;

const NavLink = styled.li`
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 7px 7px;
  padding: 0.7rem;

  &:hover {
    color: #ee4e02;
  }
`;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.nav};
  color: ${(props) => props.theme.text};
  //box-shadow: ${(props) => props.theme.shadow};
  display: flex;
  justify-content: space-between;
  z-index: 1;
  overflow: hidden;

  .mode-icon {
    height: 50px;
    width: auto;
  }

  .hamburg-icon {
    height: 50px;
    width: auto;
    display: none;
  }

  @media only screen and (max-width: 768px) {
    font-size: 15px;

    .hamburg-icon {
      display: block;
    }
    ${LinksContainer} {
      flex-direction: column;
    }
    ${NavLink} {
      margin-top: 1rem;
      display: none;
      padding: 1rem;
    }

    ${NavLink}.active {
      display: block;
    }
  }
`;

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <NavWrapper>
      <IconContext.Provider value={{ className: 'hamburg-icon' }}>
        <GiHamburgerMenu onClick={handleMenu} />
      </IconContext.Provider>

      <LinksContainer>
        <NavLink className={menuOpen ? 'active' : ''}>Home</NavLink>
        <NavLink className={menuOpen ? 'active' : ''}>Skills</NavLink>
        <NavLink className={menuOpen ? 'active' : ''}>Projects</NavLink>
        <NavLink className={menuOpen ? 'active' : ''}>Contact Me</NavLink>
      </LinksContainer>

      <IconContext.Provider value={{ className: 'mode-icon' }}>
        {theme === 'dark' ? (
          <MdDarkMode onClick={toggleTheme} />
        ) : (
          <MdOutlineWbSunny onClick={toggleTheme} />
        )}
      </IconContext.Provider>

      {/* <nav
        class="Navbar__Items"
        className={menuOpen ? '' : 'Navbar__ToggleShow'}
      >
        <div class="Navbar__Link Navbar__Link-brand">Website title</div>
        <div>
          <GiHamburgerMenu onClick={handleMenu} />
        </div>
        <div class="Navbar__Link">Link</div>
        <div class="Navbar__Link">Link</div>
        <div class="Navbar__Link">Link</div>
      </nav>
      <nav
        class="Navbar__Items Navbar__Items--right"
        className={menuOpen ? '' : 'Navbar__ToggleShow'}
      >
        <div class="Navbar__Link">Link</div>
        <div class="Navbar__Link">Link</div>
      </nav> */}
    </NavWrapper>
    // <NavWrapper>
    //   <div>X</div>
    //   <LinksContainer>
    //     <NavLink>Home</NavLink>
    //     <NavLink>Skills</NavLink>
    //     <NavLink>Projects</NavLink>
    //     <NavLink>Contact Me</NavLink>
    //   </LinksContainer>
    //   <IconContext.Provider value={{ className: 'mode-icon' }}>
    //     {theme === 'dark' ? (
    //       <MdDarkMode onClick={toggleTheme} />
    //     ) : (
    //       <MdOutlineWbSunny onClick={toggleTheme} />
    //     )}
    //   </IconContext.Provider>
    // </NavWrapper>
  );
}
