import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 0;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.nav};
  color: ${(props) => props.theme.text};
  //box-shadow: ${(props) => props.theme.shadow};
  display: flex;
  justify-content: space-between;
  z-index: 1;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    font-size: 15px;

    & ul:first-child {
      display: none;
    }
  }
`;

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

export default function Navbar({ theme, toggleTheme }) {
  return (
    <NavWrapper>
      <LinksContainer>
        <NavLink>Home</NavLink>
        <NavLink>Skills</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Contact Me</NavLink>
      </LinksContainer>
      <button onClick={toggleTheme}></button>
    </NavWrapper>
  );
}
