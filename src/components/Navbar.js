import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  font-size: 1.2em;
  background-color: #191919;
  color: #fff;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  overflow: hidden;
`;

const LinksContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  & li:hover {
    background-color: antiquewhite;
    color: blue;
  }
`;

const NavLink = styled.li`
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 5px 5px;
  padding: 1em;
`;
export default function Navbar() {
  // const [navState, setNavState] = useState(false);
  // const [linkState, setLinkState] = useState(false);

  // useEffect(() => {
  //   function handleNavbar() {
  //     console.log(window.scrollY);
  //     if (window.scrollY >= 700) {
  //       setNavState(true);
  //     } else setNavState(false);
  //   }
  //   window.addEventListener('scroll', handleNavbar);

  //   return () => {
  //     window.removeEventListener('scroll', handleNavbar);
  //   };
  // }, []);

  // useEffect(() => {});

  return (
    <NavWrapper>
      <LinksContainer>
        <NavLink>Home</NavLink>
        <NavLink>Skills</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Contact</NavLink>
      </LinksContainer>
      <button>O</button>
    </NavWrapper>
  );
}
