import styled from 'styled-components';

const TagElement = styled.li`
  border: 1px solid;
  border-radius: 5px;
  margin: 0.5rem;
  padding: 0.5rem;

  @media screen and (max-width: 768px) {
    margin: 0.1rem;
    padding: 0;
    font-size: 12px;
  }
`;
const TagsContainer = styled.ul`
  display: flex;
`;
function Tags({ proj }) {
  return (
    <TagsContainer>
      {proj.tags.map((tag) => {
        return <TagElement key={tag + proj.title}> {tag} </TagElement>;
      })}
    </TagsContainer>
  );
}

export default Tags;
