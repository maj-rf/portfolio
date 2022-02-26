import styled from 'styled-components';

const CardContainer = styled.li``;

const ProjImg = styled.img`
  max-width: 100%;
  height: auto;
  border: 1px solid;

  @media screen and (max-width: 280px) {
    //Samsung Fold
    width: 90vw;
    height: auto;
  }
`;

export { ProjImg, CardContainer };
