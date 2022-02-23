import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  font-size: 1.2rem;
  background-color: #121212;
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

  & li:last-child {
    background-color: #02a3ee;
    padding: 0.5rem;
  }

  & li:last-child:hover {
    color: #121212;
  }
`;

const NavLink = styled.li`
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 7px 7px;
  padding: 1rem;

  &:hover {
    color: #ee4e02;
  }
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
        <NavLink>Contact Me</NavLink>
      </LinksContainer>
      <button>O</button>
    </NavWrapper>
  );
}
